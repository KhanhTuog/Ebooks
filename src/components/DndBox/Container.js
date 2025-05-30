import React from 'react';
import { Box } from './Box';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import update from 'immutability-helper';
import { useParams } from 'react-router-dom';
import { localStorageKey } from '../../constants';
import Text from './Text';

export const Container = ({ hideSourceOnDrag, setDrop, noteText, forceAddText }) => {

  const params = useParams();

  const currentPage = parseInt(params.currentPage);

  const [state, setState] = React.useState({
    boxes: [],
    texts: [],
  });

  React.useEffect(() => {
    const arrayNote = localStorage.getItem(localStorageKey.NOTE_BOX)
    if (arrayNote) {
      const boxes = JSON.parse(arrayNote);
      setState((prevState) => ({ ...prevState, boxes: boxes[currentPage] || [] }))
    }
  }, [currentPage, noteText]);

  React.useEffect(() => {
    let textTool = localStorage.getItem(localStorageKey.TEXT_TOOL)
    if (textTool) {
      textTool = JSON.parse(textTool);
      setState((prevState) => ({ ...prevState, texts: textTool[currentPage] || [] }))
    }
  }, [currentPage, forceAddText])

  const [, drop] = useDrop({

    accept: [ItemTypes.BOX, ItemTypes.TEXT],
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveBox(item.id, left, top, item.type);

      return undefined;
    },
  });

  React.useEffect(() => {
    setDrop(drop)
  }, [drop, setDrop])

  const moveBox = (id, left, top, type) => {
    if (type === ItemTypes.BOX) {
      const arrayNote = localStorage.getItem(localStorageKey.NOTE_BOX)
      if (arrayNote) {
        const boxes = JSON.parse(arrayNote);
        boxes[currentPage][id].top = top;
        boxes[currentPage][id].left = left;
        localStorage.setItem(localStorageKey.NOTE_BOX, JSON.stringify(boxes));
      }

      setState((prevState) => {
        let { boxes } = prevState;
        boxes = update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
        return ({ ...prevState, boxes });
      })
    } else {
      let storedTexts = localStorage.getItem(localStorageKey.TEXT_TOOL);
      storedTexts = JSON.parse(storedTexts);
      storedTexts[currentPage][id].top = top;
      storedTexts[currentPage][id].left = left;
      localStorage.setItem(localStorageKey.TEXT_TOOL, JSON.stringify(storedTexts));
      setState((prevState) => {
        let { texts } = prevState;
        texts = update(texts, {
          [id]: {
            $merge: { left, top },
          },
        })
        return ({ ...prevState, texts });
      })
    }
  };

  const onClick = React.useCallback((item, index) => () => {
    setState((prevState) => {
      const { boxes } = prevState;
      const boxArray = JSON.parse(JSON.stringify(boxes));
      boxArray[index].contentVisible = !boxArray[index].contentVisible;
      return ({ ...prevState, boxes: boxArray });
    });
  }, []);

  const onChangeText = React.useCallback((item, index) => (value) => {
    onClick(item, index)();
    setState((prevState) => {
      const arrayNote = localStorage.getItem(localStorageKey.NOTE_BOX)
      if (arrayNote) {
        const boxes = JSON.parse(arrayNote);
        boxes[currentPage][index].text = value;
        localStorage.setItem(localStorageKey.NOTE_BOX, JSON.stringify(boxes));
      }
      prevState.boxes[index].text = value;
      return ({ ...prevState, boxes: prevState.boxes })
    })

  }, [currentPage, onClick])

  //xoa note
  const onRemoveNote = React.useCallback((item, index) => () => {
    setState((prevState) => {
      const arrayNote = localStorage.getItem(localStorageKey.NOTE_BOX)
      if (arrayNote) {
        const boxes = JSON.parse(arrayNote);
        boxes[currentPage].splice(index, 1);

        localStorage.setItem(localStorageKey.NOTE_BOX, JSON.stringify(boxes));
        return ({ ...prevState, boxes: boxes[currentPage] })
      }
    })
  }, [currentPage])

  //Đổi màu note
  const onChangeColor = React.useCallback((item, index) => (color) => {
    setState((prevState) => {
      const arrayNote = localStorage.getItem(localStorageKey.NOTE_BOX)
      if (arrayNote) {
        const boxes = JSON.parse(arrayNote);
        boxes[currentPage][index].color = color;
        localStorage.setItem(localStorageKey.NOTE_BOX, JSON.stringify(boxes));
      }
      prevState.boxes[index].color = color;
      return ({ ...prevState, boxes: prevState.boxes })
    })
  }, [currentPage])

  //Save Rercord
  const onSaveRecord = React.useCallback((index) => (base64data) => {
    setState((prevState) => {
      const arrayNote = localStorage.getItem(localStorageKey.NOTE_BOX)
      if (arrayNote) {
        const boxes = JSON.parse(arrayNote);
        boxes[currentPage][index].audioData = base64data;
        localStorage.setItem(localStorageKey.NOTE_BOX, JSON.stringify(boxes));
      }
      prevState.boxes[index].audioData = base64data;
      return ({ ...prevState, boxes: prevState.boxes })
    })
  }, [currentPage]);

  const renderBoxItem = React.useCallback((item, index) => {
    const { left, top, title, color, text, audioData } = item;
    return (
      <Box
        id={index}
        key={index}
        top={top}
        left={left}
        color={color}
        text={text}
        audioData={audioData}
        currentPage={currentPage}
        onClick={onClick(item, index)}
        onChangeColor={onChangeColor(item, index)}
        onSaveRecord={onSaveRecord(index)}
        onRemoveNote={onRemoveNote(item, index)}
        onChangeText={onChangeText(item, index)}
        contentVisible={item.contentVisible}
        hideSourceOnDrag={hideSourceOnDrag}
      >
        {title}
      </Box>
    );
  }, [currentPage, hideSourceOnDrag, onChangeColor, onChangeText, onClick, onRemoveNote, onSaveRecord]);

  const onSave = React.useCallback((item, index) => (content) => {
    let textTool = localStorage.getItem(localStorageKey.TEXT_TOOL);

    textTool = JSON.parse(textTool);

    textTool[currentPage][index].content = content;

    localStorage.setItem(localStorageKey.TEXT_TOOL, JSON.stringify(textTool));

    setState((prevState) => ({ ...prevState, texts: textTool[currentPage] }))
  }, [currentPage]);

  const onRemove = React.useCallback((item, index) => () => {
    let textTool = localStorage.getItem(localStorageKey.TEXT_TOOL);

    textTool = JSON.parse(textTool);

    textTool[currentPage].splice(index, 1);

    localStorage.setItem(localStorageKey.TEXT_TOOL, JSON.stringify(textTool));

    setState((prevState) => ({ ...prevState, texts: textTool[currentPage] }))
  }, [currentPage])

  // Render Text
  const renderTextItem = React.useCallback((item, index) => (
    <Text
      id={index}
      key={index}
      onSave={onSave(item, index)}
      onRemove={onRemove(item, index)}
      {...item}
    />
  ), [onRemove, onSave])

  if (!state.boxes) return null;

  return (
    <>
      {state.texts.map(renderTextItem)}
      {state.boxes.map(renderBoxItem)}
    </>
  );
};
