import React from 'react';
import { Drawer } from 'antd';

const ExerciseKey = ({ exerciseKey, visible, onClose }) => {
  return (
    <div id="drawer-container">
      <Drawer
        // title={<img src="/assets/key-header.png" alt="" />}
        width={1000}
        placement='right'
        closable
        onClose={onClose}
        visible={visible}
        zIndex={1100}

      // getContainer={false}
      >
        {exerciseKey && (
          <img src={exerciseKey} alt='...' style={{ width: '100%', paddingTop: 25 }} />
        )}
        {!exerciseKey && (
          <div className='mt-5 d-flex justify-content-center text-info display-3' >Students’ own answers</div>
        )}

      </Drawer>
    </div>
  );
}

export default ExerciseKey;
