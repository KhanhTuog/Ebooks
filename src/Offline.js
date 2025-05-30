import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

function Offline() {
  const history = useHistory();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '98vh', width: '98vw', padding: 24 }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img src='/img/FAF4-S-cover.jpg' style={{ height: '70vh', width: 'auto' }} alt='' />
        <h2 style={{ marginTop: 12 }}>Phiên bản Sách số (ngoại tuyến)</h2>
        <Button
          style={{ marginTop: 8 }}
          type='button'
          color='primary'
          onClick={() => {
            history.push('/1');
          }}
        >
          Bắt đầu sử dụng
        </Button>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Version 1.0 (Offline mode)</div>
    </div>
  );
}

export default Offline;
