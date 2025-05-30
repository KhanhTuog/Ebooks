import React, { useState } from 'react';
import { Rate } from 'antd';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ play, resultString, onCompleteCallBack }) => {

  const [modal, setModal] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      onModal();
    }, 3000);
  }, []);

  const onModal = React.useCallback(() => {
    setModal(true)
  }, []);

  const styles = {
    bounce: {
      animation: 'x 3s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

  return (
    <StyleRoot>
      {modal && (
        <div className="test" style={styles.bounce}>
          <Rate allowHalf disabled value={resultString} style={{ fontSize: 50 }} />
        </div>
      )}
    </StyleRoot>
  );
};

