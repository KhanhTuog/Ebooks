import { Card, Radio, Space } from 'antd';
import React from 'react';

function ToolBarDraw({ listStyle, refUser }) {

  const handleChange = React.useCallback((e) => {
    const value = e.target.value;
    refUser.current = value;
  }, [refUser]);

  const renderOptions = React.useCallback(() => {
    const keys = Object.keys(listStyle);
    return keys.map((item, index) => <Radio key={index} value={item}>
      <span style={{ fontSize: 18, ...listStyle[item] }}>{item}</span>
    </Radio>)
  }, [listStyle]);

  return (
    <div style={{ position: 'fixed', top: '20%', left: '50px' }}>
      <Card size="small" title={<b> Tool Draw </b>} >
        <Radio.Group defaultValue='normal' onChange={handleChange}>
          <Space size='large' direction="vertical">
            {renderOptions()}
          </Space>
        </Radio.Group>
      </Card>
    </div>
  );
}

export default ToolBarDraw;