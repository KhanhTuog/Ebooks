import React, { useState } from 'react'
import { Container, Row, Button, Input, Modal } from 'reactstrap'
import { Form } from 'antd'
import 'moment/locale/vi';
import moment from 'moment';
import classNames from 'classnames';
import 'video-react/dist/video-react.css';

import Listen from '../../../Listening'
import Recorder from '../../../Recorder'
import Animate from '../../../Animate';
import VideoModal from '../../../VideoModal';
import FooterModal from '../../../FooterModal'
import AudioPlayer from '../../../AudioPlayer'
import TitleQuestion from '../../../TitleQuestion'
import Firework from '../../../ResultsAndEffects/fireworks.js';

moment.locale('vi');

const FormItem = Form.Item;

const DesignTypeIn = (questions) => {
  const [state, setState] = React.useState({
    star: 0,
    data: null,
    answers: [],
    booleanArray: [],
    maxInput: null,
    audioUrl: null,
    videoUrl: null,
    recordURL: null,
    studentAnswer: null,
    isDoing: true,
    isDisabledRetry: true,
    isDisabledSubmit: true,
    audioImgUrl: null,
    timeStamp: null,
    inputArray: []
  })

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const submitButtonRef = React.useRef();
  const inputCount = React.useRef(0);

  const [formCheckAnswer] = Form.useForm();
  const videoRef = React.useRef()

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

    const inputArray = new Array(maxInput).fill()

    data.titleQuestion = questions.titleQuestion
    const audioUrl = dataClone.audio
    const videoUrl = dataClone.video
    setState((prevState) => ({ ...prevState, data, maxInput, answers, audioUrl, videoUrl, inputArray }))
  }, [questions])

  const onClickImage = React.useCallback((item, index, rowIndex) => () => {
    const url = item.audioUrl || item.videoUrl
    if (url) {
      const timeStamp = Date.now()
      if (url?.includes('.mp4')) {
        setState((prevState) => ({ ...prevState, videoUrl: url }))
        return videoRef.current?.toggleModal()
      }
      if (state.audioUrl) {
        document.getElementById('myAudio')?.pause()
      }
      setState((prevState) => ({ ...prevState, audioImgUrl: url, timeStamp }))
    }
    if (!item.input || !state.isDoing) return;

    setState((prevState) => {
      const inputs = JSON.parse(JSON.stringify(prevState.inputs));

      const inputIndex = inputs.findIndex((x) => x.input === item.input);

      if (inputIndex > -1) {
        if (inputs[inputIndex].select !== index || inputs[inputIndex].rowIndex !== rowIndex) {
          inputs[inputIndex].select = index;
          inputs[inputIndex].rowIndex = rowIndex;
        } else {
          inputs.splice(inputIndex, 1);
        }
      } else {
        inputs.push({ input: item.input, select: index, rowIndex });
      }

      return ({ ...prevState, inputs });
    })
  }, [state.audioUrl, state.isDoing]);

  const onChangeText = React.useCallback((inputIndex) => (e) => {
    const text = e.target.value;
    let emptyInputNum = 0;
    state.inputArray[inputIndex] = text
    state.inputArray.forEach((item, index) => {
      if (item) {
        emptyInputNum++
      }
    })

    if (emptyInputNum === state.maxInput) {
      setState((prevState) => ({ ...prevState, isDisabledSubmit: false }))
    }
  }, [state.inputArray, state.maxInput])


  const renderImg = React.useCallback((imgs, indexData) => {
    return imgs.map((item, index) => {
      let className = "";

      const isInput = item.input;

      let color = 'black';
      let inputCurrent = 0
      let cursor = '';
      if (item.audioUrl) {
        cursor = `url(img/volume.png) 12 12, auto`
      }
      if (item.videoUrl) {
        cursor = `url(img/video.png) 12 12, auto`
      }
      if (item.input) {
        cursor = 'pointer'
      }

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
      let styleInput = {
        color,
        height: questions.inputHeight ?? 5,
        width: '100%',
        boxShadow: 'none',
        borderWidth: 0,
        borderRadius: 0,
        // marginBottom: 12,
        borderColor: color,
        fontWeight: '500',
        backgroundColor: 'transparent',
        fontSize: questions.fontSize ?? 20,
        textAlign: questions.typeInput ? 'center' : '',

      }


      if (isInput && questions.isLargeInput) {
        styleInput = {
          color,
          fontSize: 20,
          maxWidth: 50,
          fontWeight: '500',
          borderColor: color,
          backgroundColor: 'white',
          height: 50
        }
      }

      return (
        <div style={{ position: 'relative', display: 'grid' }}>
          <img
            className={className}
            style={{ position: isInput ? 'relative' : '', cursor }}
            src={item.url} alt='...'
            onClick={onClickImage(item, index)}

          />
          {isInput && (
            <FormItem
              style={{ display: 'inline-block', position: 'absolute', right: 0, left: 0, padding: 0 }}
              name={inputCurrent}
            >
              <Input
                allowClear
                maxLength={questions.typeInput ? 1 : ''}
                disabled={!state.isDoing}
                onChange={onChangeText(inputCurrent)}
                style={styleInput}
              ></Input>
            </FormItem>
          )}
          {(!state.isDoing && isInput && !questions.isHiddenCheck) && (
            <i
              className={classNames({
                "fas fa-check": state.booleanArray[inputCurrent],
                "fas fa-times": !state.booleanArray[inputCurrent]
              })}
              style={{
                color,
                top: -1,
                zIndex: 1,
                right: -10,
                fontSize: 20,
                position: 'absolute',
              }}
            />
          )}
        </div>
      );
    });
  }, [onChangeText, onClickImage, questions.fontSize, questions.inputHeight, questions.isHiddenCheck, questions.isLargeInput, questions.typeInput, state.booleanArray, state.isDoing, state.maxInput]);

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
    setState((prevState) => ({ ...prevState, isDoing: false, isDisabledRetry: false, isDisabledSubmit: true }))
  }, []);

  const onRetry = React.useCallback(() => {
    formCheckAnswer.resetFields();
    setState((prevState) => ({
      ...prevState,
      isDoing: true,
      isDisabledRetry: true,
      isDisabledSubmit: true,
      inputArray: new Array(state.maxInput).fill()
    }))
  }, [formCheckAnswer, state.maxInput])

  const onFinish = React.useCallback((values) => {

    let booleanArray = [];
    let studentAnswer = [];

    for (let i = 0; i < state.maxInput; i++) {
      let isCorrect = false;
      const answersInArray = state.answers[i]
      const isManyAnswers = answersInArray.includes(questions.tag ?? '/');
      if (isManyAnswers && values[i]) {

        const answers = answersInArray.split(questions.tag ?? '/');

        for (let j = 0; j < answers.length; j++) {
          isCorrect = answers[j].trim().toLowerCase() === values[i].trim().toLowerCase();
          if (isCorrect) break;
        }
      } else {
        if (!answersInArray) {
          isCorrect = true;
        }
        else {
          if (values[i]) {
            isCorrect = values[i].trim().toLowerCase() === state.answers[i].trim().toLowerCase();
          }
        }
      }

      booleanArray.push(isCorrect);
      studentAnswer.push(values[i]);

    }

    let correctAnswer = 0;
    booleanArray.forEach((item, index) => {
      if (item) {
        correctAnswer++
      }
    })
    const percent = parseInt(correctAnswer / booleanArray.length * 100)

    const resultString = `${correctAnswer}/${booleanArray.length}`

    const star = percent / 20;

    const params = {
      score: percent,
      unit: questions.unit,
      results: resultString,
      exerciseId: questions.id,
      sreatedDate: moment().format(),
      studentAnswer: JSON.stringify(studentAnswer),
    }
    questions.postAnswerToApi(params)

    setModal(true)

    setState((prevState) => ({ ...prevState, booleanArray, studentAnswer: values, star }))
  }, [questions, state.answers, state.maxInput])

  const onStopRecording = React.useCallback((recordURL) => {
    setState((prevState) => ({ ...prevState, recordURL: recordURL.blobURL }))
  }, [])

  if (!state.data) return null

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TitleQuestion titleQuestion={state.data?.titleQuestion} />
      </Row>

      <Modal isOpen={modal} toggle={toggle} backdrop={true} fade={false}>
        {(state.star > 0) && (
          <Firework />
        )}
        <Animate
          resultString={state.star}
        />
      </Modal>

      <Row style={{ minWidth: 985, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form form={formCheckAnswer} autoComplete="off" onFinish={onFinish}>
          {renderContent()}
          <Button innerRef={submitButtonRef} style={{ display: 'none' }} htmlType="submit" >text</Button>
        </Form>
      </Row>
      {questions?.recorder && (
        <Row className='justify-content-center' style={{ marginBottom: 30, marginTop: 10 }}>
          <Recorder
            // onRecording={onRecording}
            onStop={onStopRecording}
          />
          {state.recordURL && (
            <Listen
              custom
              audioURL={state.recordURL}
              style={{ padding: 0, borderWidth: 0 }}
            >
              <Button color="primary" id="tooltipRepeat" type="button">
                <i style={{ fontSize: 15 }} className="fas fa-volume-up" />
              </Button>
            </Listen>
          )}
        </Row>
      )}
      {/* {state.videoUrl && (
        <Row className='mb-4 mt-4'>
          <Player
            // playsInline
            poster="/assets/poster.png"
            src={state.videoUrl}
          />
        </Row>
      )} */}
      {state.videoUrl && (
        <VideoModal ref={videoRef} videoUrl={state.videoUrl} crossorigin="anonymous" />
      )}
      {state.audioImgUrl && (
        <AudioPlayer
          id='audio'
          timeStamp={state.timeStamp}
          isPause={state.isPause}
          audioUrl={state.audioImgUrl}
        // isVisibled={props.isVisibled}
        />
      )}

      <FooterModal
        onRetry={onRetry}
        onSubmit={onSubmit}
        audioUrl={state.audioUrl}
        result={questions.recorder ? null : (state?.booleanArray)}
        studentAnswer={state.studentAnswer}
        exerciseKey={questions.exerciseKey}
        isDisabledRetry={state.isDisabledRetry}
        isDisabledSubmit={true}
        hideBtnFooter={true}
      />

    </Container>
  )
}
export default DesignTypeIn