import React from 'react'
import { Container, Row, Button, Card, CardHeader, CardBody, Collapse } from 'reactstrap'
import FooterModal from '../../../FooterModal'
import TitleQuestion from '../../../TitleQuestion'
import classNames from 'classnames';
import Recorder from '../../../Recorder'
import Listen from '../../../Listening'
import VideoModal from '../../../VideoModal'
import AudioPlayer from '../../../AudioPlayer'

const DesignUnderLine = (props) => {
  const [state, setState] = React.useState({
    data: null,
    inputs: [],
    isDoing: true,
    audioUrl: null,
    audioImgUrl: null,
    videoUrl: null,
    timeStamp: null,
    isDisabledRetry: true,
    isDisabledSubmit: true,
    openedCollapses: true,
  });

  const videoRef = React.useRef()


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

  const renderImage = React.useCallback((images, rowIndex) => {

    return images.map((item, index) => {
      let imageSrc = item.url;
      let inputIndex = -1;
      let isSelecting = false;
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
      if (item.input) {
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
          {(!state.isDoing && item.input && isSelecting) && (
            <i
              className={classNames({
                "fas fa-check": item?.isCorrect,
                "fas fa-times": !item?.isCorrect
              })}
              style={{
                color: item?.isCorrect ? 'green' : 'red',
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
  }, [onClickImage, state.inputs, state.isDoing]);

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
    setState((prevState) => ({ ...prevState, isDoing: false, isDisabledRetry: false, isDisabledSubmit: true }))
  }, []);

  const onRetry = React.useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      inputs: [],
      isDoing: true,
      isDisabledRetry: true,
      isDisabledSubmit: false,
    }))
  }, []);

  //Record

  const onStopRecording = React.useCallback((recordURL) => {
    setState((prevState) => ({ ...prevState, recordURL: recordURL.blobURL }))
  }, [])

  //on off SongLyric
  const collapsesToggle = React.useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      openedCollapses: !prevState.openedCollapses,
    }));
  }, []);

  const renderWords = React.useMemo(() => {
    return <div dangerouslySetInnerHTML={{ __html: props?.songLyric }}></div>
  }, [props?.songLyric]);

  const renderLyric = React.useCallback(() => {
    return (
      <>
        <div className="accordion">
          <Card className="card-plain">
            <CardHeader
              role="tab"
              onClick={collapsesToggle}
              aria-expanded={state.openedCollapses}
            >
              <h5 className='mb-0' style={{ fontSize: 25, color: 'black' }}>
                Song Lyrics
              </h5>
            </CardHeader>
            <Collapse role="tabpanel" isOpen={state.openedCollapses}>
              <CardBody
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "500",
                  fontFamily: "OneStrokeScriptStd-Bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {renderWords}
              </CardBody>
            </Collapse>
          </Card>
        </div>
      </>
    );
  }, [state.openedCollapses, collapsesToggle, renderWords]);

  if (!state.data) return null;

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TitleQuestion titleQuestion={state.data?.titleQuestion} />
      </Row>
      <Row style={{ minWidth: 985, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {renderContent}
      </Row>

      {props?.songLyric && (
        renderLyric()
      )}

      {props?.recorder && (
        <Row className='justify-content-center' style={{ marginBottom: 30 }}>
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

      {state.videoUrl && (
        <VideoModal ref={videoRef} videoUrl={state.videoUrl} />
      )}

      {state.audioImgUrl && (
        <AudioPlayer
          id='audio'
          timeStamp={state.timeStamp}
          isPause={state.isPause}
          audioUrl={state.audioImgUrl}
          isVisibled={props.isVisibled}
        />
      )}

      <FooterModal
        onRetry={onRetry}
        onSubmit={onSubmit}
        audioUrl={state.audioUrl}
        exerciseKey={props.exerciseKey}
        isDisabledSubmit={state.isDisabledSubmit}
        isDisabledRetry={state.isDisabledRetry}
        hideBtnFooter={true}
      />
    </Container>
  )
}
export default DesignUnderLine
