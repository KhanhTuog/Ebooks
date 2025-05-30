/* eslint-disable no-unused-expressions */
import React from 'react';
import styles from './styles.module.css';
import { Row, Input, Container, Col } from 'reactstrap';
import { Form, Button } from 'antd';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import FooterIeltsMindset from '../../../FooterModal';
import TitleQuestion from '../../../TitleQuestion';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const TypeIn1 = (props) => {
  const inputTag = '#';

  const FormItem = Form.Item;
  const submitButton = React.useRef();
  const refForm = React.useRef();
  const inputCount = React.useRef(0);
  const [form] = Form.useForm();

  const [state, setState] = React.useState({
    sentences: null,
    isDisabledInput: false,
    isDisabledRetry: true,
    videoVisible: false,
    audioUrl: false,
    isPointed: false
  });

  React.useEffect(() => {
    const sentences = JSON.parse(JSON.stringify(props.questions));
    sentences.titleImage = props.titleImage
    sentences.titleQuestion = props.titleQuestion

    const audioUrl = props.audio

    setState((prevState) => ({ ...prevState, sentences, audioUrl }))
  }, [props])


  const toggleState = React.useCallback((fieldName) => () => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  }, []);

  const onPlayVideo = React.useCallback(() => {
    toggleState('videoVisible')();
  }, [toggleState])


  const onSubmit = React.useCallback(() => {
    submitButton.current?.click();
  }, [])

  const onRetry = React.useCallback(() => {
    form.resetFields();
    setState((preState) => ({ ...preState, isDisabledInput: false, isDisabledRetry: true, isPointed: false }))
  }, [form])

  // Khi hoàn thành các field
  const onFinish = React.useCallback((value) => {
    let booleanArray = []

    state.sentences[0].answer.forEach((item, index) => {
      let isCorrect = false;
      const isManyAnswers = item.includes('/');

      if (isManyAnswers && value[index]) {
        const answers = item.split('/');
        for (let i = 0; i < answers.length; i++) {
          isCorrect = answers[i].trim().toLowerCase() === value[index].trim().toLowerCase();
          if (isCorrect) break;
        }
      } else {
        if (!item) {

          isCorrect = true;
        }
        else {
          if (value[index]) {
            isCorrect = item.trim().toLowerCase() === value[index].trim().toLowerCase()
          }
        }
      }
      booleanArray.push(isCorrect)


    })
    state.sentences.booleanArray = booleanArray
    setState((preState) => ({ ...preState, sentences: state.sentences, isDisabledInput: true, isDisabledRetry: false, isPointed: true }))
  }, [state])


  const transform = React.useCallback((node, index) => {

    if (node.type === 'text') {
      if (!node.data.includes(inputTag)) return;
      const elementArray = node.data.split(inputTag);
      let currentInputNo = 0;
      return (
        <span style={{ fontSize: 25 }}>
          {elementArray.map((item, index) => {

            if (index > 0) {
              currentInputNo = inputCount.current;
              const maxInput = state.sentences[0].answer.length
              inputCount.current++;
              if (inputCount.current >= maxInput) {
                inputCount.current = 0;
              }
            }

            let widthInput = 300;
            const type = props.type

            if (type === 'longAnwser') {
              widthInput = 900
            }

            if (props.inputSize) {
              widthInput = props.inputSize
            }
            return (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <FormItem
                    className='ml-2 mr-2'
                    name={currentInputNo}
                    style={{ display: 'inline-block', marginBottom: 0 }}
                  // rules={[{ required: true, message: 'Please fill the answer' },]}
                  >
                    <div>
                      <Input
                        autoComplete={false}
                        autoCorrect={false}
                        style={{
                          height: 30,
                          fontSize: 26,
                          borderWidth: 0,
                          borderRadius: 0,
                          fontWeight: '500',
                          display: 'inline',
                          borderBottomWidth: 1,
                          width: widthInput,
                          backgroundColor: 'white',
                          borderBottomColor: '#bdc3c7',
                          boxShadow:'none',
                          color: state.isPointed ? (state.sentences.booleanArray?.[currentInputNo] ? '#2ecc71' : '#e74c3c') : 'black',
                        }}
                        id={currentInputNo}
                        disabled={state.isPointed}
                        className={!state.isPointed ? styles.input : styles.checkInput}
                      />
                      {state.isPointed && state.sentences.booleanArray?.[currentInputNo] && (
                        <CheckCircleOutlined style={{ fontSize: 25, color: '#2ecc71' }} />
                      )}
                      {state.isPointed && !state.sentences.booleanArray?.[currentInputNo] && (
                        <CloseCircleOutlined style={{ fontSize: 25, color: '#e74c3c' }} />
                      )}
                    </div>
                  </FormItem>
                )}
                <span>
                  {item}
                </span>
              </React.Fragment>
            )
          })}
        </span>
      )
    }
  }, [props.type, props.inputSize, state.isPointed, state.sentences])

  if (!state.sentences) return null;

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', marginRight: 450, minWidth: 1100 }}>
        <TitleQuestion titleQuestion={state.sentences.titleQuestion} />
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'start' }}>
        <Col >
          {state.sentences.titleImage && (
            <img src={state.sentences.titleImage} alt='...' style={{ width: '100%', marginBottom: 10 }} />
          )}
        </Col>
        <Col lg="5">
          <Form
            autoComplete="off"
            form={form}
            ref={refForm}
            onFinish={onFinish}
          >
            {ReactHtmlParser(state.sentences[0].title, { transform })}
            <FormItem>
              <Button style={{ display: 'none' }} ref={submitButton} id='submitButton' htmlType="submit"></Button>
            </FormItem>
          </Form>
        </Col>

      </Row>

      <FooterIeltsMindset
        exerciseKey={props.exerciseKey}
        isDisabledSubmit={state.isDisabledInput}
        isDisabledRetry={state.isDisabledRetry}
        onSubmit={onSubmit}
        onRetry={onRetry}
        onPlayVideo={onPlayVideo}
        audioUrl={state.audioUrl}
      />
    </Container>
  );
};
TypeIn1.propTypes = {
  question: PropTypes.instanceOf(Object),

}
export default TypeIn1;
