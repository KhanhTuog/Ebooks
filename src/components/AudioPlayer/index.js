import React from 'react'

const AudioPlayer = ({ audioUrl, isVisibled, isPause,timeStamp }) => {

  const audioPlayer = React.useRef();
  React.useEffect(() => {
    return () => {
      audioPlayer.current.pause();
    }
  }, [])

  React.useEffect(() => {
    if (isPause) {
      audioPlayer.current?.pause();
    } else {
      audioPlayer.current?.play();
    }
  }, [isPause])

  // Stop audio
  React.useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
    }
  }, [isVisibled]);

  React.useEffect(() => {
    audioPlayer.current?.pause();
    audioPlayer.current = new Audio(audioUrl);
    audioPlayer.current.play();
  }, [audioUrl,timeStamp]);
  return null;
}
export default AudioPlayer