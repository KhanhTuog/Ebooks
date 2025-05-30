import React from 'react';
import { Button } from 'reactstrap';
import { CgRecord } from 'react-icons/cg';
import { BsFillMicFill } from 'react-icons/bs';
import { ReactMic } from '@cleandersonlobo/react-mic';

// Components
import CountDownTimer from '../CountDownTimer';

import styles from './styles.module.css';
import { captureUserMedia } from '../Recording/utils';
import * as functions from '../../constants/functions';

const Recorder = ({ onRecording, onStop: onStopProps,seconds }) => {
  const refCountdownTimer = React.useRef();

  const [state, setState] = React.useState({
    recording: false,
    result: null,
  });

  React.useEffect(() => {
    captureUserMedia();

  }, []);

  React.useEffect(() => {
    if (state.recording) {
      refCountdownTimer.current?.startTimer();
      onRecording?.();
      return;
    }
  }, [state.recording, onRecording]);

  const onStop = React.useCallback(async (data) => {
    refCountdownTimer.current?.stopTimer();

    setState((prevState) => ({
      ...prevState,
      recording: false,
      result: data,
    }));

    onStopProps?.(data);
  }, [onStopProps]);

  const toggleRecording = React.useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      recording: !prevState.recording,
    }));
  }, []);

  const isMobile = functions.isMobile();

  let buttonText = 'Record';

  if (state.recording) {
    buttonText = <CountDownTimer seconds={seconds || 60} ref={refCountdownTimer} />;
  } else {
    if (state.result) {
      buttonText = 'Try again';

      if (isMobile) {
        buttonText = '';
      }
    }
  }

  let isMarginRight = true;

  if (typeof buttonText === 'string') {
    isMarginRight = buttonText.length;
  }

  return (
    <React.Fragment>
      <div className={styles.displayNone}>
        <ReactMic
          record={state.recording}
          visualSetting="none"
          className="sound-wave"
          audioBitsPerSecond={128000}
          strokeColor="#000000"
          backgroundColor="#FF4081"
          onStop={onStop}
        mimeType='audio/mp3'
        />
      </div>
      <Button
        type="button"
        className={`${styles.button} ${state.recording && 'animated pulse infinite'}`}
        onClick={toggleRecording}
      >
        {!state.recording && <BsFillMicFill className={styles.buttonIcon} size={20} style={{ marginRight: !isMarginRight ? 0 : undefined }} />}
        {state.recording && <CgRecord className={styles.buttonIcon} size={20} style={{ marginRight: !isMarginRight ? 0 : undefined }} />}
        {buttonText}
      </Button>
    </React.Fragment>
  );
}

export default Recorder;
