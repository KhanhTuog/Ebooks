import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';

import FooterModal from '../../../FooterModal'
import TitleQuestion from '../../../TitleQuestion';
import classNames from 'classnames';

import styles from './styles.module.css';

// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = 'abcdefghijklmnopqrstuvwxyz';


const Multiple1 = (question) => {

  const [state, setState] = React.useState({
    questions: [],
    isPointed: false,
    isDisabledSubmit: false,
    isDisabledRetry: true,
    videoVisible: false,
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

  const renderTitle = React.useCallback((item) => {
    const titleSplit = item.question?.split(' ');
    if (!titleSplit) return null
    return titleSplit.map((itemTitle, index) => {
      return itemTitle === '#' ? (
        <span key={index}>__________</span>
      ) : (
          <span key={index}>{' '}{itemTitle}{' '}</span>
        )
    })
  }, []);

  const renderAnswer = React.useCallback((item) => {
    const titleSplit = item.text?.split(' ');
    if (!titleSplit) return null
    return titleSplit.map((itemTitle, index) => {
      return itemTitle.includes('#') ? (
        <span key={index}>{itemTitle.split('#').map((tItem, tIndex) => {
          return (
            <>
              {tIndex !== 0 && <strong>{item.boldText}</strong>}
              {tItem}
            </>
          );
        })}</span>
      ) : (
          <span key={index}>{' '}{itemTitle}{' '}</span>
        )
    })
  }, []);

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
      <Button key={answerIndex} type='text' className={`${styles.answerButton} flex flex-1 ml-4`} style={{ display: 'flex', alignItems: 'center', width: 230 }}>
        <Row style={{ marginLeft: 4, fontSize: 25, display: 'flex', alignItems: 'center' }}>
          <strong className={styles.mutilpleKey} style={customStyles.alphabet}>{alphabet[answerIndex]}.</strong>
          <span style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }}>{renderAnswer(answer)}</span>
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
          style={{ display: 'flex', alignItems: 'center', width: 230 }}
          onClick={() => onClickAnswer(qItem, answerIndex)}
        >
          <Row style={{ marginLeft: 4, fontSize: 25, display: 'flex', alignItems: 'center' }}>
            <span className={isSelected ? styles.mutilpleKeySelected : styles.mutilpleKey}>
              <strong style={{ fontSize: 25 }}>{alphabet[answerIndex]}.</strong>
            </span>
            <span style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }}>{renderAnswer(answer)}</span>

          </Row>
        </Button>
      );
  }, [state.isPointed, renderAnswer, onClickAnswer])

  const renderQuestion = React.useCallback((item, index) => {
    return (
      <div key={index} className='mb-3' style={{ marginRight: 8, fontSize: 25, display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
        <b style={{ color: 'black', }}>{index + 1}</b> {renderTitle(item)}
        <Row>
          {item.answers.map(renderAnswerItem(item, index))}
        </Row>
      </div>
    );
  }, [renderTitle, renderAnswerItem]);


  if (!state.questions) return null;

  return (
    <Container className='fluid' style={{ backgroundColor: '#fff', display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
        <FooterModal exerciseKey={question.exerciseKey} audioUrl={question.audio} isDisabledSubmit={state.isDisabledSubmit} isDisabledRetry={state.isDisabledRetry} onSubmit={onSubmit} onRetry={onRetry} />
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
