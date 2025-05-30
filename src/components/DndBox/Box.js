import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import styles from './styles.module.css'
import { Input, Form, Button } from 'antd';
import { Colors } from '../../constants';
import { UncontrolledTooltip } from 'reactstrap';
import Recorder from '../Recorder';

const style = {
  position: 'absolute',
  // border: '1px solid gray',
  backgroundColor: '#25AC52',
  padding: '0.5rem 1rem',
  borderRadius: 5,
  fontSize: 15,
  fontWeight: '600',
  color: 'white',
  cursor: 'move',
  zIndex: 999
};

const { TextArea } = Input;

export const Box = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
  onClick,
  contentVisible,
  text,
  color,
  audioData,
  onChangeColor,
  onRemoveNote,
  onChangeText,
  onSaveRecord,
}) => {
  const [state] = React.useState({
    colorBox: [Colors.green, Colors.red, Colors.yellow],
    recordURL: null
  })

  const buttonRef = React.useRef()

  const onFinish = React.useCallback((value) => {
    onChangeText(value.textArea)
  }, [onChangeText])

  const onSaveNote = React.useCallback(() => {
    buttonRef.current?.click();
  }, [])

  const onStopRecording = React.useCallback((results) => {
    if (!results) return;
    const reader = new FileReader();
    reader.readAsDataURL(results.blob);
    reader.onloadend = async () => {
      await onSaveRecord(reader.result)
    }

  }, [onSaveRecord])

  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  return (
    <>
      <div onClick={onClick} ref={drag} style={{ ...style, left, top, backgroundColor: color }}>
        {/* {children} */}
        <i className="far fa-clipboard"></i>
      </div>
      {contentVisible && (
        <div
          // id={id}
          style={{
            width: 320,
            // height: 250,
            padding: 10,
            zIndex: 999,
            top: top + 30,
            color: 'white',
            left: left + 30,
            position: 'absolute',
            backgroundColor: color,
          }}
        >
          {/* ////////// */}
          {/* Button change color - Save - Delete */}
          <div style={{
            height: 40,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>

            {state.colorBox.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: item }}
                  onClick={() => onChangeColor(item)}
                  className={`${styles.boxContain} mt-2`}
                />
              )
            })}
            <Button id='toolTipSave' onClick={onSaveNote} className='mr-2' style={{ fontSize: 15, fontWeight: '600', cursor: 'pointer' }}>
              <i className="fas fa-check"></i>
            </Button>
            <UncontrolledTooltip delay={0} placement="top" target='toolTipSave'>
              Save
            </UncontrolledTooltip>
            <Button id='toolTipDelete' onClick={onRemoveNote} style={{ cursor: 'pointer' }}>
              <i className="fas fa-trash"></i>
            </Button>
            <UncontrolledTooltip delay={0} placement="top" target='toolTipDelete'>
              Delete
            </UncontrolledTooltip>
          </div>
          {/* ////////// */}
          {/* Text Area */}
          <div id={id} style={{ display: 'flex', width: 320, flexWrap: 'wrap' }}>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              style={{ width: 300 }}
            >
              <Form.Item initialValue={text} name='textArea'>
                <TextArea rows={5} />
              </Form.Item>
              <Button style={{ display: 'none' }} ref={buttonRef} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </div>
          {/* RECORD */}
          <div className='d-flex justify-content-center'>
            <span className='ml-4 mr-2'>
              <Recorder
                seconds={120}
                // onRecording={onRecording}
                onStop={onStopRecording}
              />
            </span>

          </div>
          {audioData && (
            <div className='mt-2'>
              <audio
                controls
                src={audioData}>
              </audio>
            </div>
          )}
        </div>
      )}
    </>
  );
};
