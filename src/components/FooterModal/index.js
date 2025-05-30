import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, UncontrolledTooltip } from 'reactstrap';
import ExerciseKey from '../ExerciseKey'
import Animate from './Animate';
import { Rate } from 'antd';
// import url_0 from './assets/0.mp3'
// import url_1 from './assets/1.mp3'
// import url_2 from './assets/2.mp3'
// import url_3 from './assets/3.mp3'
// import url_4 from './assets/4.mp3'
// import url_5 from './assets/5.mp3'
import styles from './styles.module.css';

const FooterModal = ({ resultStringProps, result, isDisabledSubmit, isDisabledRetry, onRetry, onSubmit: onSubmitProps, audioUrl, exerciseKey, exerciseKeySize, hideBtnFooter }) => {

  const [state, setState] = React.useState({
    data: null,
    audio: null,
    onRetrying: false,
    keysVisible: false,
    videoVisible: false,
    audioVisible: true,
    keyButtonVisible: false,
  });

  const toggleState = React.useCallback((fieldName) => () => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  }, []);

  const toggleDrawer = React.useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      keysVisible: !prevState.keysVisible
    }));
  }, []);



  const onSubmit = React.useCallback(() => {
    onSubmitProps?.();

    setState((prevState) => ({ ...prevState, keyButtonVisible: true }));

  }, [onSubmitProps]);

  const resultString = React.useCallback(() => {
    let correctAnswer = 0;
    if (!result) return;

    result.forEach((item, index) => {
      if (item) {
        correctAnswer++
      }
    })

    const percent = parseInt(correctAnswer / result.length * 100);

    const star = percent / 20;

    // const audio = Math.trunc(star);

    // if (state.audio !== audio && star > -1) {
    //   setState((prevState) => ({ ...prevState, audio }));
    // }
    return star
  }, [result])

  // const getAudioUrl = React.useCallback((audio) => {
  //   // if (audio) {
  //   //   return url_1;
  //   // }
  //   // return url_0;
  //   switch (audio) {
  //     case 0:
  //       return url_0
  //     case 1:
  //       return url_1
  //     case 2:
  //       return url_2
  //     case 3:
  //       return url_3
  //     case 4:
  //       return url_4
  //     case 5:
  //       return url_5

  //     default:
  //       return ''
  //   }
  // }, []);

  return (
    <Row className='d-flex justify-content-center mt-2 mb-2' >
      <div style={{ position: 'fixed', bottom: 10, display: 'flex', width: '95%', justifyContent: 'center', backgroundColor: 'white', padding: 10, height: 64, zIndex: 1 }}>
        <div className='d-flex' style={{ flexDirection: 'row', width: '80%', }}>
          {/* Button Key */}
          <div className={`${styles.wrapColLeft}`} style={{ alignContent: 'center' }}>
            {state.keyButtonVisible && (
              <Button
                id="key"
                color="info"
                type="button"
                className="btn-icon btn-2"
                onClick={toggleDrawer}
              >
                <span className="btn-inner--icon">
                  <i className="fas fa-key"></i>
                </span>
              </Button>
            )}

            {/* Button AUDIO */}
            {/* {audioUrl && (
              <>
                <Button
                  id="tooltip611234742"
                  color="info"
                  type="button"
                  className="btn-icon btn-2"
                  onClick={toggleState('audioVisible')}
                >
                  <span className="btn-inner--icon">
                    <i className="fas fa-headphones-alt"></i>
                  </span>
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="top"
                  target="tooltip611234742"
                >
                  Audio
                </UncontrolledTooltip>
              </>
            )} */}
            {(result || resultStringProps) && state.keyButtonVisible && !isDisabledRetry && (
              <>
                {/* <Rate value={resultString()} /> */}
                <Animate
                  resultString={resultString()}
                />
                {/* <audio className={styles.audio} id='myAudio' autoPlay>
                  <source src={getAudioUrl(state.audio)} type='audio/mpeg' />
                </audio> */}
              </>
            )}
          </div>
          {state.audioVisible && audioUrl && (
            <div className={`${styles.wrapColCenter} justify-center items-center`} >
              <div >
                <audio className={styles.audio} id='myAudio' controls>
                  <source src={audioUrl} type='audio/mpeg' />
                </audio>
              </div>

            </div>
          )}
          <div className={`${styles.wrapColRight}`}>
            {(
              <>
                <Button
                  type="button"
                  color="danger"
                  // className="ml-2"
                  data-dismiss="modal"
                  disabled={isDisabledRetry}
                  hidden={hideBtnFooter}
                  onClick={onRetry}
                >
                  Try again
                </Button>
                <Button
                  type="button"
                  color="danger"
                  // className="ml-auto"
                  data-dismiss="2"
                  disabled={isDisabledSubmit}
                  hidden={hideBtnFooter}
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <ExerciseKey
        exerciseKey={exerciseKey}
        exerciseKeySize={exerciseKeySize}
        visible={state.keysVisible}
        onClose={() => setState((prevState) => ({ ...prevState, keysVisible: !prevState.keysVisible }))}
      />
      {/* <VideoModal ref={videoModal} videoUrl={videoUrl} /> */}
    </Row >
  );
};

FooterModal.propTypes = {
  questions: PropTypes.instanceOf(Object),
  isVisibled: PropTypes.bool,
  toggleModal: PropTypes.func,
};

export default FooterModal;
