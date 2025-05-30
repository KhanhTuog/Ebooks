import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from 'antd/es/tooltip';
import { LoadingOutlined } from '@ant-design/icons';
import { ReactMic } from '@cleandersonlobo/react-mic';

import { captureUserMedia } from './utils';
// import notification from '../Notification'

class Recorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      src: null,
      recognizer: null,
      recordAudio: undefined,
      statusRecord: 'start',
      classNames__btnRecord: null,
      disabled: true,
      statusText: 'Thu âm bị lỗi',
      isRecord: false,
    };
  }

  componentDidMount() {
    this.initialRecord();
  }


  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { recordParams } = this.props;
    if (recordParams.questionId !== nextProps.recordParams.questionId) {
      this.setState({ isRecord: false });
    }
  };

  initialRecord = async () => {
    await captureUserMedia();
    this.setState({ disabled: false, statusText: 'Start recording' });
  };

  onRecord = () => {
    if (this.state.statusRecord === 'start') {
      this.setState(
        {
          statusRecord: 'stop',
          classNames__btnRecord: ['pulse', 'infinite'],
          statusText: 'Stop',
        },
        () => {
          // record
          this.recordStart();
        }
      );
    } else {
      this.setState(
        {
          statusRecord: 'cal',
          classNames__btnRecord: null,
        },
        () => {
          this.recordStop();
        }
      );
    }
  };

  recordStart = () => {
    this.setState({
      record: true,
    });
    if (this.props.__onRecording) {
      this.props.__onRecording();
    }
  };

  recordStop = () => {
    this.setState({
      record: false,
      classNames__btnRecord: null,
      isRecord: true,
    });
  };

  onData() {
  }

  onStop = async (recordedBlob, isAllowSubmit) => {
    this.recordedBlob = recordedBlob;

    if (isAllowSubmit) {
      this.setState({
        statusRecord: 'cal',
        classNames__btnRecord: null,
      });
    }

    const { SpeakPractice, recordParams, onStopTimer } = this.props;
    const { questionId, studentId, takeExamTime, questionText } = recordParams;

    if (onStopTimer) {
      onStopTimer();
    }

    const scope = this;

    var reader = new FileReader();
    reader.readAsDataURL(recordedBlob.blob);
    reader.onloadend = async () => {
      var base64data = reader.result;

      if (!isAllowSubmit) {
        scope.setState({ statusRecord: 'start', statusText: 'Recording' });
        this.props.__onStopRecording({ recordedBlob, base64data });
        return;
      }

      if (SpeakPractice) {
        scope.setState({ statusRecord: 'start', statusText: 'Recording' });
        this.props.__onStopRecording({ recordedBlob, base64data });
      } else {
        var bodyFormData = new FormData();
        bodyFormData.append('Device', 'WEB');
        bodyFormData.append('mode', 'Dictation');
        bodyFormData.append('questionId', questionId);
        bodyFormData.append('readingText', questionText);
        bodyFormData.append('studentID', studentId);
        bodyFormData.append('takeExamTime', takeExamTime);
        bodyFormData.append('extensionInput', 'wav');
        bodyFormData.append('input', base64data);
        bodyFormData.append('speechRecognitionAPI', 'A');

        try {
          const response = await axios({
            method: 'POST',
            url:
              'https://ames.edu.vn/ames/api/amesApi/SaveFileAndCalculateScore',
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } },
          });

          scope.setState({ statusRecord: 'start', statusText: 'Recording' });
          if (response.statusText === 'OK') {
            if (this.props.__onStopRecording) {
              this.props.__onStopRecording(response.data);
            }
          }
        } catch (error) {
          scope.setState({
            statusRecord: 'start',
            statusText: 'Recording',
          });

          this.props.__onStopRecording(undefined);

          // notification('danger', 'Thông báo', 'Thu âm bị lỗi!, Bạn vui lòng Recording!')
        }
      }
    };
  };

  render() {
    let {
      src,
      statusRecord,
      classNames__btnRecord,
      disabled,
      statusText,
      isRecord,
    } = this.state;
    if (this.props.__custom) {
      let { __className, __icon } = this.props;
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Tooltip style={{ top: 200 }} placement="bottom" title={statusText}>
            <div
              style={{ display: 'flex', cursor: 'pointer', justifyContent: 'center', alignItems: 'center' }}
              className={classNames(['animated', classNames__btnRecord, __className,])}
              onClick={disabled ? null : this.onRecord}
            >
              {disabled ? (
                <i style={{ fontSize: '25px' }} className="fas fa-microphone-slash" />
              ) : statusRecord === 'cal' ? (
                <LoadingOutlined style={{ fontSize: 30 }} />
              ) : statusRecord === 'start' ? (
                __icon ? (__icon) : isRecord ? (<i style={{ fontSize: '25px' }} className="fas fa-undo" />
                ) : (<i style={{ fontSize: '25px' }} className="fas fa-microphone" />)
              ) : (<i style={{ fontSize: '25px' }} className="fas fa-stop"></i>)}
            </div>
          </Tooltip>
          {this.props.children}
          <br />
          {this.props.__listenAgain && (
            <audio
              controls
              src={src}
              className={classNames(['btn-record__soundClips', 'mt-10'])}
            />
          )}
          <div style={{ display: 'none' }}>
            <ReactMic
              record={this.state.record}
              visualSetting="none"
              className="sound-wave"
              onStop={(data) => this.onStop(data, this.props.isAllowSubmit)}
              onData={this.onData}
              audioBitsPerSecond={128000}
            />
          </div>
        </div>
      );
    }

    return null;
  }
}

Recorder.propTypes = {
  __custom: PropTypes.bool,
  __className: PropTypes.string,
  __icon: PropTypes.string,
  isAllowSubmit: PropTypes.bool,
  __listenAgain: PropTypes.bool,
  SpeakPractice: PropTypes.bool,
  onStopTimer: PropTypes.func,
  __onRecording: PropTypes.func,
  __onStopRecording: PropTypes.func,
  recordParams: PropTypes.instanceOf(Object),
};

Recorder.defaultProps = {
  isAllowSubmit: true,
}

export default Recorder;
