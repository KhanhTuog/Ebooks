import React from 'react'
import { Container, Row, Button, Card, CardHeader, CardBody, Collapse } from 'reactstrap'
import FooterModal from '../../../FooterModal'
import TitleQuestion from '../../../TitleQuestion'
import Recorder from '../../../Recorder'
import Listen from '../../../Listening'
// import VideoModal from '../../../VideoModal'
import { Player, BigPlayButton, ControlBar, ClosedCaptionButton, ReplayControl, ForwardControl, CurrentTimeDisplay } from 'video-react';
import AudioPlayer from '../../../AudioPlayer'

const UserInterface = (props) => {
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
  }, [state.audioUrl]);

  const renderImage = React.useCallback((images, rowIndex) => {

    return images.map((item, index) => {
      let imageSrc = item.url;
      let cursor = '';
      if (item.audioUrl) {
        cursor = `url(img/volume.png) 12 12, auto`
      }
      if (item.videoUrl) {
        cursor = `url(img/video.png) 12 12, auto`
      }
      return (
        <div key={index} style={{ display: 'grid', position: 'relative' }}>
          <img
            alt="..."
            src={imageSrc}
            style={{ cursor, width: '100%' }}
            onClick={onClickImage(item, index, rowIndex)}
          />
        </div>
      );
    });
  }, [onClickImage]);

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
    if (!props.songLyric) return null;
    return (
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
    );
  }, [props?.songLyric, collapsesToggle, state.openedCollapses, renderWords]);

  if (!state.data) return null;

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', alignItems: 'center',justifyContent:'start' }}>
        <TitleQuestion titleQuestion={state.data?.titleQuestion} />
      </Row>

      <Row style={{ minWidth: 985, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {renderContent}
      </Row>
      {renderLyric()}
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
        <div class="d-flex justify-content-center">
          <div style={{ width: '35vw', marginBottom: 50 }}>
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
          </div>
        </div>

      )}
      {/* {state.videoUrl && (
        <VideoModal ref={videoRef} videoUrl={state.videoUrl} />
      )} */}
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
export default UserInterface
