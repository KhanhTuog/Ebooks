import React, { useState } from 'react';
import 'moment/locale/vi';
import moment from 'moment';
import LineTo from 'react-lineto';
import classNames from 'classnames'
import { Container, Row, Modal, ModalBody } from 'reactstrap';

import Animate from '../../../Animate';
import styles from './styles.module.css'
import FooterModal from '../../../FooterModal'
import Firework from '../../../ResultsAndEffects/fireworks.js';

moment.locale('vi');

const LT2 = (props) => {
  const [state, setState] = React.useState({
    star: 0,
    idItem: -1,
    rowIndex: -1,
    isDoing: true,
    matchedPairs: [],
    booleanArray: [],
    studentAnswer: null,
    isDisabledRetry: true,
    isDisabledSubmit: true,
    answers: props.answers,
    data: JSON.parse(JSON.stringify(props.questionImage)),
  })

  const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  const onSubmit = React.useCallback(() => {
    let booleanArray1 = [];
    let studentAnswer = [];

    state.matchedPairs.forEach((item, index) => {
      let firstId = item.firstItem.id;
      let secondId = item.secondItem.id
      if (secondId < firstId) {
        [firstId, secondId] = [secondId, firstId]
      }
      // const answer = state.answers[index]
      const selected = `${firstId}-${secondId}`
      // const isCorrect = answer === selected ? true : false;
      const AnswerList = state.answers
      const isCorrect = AnswerList.some(a => a === selected)


      booleanArray1.push(isCorrect);
      studentAnswer.push(selected);

    })

    let correctAnswer = 0;
    booleanArray1.forEach((item, index) => {
      if (item) {
        correctAnswer++
      }
    })
    const percent = parseInt(correctAnswer / booleanArray1.length * 100)
    const resultString = `${correctAnswer}/${booleanArray1.length}`
    const star = percent / 20;

    const params = {
      score: percent,
      unit: props.unit,
      results: resultString,
      exerciseId: props.id,
      sreatedDate: moment().format(),
      studentAnswer: JSON.stringify(studentAnswer),
    }
    props.postAnswerToApi(params)

    // setModal(true)
    onModal();

    setState((prevState) => ({ ...prevState, isDoing: false, isDisabledSubmit: true, isDisabledRetry: false, star }))
  }, [props, state.answers, state.matchedPairs])

  const onModal = React.useCallback(() => {
    setModal(true)
    setTimeout(() => {
      offModal();
    }, 3000);
  }, []);

  const offModal = React.useCallback(() => {
    setModal(false)
  }, []);

  const onRetry = React.useCallback(() => {
    const data = JSON.parse(JSON.stringify(props.questionImage))
    setState((prevState) => ({ ...prevState, isDoing: true, isDisabledRetry: true, matchedPairs: [], data, booleanArray: [], isDisabledSubmit: true, }))

  }, [props.questionImage])

  const renderLine = React.useCallback((item, index) => {
    let lineColor = '#35C3F7';

    let firstId = item.firstItem.id;
    let secondId = item.secondItem.id

    if (secondId < firstId) {
      [firstId, secondId] = [secondId, firstId]
    }
    if (!state.isDoing) {
      const answerIndex = state.answers.findIndex((x) => {
        const splitX = x.split('-');
        let isCorrect = false
        splitX.forEach((item, index) => {
          if (item == firstId) {
            isCorrect = true
          }
        })
        return isCorrect
      });
      const answerString = `${firstId}-${secondId}`;
      const answer = state.answers[answerIndex]
      const isCorrect = answerString === answer

      lineColor = isCorrect ? 'green' : 'red';
      item.isCorrect = isCorrect;
      state.booleanArray.push(isCorrect);

    }
    const fromAnchor = `img-${firstId}`;
    const toAnchor = `img-${secondId}`;

    return (
      <LineTo
        key={index}
        from={fromAnchor}
        to={toAnchor}
        zIndex={1050}
        borderWidth={2}
        toAnchor={props.toAnchor ?? '100% 100%'}
        fromAnchor={props.fromAnchor ?? '100% 100%'}
        borderColor={lineColor}
        className={styles.line}
      />
    );
  }, [props.fromAnchor, props.toAnchor, state.answers, state.booleanArray, state.isDoing]);

  const onClickImage = React.useCallback((item, index, rowIndex) => () => {
    if (!item.isMatching || !state.isDoing) return;
    // let isDisabledRetry = false;
    let isDisabledSubmit = true;
    const imgArray = state.data[rowIndex];
    const indexSelect = imgArray.findIndex(x => x.isSelected === true && x.matchInPair !== null)
    if (indexSelect > -1) {
      state.data[rowIndex][indexSelect].isSelected = false
    }
    state.data[rowIndex][index].isSelected = true
    if (state.rowIndex !== -1 && state.rowIndex !== rowIndex) {

      let firstItem = {
        id: state.idItem,
        rowIndex: state.rowIndex
      };
      let secondItem = {
        id: item.id,
        rowIndex,
      }

      const firstIndex = state.matchedPairs.findIndex((x) => x.firstItem.id == firstItem.id || x.secondItem.id == firstItem.id)
      if (firstIndex > -1) {
        state.matchedPairs.splice(firstIndex, 1)
      }

      const secondIndex = state.matchedPairs.findIndex((x) => x.firstItem.id == secondItem.id || x.secondItem.id == secondItem.id)
      if (secondIndex > -1) {
        state.matchedPairs.splice(secondIndex, 1)
      }

      state.matchedPairs.push({ firstItem, secondItem })
      if (state.matchedPairs.length === state.answers.length) {
        // isDisabledRetry = false;
        isDisabledSubmit = false;
      }
      return setState((prevState) => ({ ...prevState, rowIndex: -1, idItem: -1, isDisabledSubmit }))
    }
    setState((prevState) => ({ ...prevState, rowIndex, idItem: item.id }))
  }, [state.answers.length, state.data, state.idItem, state.isDoing, state.matchedPairs, state.rowIndex]);

  const renderImage = React.useCallback((images, rowIndex) => {
    let countMatching = 0
    return images.map((item, index) => {
      let imageSrc = item.url;
      let isSelected = false;
      let borderColor = '#35C3F7';

      let isCorrect = false
      if (item.isMatching) {
        isSelected = item.isSelected
        if (!state.isDoing || state.matchedPairs.length === state.answers.length) {
          isSelected = false;
          // borderColor = state.matchedPairs[].isCorrect
        }
        if (!state.isDoing) {
          const itemMatchInPair = state.matchedPairs[countMatching]
          let firstId = itemMatchInPair.firstItem.id;
          let secondId = itemMatchInPair.secondItem.id
          if (secondId < firstId) {
            [firstId, secondId] = [secondId, firstId]
          }
          const answerIndex = state.answers.findIndex((x) => {
            const splitX = x.split('-');
            let isCorrect = false
            splitX.forEach((item, index) => {
              if (item == firstId) {
                isCorrect = true
              }
            })
            return isCorrect
          });
          const answerString = `${firstId}-${secondId}`;
          const answer = state.answers[answerIndex]
          isCorrect = answerString === answer
          countMatching++
        }
      }
      const className = item.isMatching ? `img-${item.id}` : ''

      return (
        <div
          key={index}
          className={className}
          style={{
            borderWidth: 2,
            display: 'grid',
            borderColor,
            position: 'relative',
            borderStyle: isSelected ? 'solid' : 'none',
            cursor: item.isMatching ? 'pointer' : '',
          }}
        >
          <img
            alt="..."
            src={imageSrc}
            onClick={onClickImage(item, index, rowIndex)}
            style={{ cursor: item.input ? 'pointer' : undefined, width: '100%' }}
          />
          {(!state.isDoing && item.isMatching && countMatching === item.id) && (
            <i
              className={classNames({
                "fas fa-check": isCorrect,
                "fas fa-times": !isCorrect
              })}
              style={{
                color: isCorrect ? 'green' : 'red',
                top: -1,
                right: -20,
                fontSize: 20,
                zIndex: 1000,
                position: 'absolute',
              }}
            />
          )}
        </div>
      );
    });
  }, [onClickImage, state.answers, state.isDoing, state.matchedPairs]);

  const renderContent = React.useCallback(() => {
    return state.data.map((rowItem, rowIndex) => {
      return (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          {renderImage(rowItem, rowIndex)}
        </div>
      )
    })
  }, [renderImage, state.data]);

  return (
    <Container>
      <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          alt="..."
          src={props.titleImage}
        />
      </Row>

      <Row style={{ width: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {renderContent()}
      </Row>
      <Modal centered isOpen={modal} style={{ maxWidth: 640, }}>
        <ModalBody>
          {/* {renderContent} */}
          {(state.star >= 1) && (
            <Firework />
          )}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 240 }}>
            <Animate
              resultString={state.star}
            />
          </div>
        </ModalBody>
      </Modal>

      <FooterModal
        onRetry={onRetry}
        onSubmit={onSubmit}
        audioUrl={state.audioUrl}
        result={state?.booleanArray}
        exerciseKey={props.exerciseKey}
        isDisabledRetry={state.isDisabledRetry}
        isDisabledSubmit={state.isDisabledSubmit}
      />
      {state.matchedPairs.map(renderLine)}
    </Container>
  )
}

export default React.memo(LT2)