import React from 'react'
// import { Row, Col } from 'antd'
import { Container, Row, Button, Input } from 'reactstrap'
import { Form } from 'antd'
import FooterModal from '../../../FooterModal'
import TitleQuestion from '../../../TitleQuestion'
const FormItem = Form.Item;

const DesignTypeIn = (questions) => {

  const [state, setState] = React.useState({
    data: null,
    answers: [],
    booleanArray: [],
    maxInput: null,
    audioUrl: null,
    isDoing: true,
    isDisabledRetry: true
  })

  const submitButtonRef = React.useRef();
  const inputCount = React.useRef(0);

  const [formCheckAnswer] = Form.useForm();

  React.useEffect(() => {
    const dataClone = JSON.parse(JSON.stringify(questions))
    const data = dataClone?.questionImage
    let maxInput = 0;
    let answers = []
    data.forEach((item) => {
      item.forEach((img) => {
        if (img.input) {
          maxInput++
          answers.push(img.answer);
        }
      })
    })

    data.titleQuestion = questions.titleQuestion
    const audioUrl = dataClone.audio

    setState((prevState) => ({ ...prevState, data, maxInput, answers, audioUrl }))
  }, [questions])


  const renderImg = React.useCallback((imgs, indexData) => {
    return imgs.map((item, index) => {

      let className = "";

      const isInput = item.input;

      let color = 'black';
      let inputCurrent = 0
      if (isInput) {
        inputCurrent = inputCount.current;
        inputCount.current++
        if (inputCurrent === state.maxInput - 1) {
          inputCount.current = 0
        }
        if (!state.isDoing) {
          const isCorrect = state.booleanArray[inputCurrent]
          color = isCorrect ? '#2DCE89' : '#F13536'
        }
      }

      return (
        <div style={{ position: 'relative', display: 'grid' }}>
          <img
            className={className}
            style={{ position: isInput ? 'relative' : '' }}
            src={item.url} alt='...'
          />
          {isInput && (
            <FormItem
              style={{ display: 'inline-block', position: 'absolute', right: 0, left: 0, padding: 0 }}
              name={inputCurrent}
            >
              <Input
                allowClear
                autocapitalize="words"
                autoComplete={false}
                autoCorrect={false}
                maxLength={1}
                style={{
                  color,
                  fontSize: 35,
                  fontWeight: '500',
                  borderColor: color,
                  backgroundColor: 'transparent',
                  // marginBottom: 16,
                  borderWidth: 0,
                  borderRadius: 0,
                  height: '100%',
                  width: '100%',
                  padding: 0,
                  paddingLeft: 12,
                  paddingTop: 0,
                }}
              />

            </FormItem>

          )}
          {/* {!state.isDoing && isInput && (
            <i
              className={classNames({
                "fas fa-check": state.booleanArray[inputCurrent],
                "fas fa-times": !state.booleanArray[inputCurrent]
              })}
              style={{
                color,
                top: -1,
                right: 0,
                fontSize: 20,
                position: 'absolute',
              }}
            />
          )} */}

        </div>
      );
    });
  }, [state.booleanArray, state.isDoing, state.maxInput]);

  const renderContent = React.useCallback(() => {
    // const maxInput = state.data.
    return state.data.map((item, index) => {
      return (
        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {renderImg(item, index)}
        </div>
      )
    })
  }, [renderImg, state.data])

  const onSubmit = React.useCallback(() => {
    submitButtonRef.current?.click();
    setState((prevState) => ({ ...prevState, isDoing: false, isDisabledRetry: false }))
  }, []);

  const onRetry = React.useCallback(() => {
    formCheckAnswer.resetFields();
    setState((prevState) => ({
      ...prevState,
      isDoing: true,
      isDisabledRetry: true
    }))
  }, [formCheckAnswer])

  const onFinish = React.useCallback((values) => {

    let booleanArray = []
    for (let i = 0; i < state.maxInput; i++) {
      let isCorrect = false;
      if (values[i]) {
        isCorrect = values[i].trim().toLowerCase() === state.answers[i].trim().toLowerCase();
      }
      booleanArray.push(isCorrect);
    }

    setState((prevState) => ({ ...prevState, booleanArray }))
  }, [state.answers, state.maxInput])

  if (!state.data) return null

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TitleQuestion titleQuestion={state.data?.titleQuestion} />
      </Row>
      <Row style={{ minWidth: 985, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form form={formCheckAnswer} autoComplete="off" onFinish={onFinish}>
          {renderContent()}
          <Button innerRef={submitButtonRef} style={{ display: 'none' }} htmlType="submit" >text</Button>
        </Form>
      </Row>

      <FooterModal exerciseKey={questions.exerciseKey} onSubmit={onSubmit} onRetry={onRetry} isDisabledRetry={state.isDisabledRetry} audioUrl={state.audioUrl} />

    </Container>
  )
}
export default DesignTypeIn