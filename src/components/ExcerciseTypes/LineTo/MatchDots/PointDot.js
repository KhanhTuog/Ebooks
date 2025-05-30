import React from 'react'
import LineTo from 'react-lineto';
import ReactHtmlParser from 'react-html-parser';


export function RenderLineTo({ userAnswers, isDoing, listBoolean }) {  //['0-3', '1-4', '2-5']
  if (!userAnswers) return null;

  const Anchor = { fromAnchor: 'center', toAnchor: 'center' };
  return userAnswers.map((item, index) => {
    const [first, second] = item.split('-');
    let color = '#4285F4';
    if (isDoing === false) {
      const isCorrect = listBoolean[`${first}-${second}`];
      color = isCorrect ? 'green' : 'red';
    }

    return (
      <LineTo
        key={index}
        {...Anchor}
        from={`dot-${first}`}
        to={`dot-${second}`}
        within='match-container'
        borderColor={color}
        borderWidth={2}
      />
    );
  })
};
export function calculateResultLine(userAnswers, answers) {
  const total = Math.max(userAnswers.length, answers.length); // tổng số đáp án hoặc tổng số đã chọn;
  const booleanArray = new Array(total);
  const listBoolean = {}; // biến hiển thị css đúng/sai
  userAnswers.forEach((item, index) => {
    const isCorrect = answers.includes(item);
    booleanArray[index] = isCorrect;
    Object.assign(listBoolean, { [item]: isCorrect });
  });
  // params
  const correct = booleanArray.reduce((total, item) => total += item ? 1 : 0, 0);
  const percent = parseInt(correct * 100 / total) // tính %
  const resultString = `${correct}/${total}`  // điểm / tổng
  const star = percent / 20;
  return { listBoolean, booleanArray, percent, resultString, star }
};

function PointDot({ id, data, setData }) {
  const { boxMatch } = data;
  const color = '#4285F4'

  const handleClick = React.useCallback((id) => {
    if (!data.isDoing) return null;
    let userSelect = data.userSelect ?? [];
    let userAnswers = data.userAnswers ?? [];
    userSelect.push(id);
    userSelect = [...new Set(userSelect)] // loại bỏ trùng lặp
    if (userSelect.length >= 2) {
      const newline = userSelect.sort().join('-');
      if (data.multipleLine) {
        //chọn  nhiều
        if (userAnswers.includes(newline)) { // tìm đường đã nối
          userAnswers = userAnswers.filter(x => x !== newline); // xóa đường nối
        } else {
          userAnswers.push(newline); // thêm đường mới
        }
      }
      else {
        // chọn 1-1
        userAnswers = userAnswers.filter(item => {
          const selected_point = item.split('-'); // điểm đã chọn
          const isRepetition = userSelect.some(x => selected_point.includes(x)); //phát hiện ít nhất 1 điểm trùng lặp
          return (!isRepetition); // lọc lấy những đường ko trùng lặp
        })
        userAnswers.push(newline);
      };
      userSelect = []; // clear
    }
    //update
    const newData = { ...data, userSelect, userAnswers }
    setData(newData)
  }, [data, setData]);

  const dotSelect = React.useCallback(() => {
    if (!data.userSelect?.includes(id)) return null;
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 15,
          height: 15,
          borderRadius: '50%',
          backgroundColor: color
        }}
      />

    );
  }, [color, data.userSelect, id]);

  return (
    <div
      className={`dot-${id}`}
      style={{ cursor: 'pointer', transform: 'translate(-50%, -50%)', ...boxMatch[id].boxMatchStyle }}
      onClick={() => handleClick(id)}
    >
      {dotSelect()}
      {ReactHtmlParser(boxMatch[id].children)}
    </div>
  )
}

export default PointDot;


