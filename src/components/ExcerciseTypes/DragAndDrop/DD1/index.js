import React from 'react'
import classNames from 'classnames';
import { Player } from 'video-react';
import { Container, Row } from 'reactstrap';

import DragItem from './DragItem';
import DropZone from './DropZone';
import FooterModal from '../../../FooterModal';
import TitleQuestion from '../../../TitleQuestion';

import styles from './styles.module.css';
import 'video-react/dist/video-react.css';

const DD1 = (props) => {
  const correctAnswers = React.useMemo(() => {
    return props.questions.filter(x => typeof x.correctIndex === 'number')
  }, [props.questions]);

  const defaultState = React.useRef({
    isPointed: false,
    dragItems: JSON.parse(JSON.stringify(props.questions)),
    dropZones: Array(correctAnswers.length).fill({}),
  });

  const [state, setState] = React.useState(JSON.parse(JSON.stringify(defaultState.current)));

  const onDrop = React.useCallback((item, index) => (payload) => {
    setState((prevState) => {
      const { dragItems, dropZones } = prevState;

      if (item === -1) {// Drop from answer place to drag answer list
        const dropIndex = dropZones.findIndex((x) => x.text === payload.text);
        if (dropIndex > -1) {
          dropZones[dropIndex] = {};

          dragItems.push(payload);
        }
      } else {
        const dragIndex = dragItems.findIndex((x) => x.text === payload.text);

        if (dragIndex > -1) { // Drop from answer list
          let temp;
          if (dropZones[index].text) { // Drop to exist answer place
            temp = JSON.parse(JSON.stringify(dropZones[index]));
          }

          dropZones[index] = payload;

          if (temp) { // Drop to exist answer place
            dragItems.splice(dragIndex, 1, temp);
          } else {
            dragItems.splice(dragIndex, 1);
          }
        } else { // Drop around from answer places
          const prevDropIndex = dropZones.findIndex((x) => x.text === payload.text);

          // swap position ES6
          [dropZones[prevDropIndex], dropZones[index]] = [dropZones[index], dropZones[prevDropIndex]];
        }
      }

      return ({ ...prevState, dropZones, dragItems });
    })
  }, []);

  const renderDragItem = React.useCallback((item, index) => {
    return (
      <DragItem
        key={index}
        item={item}
        className={`${styles.dragItem} ${styles.textCenter}`}
      >
        {item.text}
      </DragItem>
    );
  }, []);

  const renderDropZoneItem = React.useCallback((item, index) => {
    let isCorrect = correctAnswers.findIndex((x) => x.text === item.text) > -1;

    if (props.sortable) {
      const correctAnswer = correctAnswers.find((x) => x.text === item.text);
      isCorrect = index === correctAnswer?.correctIndex;
    }

    const customStyles = {};

    const imageVisible = typeof correctAnswers[index].image === 'string';

    if (state.isPointed) {
      customStyles.color = isCorrect ? 'green' : 'red';
    }

    return (
      <DropZone
        key={index}
        className={classNames({
          [styles.flex]: true,
          [styles.dropZone]: true,
          [styles.columnFlex]: imageVisible,
          [styles.alignCenter]: imageVisible,
          [styles.justifyCenter]: !imageVisible,
        })
        }
        onZoneDrop={onDrop(item, index)} >
        { imageVisible && (
          <div className={`${styles.flex} ${styles.columnFlex} ${styles.alignCenter}`}>
            <img src={correctAnswers[index].image} alt="" className={styles.dropZoneImage} />
          </div>
        )}
        <div className={`${styles.flex} ${styles.alignCenter} ${styles.dropZoneText}`}>
          {index + 1}
          <DragItem
            item={item}
            disable={!item.text}
            className={`${styles.dropZoneContent} ${styles.justifyCenter}`}
            style={customStyles}
          >
            {item.text}
          </DragItem>
        </div>
      </DropZone >
    );
  }, [correctAnswers, onDrop, props.sortable, state.isPointed]);

  const onRetry = React.useCallback(() => {
    setState(JSON.parse(JSON.stringify(defaultState.current)))
  }, []);

  const onSubmit = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isPointed: true }));
  }, []);

  if (!props) return null;

  const disableSubmit = state.dropZones.findIndex((x) => !x.text) > -1;

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 200 }}>
        <TitleQuestion color={props.color} titleQuestion={props.titleQuestion} />
      </Row>
      <div className={styles.flex}>
        {props.video && (
          <div className={styles.videoContainer}>
            <Player
              // playsInline
              poster="/assets/poster.png"
              src={props.video}
              className={styles.video}
            />
          </div>
        )}

      
      </div>
      <DropZone
          className={`${styles.flex} ${styles.flex1} ${styles.listContainer} ${styles.mv14}`}
          style={{ borderColor: props.color }}
          onZoneDrop={onDrop(-1, -1)}
        >
          {state.dragItems.map(renderDragItem)}
        </DropZone>
      <div className={styles.flex}>{state.dropZones.map(renderDropZoneItem)}</div>

      <FooterModal
        exerciseKey={props.exerciseKey}
        audioUrl={props.audio}
        isDisabledRetry={!state.isPointed}
        isDisabledSubmit={disableSubmit || state.isPointed}
        onSubmit={onSubmit}
        onRetry={onRetry}
      />
    </Container>
  )
}
export default DD1