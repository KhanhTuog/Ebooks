import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';
// import { CheckCircleOutlined } from '@ant-design/icons';

import FooterModal from '../../../FooterModal'
import TitleQuestion from '../../../TitleQuestion';
import classNames from 'classnames';

import styles from './styles.module.css';

// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = 'abcdefghijklmnopqrstuvwxyz';


const Multiple1 = (question) => {

  const inputCount = React.useRef(0);

  const [state, setState] = React.useState({
    questions: [],
    isPointed: false,
    isDisabledSubmit: false,
    isDisabledRetry: true,
    videoVisible: false,
    inputList: []
  });

  React.useEffect(() => {
    setState((prevState) => ({ ...prevState, questions: JSON.parse(JSON.stringify(question.questions)) }))
  }, [question]);

  const onSubmit = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isPointed: true, isDisabledSubmit: false, isDisabledRetry: false }))
  }, []);

  const onRetry = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isPointed: false, isDisabledRetry: true }))
  }, []);

  const onClickAnswer = React.useCallback((item, index) => {
    item.selectedItem = index;

    setState((prevState) => {
      const count = prevState.questions.reduce((total, countItem) => {
        if (countItem.selectedItem >= 0) {
          return total + 1;
        }
        return total;
      }, 0);

      const isDone = count === prevState.questions.length;

      if (isDone && state.isDisabledSubmit) {
        setState((prevState) => ({ ...prevState, isDisabledSubmit: false }))
      }

      return { ...prevState, questions: prevState.questions };
    })
  }, [state.isDisabledSubmit]);

  const onHandleInput = (e, item, index) => {
    setState((prevState) => {
      const { inputList } = prevState;
      if (typeof inputList[index] === 'string') {
        inputList[index] = (e.target.value).toString().toLowerCase()
      } else {
        inputList.push((e.target.value).toString().toLowerCase())
      }
      return ({ ...prevState, inputList })
    })
  }

  const renderTitle = React.useCallback((item) => {
    const titleSplit = item.title?.split(' ');
    if (!titleSplit) return null
    return titleSplit.map((itemTitle, index) => {
      let isCorrect = false;
      // let color = 'black';

      const inputIndex = inputCount.current;
      if (itemTitle === '#') {
        isCorrect = state.inputList[inputIndex] === item.titleAnswer;
        inputCount.current++;
      }

      if (inputCount.current > state.questions.length - 1) {
        inputCount.current = 0;
      }

      return itemTitle === '#' ? (
        <span key={index} style={{ width: 300 }}>
          <input type="text" disabled={state.isPointed} onChange={(e) => onHandleInput(e, item, inputIndex)} size="10" style={{ border: 'none', borderBottom: '1px solid black', padding: 0, cursor: state.isPointed && 'not-allowed', paddingLeft: 5 }} />
          {!state.isPointed && (
            <i
              className={classNames({
                "fas fa-check": isCorrect,
                "fas fa-times": !isCorrect
              })}
              style={{
                color: 'white',
                marginLeft: 3,
                // top: -1,
                // right: 0,
                fontSize: 20,
                // position: 'absolute',
              }}
            />
          )}
          {state.isPointed && (<i
            className={classNames({
              "fas fa-check": isCorrect,
              "fas fa-times": !isCorrect
            })}
            style={{
              color: isCorrect ? '#2ecc71' : '#E74C3C',
              marginLeft: 3,
              // top: -1,
              // right: 0,
              fontSize: 20,
              // position: 'absolute',
            }}
          />)}
        </span>
      ) : (
          <span key={index} style={{ color: 'black', width: 300 }}>{' '}{itemTitle}{' '}
          </span>

        )
    })
  }, [state.inputList, state.isPointed, state.questions]);

  const renderAnswerItem = React.useCallback((qItem) => (answer, answerIndex) => {
    const isSelected = qItem.selectedItem === answerIndex;
    // Check answers
    let isCorrect = false;
    let color = 'black';

    if (state.isPointed) {
      isCorrect = answer.isCorrect;
      color = isSelected ? isCorrect ? '#2ecc71' : '#E74C3C' : 'white';
    }

    const customStyles = {
      alphabet: {
        fontSize: 25,
        marginRight: 8,
        color: isSelected ? 'white' : 'black',
        background: isSelected ? isCorrect ? '#2ecc71' : '#E74C3C' : 'white',
      },
    }

    return state.isPointed ? (
      <Button key={answerIndex} type='text' className={`${styles.answerButton} flex flex-1 ml-4`} style={{ width: 300, display: 'flex', alignItems: 'center', marginTop: 10, alignSelf: 'center' }}>
        <Row style={{ marginLeft: 4, fontSize: 25, display: 'flex', alignItems: 'center' }}>
          <strong className={styles.mutilpleKey} style={customStyles.alphabet}>{alphabet[answerIndex]}.</strong>
          <span style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }}>{answer.text}</span>
          <i
            className={classNames({
              "fas fa-check": isCorrect,
              "fas fa-times": !isCorrect
            })}
            style={{
              color,
              marginLeft: 3,
              // top: -1,
              // right: 0,
              fontSize: 20,
              // position: 'absolute',
            }}
          />
        </Row>
      </Button>
    ) : (
        <Button
          type='text'
          key={answerIndex}
          className={`${styles.answerButton} flex flex-1 ml-4`}
          style={{ width: 300, display: 'flex', alignItems: 'center', marginTop: 10, alignSelf: 'center' }}
          onClick={() => onClickAnswer(qItem, answerIndex)}
        >
          <Row style={{ marginLeft: 4, fontSize: 25, display: 'flex', alignItems: 'center' }}>
            {answer.text !== '' &&
              (< span className={isSelected ? styles.mutilpleKeySelected : styles.mutilpleKey}>
                <strong style={{ fontSize: 25 }}>{alphabet[answerIndex]}.</strong>
              </span>)
            }
            <span style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }}>{answer.text}</span>
          </Row>
        </Button >
      );
  }, [state.isPointed, onClickAnswer])

  const renderQuestion = React.useCallback((item, index) => {
    return (
      <div key={index} style={{ marginRight: 8, fontSize: 25 }} className='mb-3'>
        <b style={{ color: 'black' }}>{index + 1}</b> {renderTitle(item)}
        <Row style={{ fontSize: 25 }}>
          {item.answers.map(renderAnswerItem(item, index))}
        </Row>
      </div>
    );
  }, [renderTitle, renderAnswerItem]);


  if (!state.questions) return null;

  return (
    <Container className='fluid' style={{ backgroundColor: '#fff', display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 200 }}>
        <TitleQuestion titleQuestion={question.titleQuestion} />
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col className='d-initial justify-content-center'>
          <span style={{ fontSize: 25 }}>
            {state.questions.map(renderQuestion)}
          </span>
        </Col>
      </Row>
      <Row >
        <FooterModal exerciseKey={question.exerciseKey} isDisabledSubmit={state.isDisabledSubmit} isDisabledRetry={state.isDisabledRetry} onSubmit={onSubmit} onRetry={onRetry} />
      </Row>
    </Container>
  );
};

Multiple1.propTypes = {
  question: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object),
  sessionId: PropTypes.string,
  classId: PropTypes.string,
};

export default Multiple1;
