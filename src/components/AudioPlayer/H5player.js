import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const customControlsSection = ['MAIN_CONTROLS', 'VOLUME_CONTROLS'];

const AudioPlayerH5 = ({ audioUrl, isVisibled, isPause, onAudioPlay, onAudioPause,style }) => {
  const audioPlayer = React.useRef();

  if (!audioUrl) return null;
  
  return (
    <AudioPlayer
      ref={audioPlayer}
      autoPlay={false}
      onPlay={onAudioPlay}
      onPause={onAudioPause}
      showJumpControls={false}
      layout="horizontal-reverse"
      autoPlayAfterSrcChange={false}
      src={audioUrl}
      customControlsSection={customControlsSection}
      style={{ width: 500 ,...style }}
    />
  )

}
export default AudioPlayerH5