import { Form, Input } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import React from 'react'

export function toFormValues(array) {
  const list = array.map((item, index) => [index, item])
  return Object.fromEntries(list); // {0: 'a', 1: 'b', 2: 'c'}
}

export function calculateResultWrite(userAnswers, answers, checkUppercase) {
  userAnswers = userAnswers.map(item => item ?? ''); // undefined => ''
  const listAnswers = answers.map((item) => item.split('/'));
  //
  const res = listAnswers.map((item, index) => {
    if (!item[0]) return [index, null]; //answer: "", luôn đúng 

    const isCorrect = item.some(x => checkUppercase
      ? x.trim() === userAnswers[index].trim() // chữ hoa khác chữ thường
      : x.trim().toLowerCase().replace(/(\W+)$/g, '') === userAnswers[index].trim().toLowerCase().replace(/(\W+)$/g, '') // ko phân biệt hoa thường, bỏ dấu cuối câu
    );
    return [index, isCorrect];
  })
  const listBoolean = Object.fromEntries(res); //biến hiển thị css đúng/sai
  const booleanArray = Object.values(listBoolean).filter(x => x !== null);
  // params
  const correct = booleanArray.reduce((total, item) => total += item ? 1 : 0, 0); // phát hiện câu đúng cộng 1 điểm
  const total = answers.filter(x => x !== '').length; // tổng số đáp án khác ''
  const percent = parseInt(correct * 100 / total) // tính %
  const resultString = `${correct}/${total}`  // điểm / tổng
  const star = percent / 20;
  //
  return { listBoolean, booleanArray, percent, resultString, star };
};

function Write({ id, data }) {
  const initialInputStyle = { color: '#4285F4', ...data.inputStyle };
  let inputStyle = initialInputStyle;
  //set Style
  if (data.isDoing === false) {
    const isCorrect = data.resultWrite.listBoolean[id];
    if (isCorrect !== null) {
      const color = isCorrect ? 'green' : 'red';
      inputStyle.color = color;
    }
  }
  // show icon check
  const showIcon = () => {
    if (data.isDoing) return null;
    const isCorrect = data.resultWrite?.listBoolean[id];
    if (isCorrect === true) return <CheckCircleOutlined style={{ fontSize: 25, color: '#2ecc71' }} />
    if (isCorrect === false) return <CloseCircleOutlined style={{ fontSize: 25, color: '#e74c3c' }} />
  }

  return (
    <div style={{ display: 'inline-flex', position: 'relative' }}>
      <div style={{ position: 'absolute', borderBottom: 'solid gray 2px', width: '100%', height: 28, ...data.underlineStyle }} />
      <Form.Item
        name={`${id}`}
        style={{ marginBottom: 0 }}
      // rules={[{ required: true, message: 'Please fill the answer' },]}
      >
        <Input
          bordered={false}
          style={{
            fontSize: 26,
            height: 30,
            padding: 5,
            // borderBottom: 'solid gray 2px',
            ...inputStyle
          }}
        />
      </Form.Item>
      {showIcon()}
    </div>
  )
}

export default Write;


