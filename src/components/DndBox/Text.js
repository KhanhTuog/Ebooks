import React from 'react';
import { useDrag } from 'react-dnd';
import { Editor } from '@tinymce/tinymce-react';

import styles from './Text.module.css';
import { ItemTypes } from './ItemTypes';

const Text = ({
  id,
  top,
  left,
  color,
  content,
  zIndex,
  onSave,
  onRemove,
}) => {
  const [state, setState] = React.useState({
    content,
    editting: false,
  });

  const [, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.TEXT },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleEditorChange = React.useCallback((text, editor) => {
    setState((prevState) => ({ ...prevState, content: text }));
  }, []);

  const setup = React.useCallback((editor) => {
    editor.ui.registry.addButton('Save', {
      text: 'Save',
      onAction: () => {
        setState((prevState) => {
          onSave(prevState.content);
          return ({ ...prevState, editting: false });
        });
      }
    });
    editor.ui.registry.addButton('CustomRemove', {
      text: 'Remove',
      onAction: () => {
        setState((prevState) => ({ ...prevState, editting: false }));
        onRemove();
      },
    });
  }, [onRemove, onSave]);

  const onClickText = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, editting: true }))
  }, [])

  return (
    <div ref={drag} className={styles.container} style={{ color, left, top }}>
      {!state.editting && <div dangerouslySetInnerHTML={{ __html: content }} onClick={onClickText} />}
      {state.editting && (
        <div className={styles.editor}>
          <Editor
            initialValue={content}
            apiKey="d40k6qg8qy1hclt4fe3is1v0u3rlri973c2cu4ixm4iukmb9"
            init={{
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'formatselect | italic forecolor fontsizeselect | Save CustomRemove',
              setup,
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
      )}
    </div>
  );
}

export default Text;
