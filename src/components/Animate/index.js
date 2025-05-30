import React from 'react';
import { Rate } from 'antd';
import { pulse } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import url_0 from './assets/0.mp3'
import url_1 from './assets/1.mp3'
import url_2 from './assets/2.mp3'
import url_3 from './assets/3.mp3'
import url_4 from './assets/4.mp3'
import url_5 from './assets/5.mp3'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ play, resultString, onCompleteCallBack }) => {
  const styles = {
    pulse: {
      animation: 'x 3s',
      animationName: Radium.keyframes(pulse, 'pulse')
    }
  }

  const audio = Math.trunc(resultString);

  const getAudioUrl = React.useCallback((audio) => {
    switch (audio) {
      case 0:
        return url_0
      case 1:
        return url_1
      case 2:
        return url_2
      case 3:
        return url_3
      case 4:
        return url_4
      case 5:
        return url_5

      default:
        return ''
    }
  }, []);
  return (
    <StyleRoot>
      <div className="test" style={styles.pulse}>
        <Rate allowHalf disabled value={resultString} style={{ fontSize: 93 }} />
        <audio className={styles.audio} id='myAudio' autoPlay>
          <source src={getAudioUrl(audio)} type='audio/mpeg' />
        </audio>
      </div>
    </StyleRoot>
  );
};

