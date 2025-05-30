import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';
import FooterModal from '../../../FooterModal';

import styles from './styles.module.css';
import TitleQuestion from '../../../TitleQuestion';
import { Container } from 'reactstrap';

const UnderLine1 = (question) => {

  const inputTag = '#';

  const inputCount = React.useRef(0);

  const [state, setState] = React.useState({
    sentences: null,
    isDisabledSubmit: true,
    // isDisabledSubmit:false,
    isDisabledRetry: true,
    isPointed: false,
    selectedArray: [],
    questionType: null,
    audioUrl: null,
  });


  React.useEffect(() => {
    const sentences = JSON.parse(JSON.stringify(question.questions))

    sentences.titleImage = question.titleImage;
    sentences.titleImagePosition = question.titleImagePosition;
    sentences.titleQuestion = question.titleQuestion;

    const audioUrl = question.audio
    setState((prevState) => ({
      ...prevState, sentences, audioUrl
    }))

  }, [question])

  const onSubmit = React.useCallback(() => {
    const answerString = state.sentences[0].answerString;
    const correctAnswers = state.sentences[0].answer;
    let resultArray = []

    state.selectedArray.forEach((item, index) => {
      let isCorrect = false;
      if (answerString[item] === correctAnswers[index]) {
        isCorrect = true;
      }
      resultArray.push({ isCorrect, index: item });
    })


    setState((prevState) => ({
      ...prevState, resultArray, isDisabledSubmit: true, isPointed: true, isDisabledRetry: false
    }))

  }, [state.sentences, state.selectedArray])


  const onRetry = React.useCallback(() => {
    setState((prevState) => ({
      ...prevState, selectedArray: [], isDisabledRetry: true, isPointed: false,isDisabledSubmit:false
    }))
  }, [])

  const choiceAnwsers = React.useCallback((value) => () => {
    const indexArray = parseInt(value / 2)

    state.selectedArray[indexArray] = value

    // const isDone = state.selectedArray.length === state.sentences[0].answer.length;
    setState((prevState) => ({
      ...prevState, selectedArray: state.selectedArray
    }))
  }, [state.selectedArray])



  const transform = React.useCallback((node, index) => {

    if (node.type === 'text') {
      if (!node.data.includes(inputTag)) return;
      const elementArray = node.data.split(inputTag)
      let currentInputNo = 0;
      return (
        <span key={index}>
          {elementArray.map((item, index) => {
            if (index > 0) {
              currentInputNo = inputCount.current;

              const maxInput = state.sentences[0].answerString?.length

              inputCount.current++;
              if (inputCount.current >= maxInput) {
                inputCount.current = 0;
              }
            }
            // eslint-disable-next-line eqeqeq
            const isSelected = state.selectedArray.findIndex((x) => x == currentInputNo) > -1;

            let borderColor = '#022F63';
            let isCorrect = false;
            if (state.isPointed) {

              state.resultArray.forEach((item, index) => {
                if (item.index === currentInputNo) {
                  isCorrect = item.isCorrect
                }
              })
              borderColor = isSelected ? isCorrect ? '#2dce89' : '#f5365c' : '';
            }
            return (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <span
                    className={isSelected ? styles.selectedSpan : ''}
                    style={{ fontSize: 25, fontWeight: '700', cursor: 'pointer', borderColor, color: 'black' }}
                    onClick={state.isPointed ? '' : choiceAnwsers(currentInputNo)} >
                    {state.sentences[0].answerString?.[currentInputNo]}
                    {state.isPointed && isSelected && (
                      <i
                        className={classNames({
                          "fas fa-check": isCorrect,
                          "fas fa-times": !isCorrect
                        })}
                        style={{
                          color: borderColor,
                          marginLeft: 5,
                          // top: -1,
                          // right: 0,

                          fontSize: 20,
                          // position: 'absolute',
                        }}
                      />
                    )}
                  </span>
                )}
                {item}
              </React.Fragment>
            )
          })}
        </span>
      )
    }
  }, [state.selectedArray, state.isPointed, state.sentences, state.resultArray, choiceAnwsers])

  if (!state.sentences) return null

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', marginRight: 450, minWidth: 1100 }}>
        <TitleQuestion titleQuestion={state.sentences.titleQuestion} />
      </Row>
      <Row style={{ minWidth: 985, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {state.sentences[0].img && (
            state.sentences[0].img.map((item, index) => {
              return (
                <span>
                  <img src={item} alt='...' style={{ width: 250 }} />
                </span>
              )
            })
          )}
        </span>
        <div style={{ color: 'black' }}>
          {ReactHtmlParser(state.sentences?.[0].title, { transform })}
        </div>

      </Row>
      <FooterModal
        exerciseKey={question.exerciseKey}
        isDisabledSubmit={state.isDisabledSubmit}
        isDisabledRetry={state.isDisabledRetry}
        onSubmit={onSubmit}
        onRetry={onRetry}
        audioUrl={state.audioUrl}
      // onPlayVideo={onPlayVideo}
      />
    </Container>
  );
};
UnderLine1.propTypes = {
  // allowPress: PropTypes.func.isRequired,
  question: PropTypes.instanceOf(Object),
}
export default UnderLine1;
