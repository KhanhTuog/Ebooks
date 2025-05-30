import React, { useState } from 'react';
import { Container, Row, Modal, ModalBody } from 'reactstrap';
import 'moment/locale/vi';
import moment from 'moment';
import classNames from 'classnames';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton, ControlBar, ClosedCaptionButton, ReplayControl, ForwardControl, CurrentTimeDisplay } from 'video-react';
import Animate from '../../../Animate';
import VideoModal from '../../../VideoModal';
import AudioPlayer from '../../../AudioPlayer'
import FooterModal from '../../../FooterModal';
import TitleQuestion from '../../../TitleQuestion';
import Firework from '../../../ResultsAndEffects/fireworks.js';

moment.locale('vi');

const DesignUnderLine = (props) => {
  const [state, setState] = React.useState({
    star: 0,
    data: [],
    inputs: [],
    isDoing: true,
    audioUrl: null,
    videoUrl: null,
    booleanArray: [],
    studentAnswer: null,
    isDisabledRetry: true,
    isDisabledSubmit: true,
    audioImgUrl: null,
  });
  const videoRef = React.useRef()

  const [modal, setModal] = useState(false);

  React.useEffect(() => {
    const clonedProps = JSON.parse(JSON.stringify(props));

    const data = clonedProps?.questionImage;

    data.titleQuestion = props.titleQuestion;

    const audioUrl = clonedProps.audio;

    const videoUrl = clonedProps.video

    setState((prevState) => ({ ...prevState, data, audioUrl, videoUrl }));
  }, [props]);

  const onClickImage = React.useCallback((item, index, rowIndex) => () => {
    const url = item.audioUrl || item.videoUrl
    if (url) {
      const timeStamp = Date.now()
      if (url?.includes('.mp4')) {
        setState((prevState) => ({ ...prevState, videoUrl: url }))
        return videoRef.current?.toggleModal('isVisibled')
      }
      if (state.audioUrl) {
        document.getElementById('myAudio')?.pause()
      }
      setState((prevState) => ({ ...prevState, audioImgUrl: url, timeStamp }))
    }
    if (!item.input || !state.isDoing) return;

    setState((prevState) => {
      const inputs = JSON.parse(JSON.stringify(prevState.inputs));

      const isTotal = (inputs.length + 1) >= props.totalInput;

      if (isTotal) {
        setState((prevState) => ({ ...prevState, isDisabledSubmit: false }))
      }
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
  }, [props.totalInput, state.audioUrl, state.isDoing]);

  const renderImage = React.useCallback((images, rowIndex) => {
    return images.map((item, index) => {
      const isInput = item.input;
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
      let imageSrc = item.url;
      let inputIndex = -1;
      let isSelecting = false;
      if (isInput) {
        inputIndex = state.inputs.findIndex((x) => x.input === item.input);
        if (inputIndex > -1) {
          isSelecting = state.inputs[inputIndex]?.select === index && state.inputs[inputIndex]?.rowIndex === rowIndex;
          if (isSelecting) {
            if (state.isDoing) {
              imageSrc = imageSrc.replace('.jpg', 'select.jpg');
            } else {
              imageSrc = imageSrc.replace('.jpg', 'answer.jpg');
            }
          }
        }
      }

      return (
        <div key={index} style={{ display: 'grid', position: 'relative' }}>
          <img
            alt="..."
            src={imageSrc}
            style={{ cursor, width: '100%' }}
            onClick={onClickImage(item, index, rowIndex)}
          />
          {(!state.isDoing && item.input && isSelecting && !props.isHiddenCheck) && (
            <i
              className={classNames({
                "fas fa-check": item?.isCorrect,
                "fas fa-times": !item?.isCorrect
              })}
              style={{
                color: item?.isCorrect ? 'green' : 'red',
                top: -1,
                right: props.right ? props.right : -20,
                fontSize: 20,
                zIndex: 1000,
                position: 'absolute',
              }}
            />
          )}
        </div>
      );
    });
  }, [onClickImage, state.isDoing, state.inputs, props.isHiddenCheck, props.right]);

  const renderContent = React.useMemo(() => {
    return state.data?.map((rowItem, rowIndex) => {
      return (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {renderImage(rowItem, rowIndex)}
        </div>
      )
    })
  }, [renderImage, state.data]);

  const onSubmit = React.useCallback(() => {
    let studentAnswer = [];
    let booleanArray = [];

    state.data.forEach((item, index) => {
      state.inputs.forEach((input, i) => {
        if (input.rowIndex === index) {
          const itemSelected = item[input.select];
          const isCorrect = itemSelected.isCorrect ?? false;
          booleanArray.push(isCorrect)
          studentAnswer.push(itemSelected);
        }
      })
    }
    )
    if (booleanArray.length !== props.totalInput) { // trường hợp chọn ít hơn đáp án
      const loop = props.totalInput - booleanArray.length;
      for (let index = 0; index < loop; index++) {
        booleanArray.push(false)
      }
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
      unit: props.unit,
      results: resultString,
      exerciseId: props.id,
      sreatedDate: moment().format(),
      studentAnswer: JSON.stringify(studentAnswer),
    }

    props.postAnswerToApi(params);

    onModal();

    setState((prevState) => ({ ...prevState, isDoing: false, isDisabledRetry: false, isDisabledSubmit: true, booleanArray, star }))
  }, [props, state.data, state.inputs]);

  const onRetry = React.useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      inputs: [],
      isDoing: true,
      booleanArray: [],
      isDisabledRetry: true,
      isDisabledSubmit: true,
    }))
  }, []);

  const onModal = React.useCallback(() => {
    setModal(true)
    setTimeout(() => {
      offModal();
    }, 3000);
  }, []);

  const offModal = React.useCallback(() => {
    setModal(false)
  }, []);


  if (!state.data) return null;

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', marginLeft: 20, alignItems: 'center' }}>
        <TitleQuestion titleQuestion={state.data?.titleQuestion} />
      </Row>
      {state.videoUrl && (
        <Player>
          <BigPlayButton position="center" />
          <source
            src={props.video}
            type="video/mp4"
            default

          />

          <track
            kind="captions"
            src={props.videoSub}
            srcLang="en"
            label="English"
          />
          <ControlBar autoHide={false}>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={10} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <ClosedCaptionButton order={7} />
          </ControlBar>
        </Player>

      )}

      <Row style={{ minWidth: 985, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {renderContent}
      </Row>

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
        isDisabledSubmit={state.isDisabledSubmit}
        isDisabledRetry={state.isDisabledRetry}
      />
    </Container>
  )
}
export default DesignUnderLine