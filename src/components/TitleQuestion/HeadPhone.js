/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

function HeadPhone({ name, src }) {
  const audio = new Audio(src);

  React.useEffect(() => {
    return () => {
      audio.pause();
    }
  }, [audio]);

  return (
    <div style={{ display: 'inline-block' }}>
      <img
        src='img/headphone.jpg'
        alt=''
        style={{ width: '30px', cursor: src ? 'url(img/volume.png) 12 12, auto' : '' }}
        onClick={() => { audio.play() }}
      />
      <span style={{ fontSize: 18 }}>{` ${name}`}</span>
    </div>
  )
}

export default HeadPhone
