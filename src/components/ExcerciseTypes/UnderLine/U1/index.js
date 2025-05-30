import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Col, Container } from 'reactstrap';
import styles from './styles.module.css';
import FooterModal from '../../../FooterModal';
import ReactHtmlParser from 'react-html-parser';
import TitleQuestion from '../../../TitleQuestion';

const UnderLine1 = (props) => {

  const inputTag = '#';

  const inputCount = React.useRef(0);

  const [state, setState] = React.useState({
    sentences: null,
    isDisabledSubmit: false,
    // isDisabledSubmit:false,
    isDisabledRetry: true,
    isPointed: false,
    selectedArray: [],
    questionType: null,
    audioUrl: null,
  });

  React.useEffect(() => {
    const sentences = JSON.parse(JSON.stringify(props.questions))
    sentences.titleImage = props.titleImage;
    sentences.titleImagePosition = props.titleImagePosition;
    sentences.titleQuestion = props.titleQuestion;
    const audioUrl = props.audio
    setState((prevState) => ({
      ...prevState, sentences, audioUrl
    }))
  }, [props])

  const onSubmit = React.useCallback(() => {
    const answerString = state.sentences[0].answerString;

    const correctAnswers = state.sentences[0].answer;
    let resultArray = []

    state.selectedArray.forEach((item, index) => {
      let isCorrect = false;
      if (answerString[item].trim().toLowerCase() === correctAnswers[index].trim().toLowerCase()) {
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
      ...prevState, selectedArray: [], isDisabledRetry: true, isPointed: false, isDisabledSubmit: false
    }))
  }, [])

  const choiceAnwsers = React.useCallback((value) => () => {
    const indexArray = parseInt(value / 2)

    state.selectedArray[indexArray] = value

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
      <Row className='d-flex justify-content-xl-around'>
        <Col />
        <Col style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', minInlineSize: 'max-content' }}>
          <TitleQuestion titleQuestion={state.sentences.titleQuestion} />
          {state.sentences?.titleImage && state.sentences?.titleImagePosition === 'top' && (
            <img src={state.sentences.titleImage} alt='...' style={{ width: props.imgSize ?? '100%' }} />
          )}
          <div style={{ color: 'black' }}>
            {ReactHtmlParser(state.sentences?.[0].title, { transform })}
          </div>
          {state.sentences?.titleImage && state.sentences?.titleImagePosition === 'bottom' && (
            <img src={state.sentences.titleImage} alt='...' style={{ width: props.imgSize ?? '100%' }} />
          )}
        </Col>
        <Col />
      </Row>
      <FooterModal
        onSubmit={onSubmit}
        onRetry={onRetry}
        audioUrl={state.audioUrl}
        exerciseKey={props.exerciseKey}
        isDisabledRetry={state.isDisabledRetry}
        isDisabledSubmit={state.isDisabledSubmit}
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
