import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import FooterModal from '../../../FooterModal'
import { CardBody, Card, Col, Row, CardTitle, Container } from 'reactstrap';
import { Select, Form, Button } from 'antd';
import TitleQuestion from '../../../TitleQuestion';
import classNames from 'classnames';

const Select2 = (question) => {

  const [state, setState] = React.useState({
    questions: null,
    isPointed: false,
    isDisabledSubmit: false,
    isDisabledRetry: true,
    videoVisible: false,
    randomArray: [],
    audioUrl: null,
  });

  // const inputTag = '#'

  const [form] = Form.useForm();

  const inputCount = React.useRef(0);
  const submitButton = React.useRef();

  const onSubmit = React.useCallback(() => {
    submitButton.current?.click()
  }, [])

  const onRetry = React.useCallback(() => {
    form.resetFields();
    setState((preState) => ({ ...preState, isPointed: false, isDisabledRetry: true, isDisabledSubmit: false }))
  }, [form])


  React.useEffect(() => {
    const randomArray = () => {
      if (!question) return null;
      const questionJson = JSON.parse(JSON.stringify(question.questions))
      //Tạo mảng random cho thẻ select
      const audioUrl = question.audio
      let randomArray = [];

      questionJson.forEach((item, index) => {
        randomArray.push(item.text)
      })

      for (let i = 0; i < randomArray.length / 2; i++) {
        const randomIndex = Math.floor(Math.random() * randomArray.length);
        [randomArray[i], randomArray[randomIndex]] = [randomArray[randomIndex], randomArray[i]];
      }

      setState((preState) => ({
        ...preState, questions: questionJson, randomArray, audioUrl
      }))
    }
    randomArray();
  }, [question])


  //Khi hoàn thành các field
  const onFinish = React.useCallback((value) => {

    const { questions } = state;
    let checkAnswerArray = [];
    questions.forEach((answer, indexAnswer) => {
      const isCorrect = answer.text === state.randomArray[value[indexAnswer]]
      checkAnswerArray.push(isCorrect)
    })

    questions.checkAnswerArray = checkAnswerArray;

    setState((preState) => ({ ...preState, questions, isPointed: true, isDisabledRetry: false, isDisabledSubmit: true }))
  }, [state])

  //Tạo thẻ select
  const contentSelect = React.useCallback(() => {
    return state.randomArray?.map((item, index) => {
      return (
        <Select.Option key={index}>{item}</Select.Option>
      )
    })
  }, [state.randomArray])

  //Dịch HTML
  const transform = React.useCallback(() => {
    let currentInputNo = 0;
    return (
      <span style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {state.questions.map((item, index) => {
          currentInputNo = inputCount.current;
          const maxInput = state.questions.length
          inputCount.current++;
          if (inputCount.current >= maxInput) {
            inputCount.current = 0;
          }
          let isCorrect = false
          let color = 'black'
          if (state.isPointed) {
            isCorrect = state.questions?.checkAnswerArray?.[currentInputNo]
            color = isCorrect ? '#2dce89' : '#e74c3c'
          }
          return (
            <div style={{ display: 'flex', flexDirection: 'row', width: '25%', alignItems: 'center' }} key={index}>
              {/* <img src={item.image} alt='...' className={styles.img} /> */}
              <b style={{ width: 30, textAlign: 'center' }}>{index + 1}</b>
              <Form.Item
                className='ml-2 mr-2'
                name={currentInputNo}
                style={{ display: 'inline-block', marginBottom: 0 }}
              // rules={[{ required: true, message: 'Please choice the answer' },]}
              >
                <Select
                  style={{
                    margin: 10,
                    width: 150,
                    fontWeight: '500',
                    color,
                    // color: state.isPointed ? state.questions.checkAnswerArray[currentInputNo] ? '#2dce89' : '#e74c3c' : '#11cdef'
                  }}
                  disabled={state.isPointed}
                  className={styles.select}
                  size="sm"
                  showSearch
                  allowClear
                  // placeholder='---Select---'
                  filterOption={(input, option) =>

                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLocaleLowerCase()) >= 0
                  }
                // prefix={<PhoneOutlined />}
                >
                  {contentSelect()}
                </Select>
              </Form.Item>
              {state.isPointed && (
                <i
                  className={classNames({
                    "fas fa-check": isCorrect,
                    "fas fa-times": !isCorrect
                  })}
                  style={{
                    color,
                    // top: -1,
                    // right: 0,
                    fontSize: 20,
                    // position: 'absolute',
                  }}
                />
              )}
            </div>
          )
        })}
      </span>
    )
  }, [state.questions, state.isPointed, contentSelect])

  const renderQuestion = React.useCallback(() => {
    return (
      <>
        <Row>
          <Form
            form={form}
            // ref={refForm}
            autoComplete="off"
            onFinish={onFinish}
            style={{ fontSize: 18, fontWeight: '500' }}
          >
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
              <Col style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                <img src={question?.image} alt='...' style={{ width: '50%' }} />
                <img src={question?.image1} alt='...' style={{ width: '50%' }} />
                {question?.image2.length !== 0 && (
                  <img src={question?.image2} alt='...' style={{ width: '50%' }} />
                )}
              </Col>
              <Col style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ marginTop: 10 }}>
                  {transform()}
                </span>
              </Col>
            </div>
            <Form.Item style={{ display: 'none' }}>
              <Button ref={submitButton} id='submitButton' htmlType="submit"></Button>
            </Form.Item>

          </Form>
        </Row>
      </>
    );
  }, [form, onFinish, question?.image, question?.image1, question?.image2, transform]);

  if (!state.questions) return null

  return (
    <Container className='fluid' style={{ backgroundColor: '#fff' }}>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 200 }}>
        <TitleQuestion titleQuestion={question?.titleQuestion} />
      </Row>
      <Row className='flex flex-1 justify-content-center'>
        <Col className='d-initial justify-content-center'>
          <Card className='d-initial justify-content-center' style={{ display: 'flex', boxShadow: 'none' }}>
            <CardTitle style={{ display: 'flex', alignSelf: 'center', width: 500, height: 150 }}>
              <div>
                <img src={question?.titleImage} alt='...' />
              </div>
            </CardTitle>
            <CardBody className='ml-3' style={{ padding: 0 }}>
              {renderQuestion()}
              {state.videoVisible && (
                <Row className={styles.centeredRow}>
                  <div className={styles['video-container']}>
                    <iframe title='video'
                      src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                  </div>
                </Row>
              )}
            </CardBody>
            <FooterModal
              exerciseKey={question.exerciseKey}
              isDisabledRetry={state.isDisabledRetry}
              isDisabledSubmit={state.isDisabledSubmit}
              onSubmit={onSubmit}
              onRetry={onRetry}
              audioUrl={state.audioUrl}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  )
};

Select2.propTypes = {
  question: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object),
  sessionId: PropTypes.string,
  classId: PropTypes.string,
};

export default Select2;
