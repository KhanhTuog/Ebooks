import React from 'react'

export function calculateResultCircle(userAnswers, answers, listWords, limitSelect) {
  // chấm điểm theo từng từ id_word
  let booleanArray = [];
  let correctWord = 0;  // tổng điểm các từ
  let listBoolean = {}; // biến hiển thị css đúng/sai
  Object.keys(userAnswers).forEach((item, index) => {
    const isCorrect = userAnswers[item] === answers[item];
    booleanArray[index] = isCorrect;
    Object.assign(listBoolean, { [item]: isCorrect });
    // 
    correctWord += isCorrect ? 1 : 0;
  });
  // chấm điểm theo mỗi câu Id
  const booleanArrayById = listWords.map((item, index) => {
    const id_words = Object.keys(listBoolean).filter(x => x.includes(`${index}-`)); // id các từ đã chọn
    if (!id_words[0]) return false; //không chọn => false
    const isCorrect = id_words.every(key => listBoolean[key]) // chọn đúng tất cả => true
    return isCorrect;
  })
  // params
  let correct = correctWord;
  let total = Math.max(userAnswers.length, answers.length); // tổng số đáp án hoặc tổng số đã chọn;
  // chấm điểm theo câu
  if (limitSelect) {
    correct = booleanArrayById.reduce((total, item) => total += item ? 1 : 0, 0) // phát hiện câu đúng cộng 1 điểm
    total = listWords.length; // tổng số câu
    booleanArray = booleanArrayById;
  }
  const percent = parseInt(correct * 100 / total) // tính %
  const resultString = `${correct}/${total}`  // điểm / tổng
  const star = percent / 20;
  // answers={} => ko chấm điểm
  if (!Object.keys(answers).length) {
    listBoolean = {};
    booleanArray = [];
  }
  return { listBoolean, booleanArray, percent, resultString, star }
}
//
function Circle({ id, data, setData, refStyle }) {

  const listWords = data.listWords[id];
  const arrayWords = listWords.split(/([\s|])/);
  //
  const handleClick = React.useCallback((id_word) => {
    if (data.isDoing === false) return;
    const userAnswers = data.userAnswers;
    const currentStyle = refStyle.current;
    if (currentStyle === 'normal') {
      delete userAnswers[id_word];
    } else {
      userAnswers[id_word] = currentStyle;
    }
    //update
    const newData = { ...data, userAnswers }
    setData(newData);
  }, [data, refStyle, setData]);
  //
  if (!data) return null;
  //
  return arrayWords.map((item, index) => {
    const { userAnswers, listStyle } = data;
    const id_word = `${id}-${index}`;
    const isCorrect = data.resultCircle?.listBoolean[id_word]
    const selectedStyle = userAnswers[id_word];
    //set style word
    let wordStyle = listStyle.normal;
    if (selectedStyle) {
      wordStyle = listStyle[selectedStyle];
    }
    //render
    const isWord = /^[\w✓"’]/g; //  ký tự đầu chữ hoặc số hoặc ✓ hoặc " hoặc ’
    if (isWord.test(item)) {
      const word = item.replaceAll('_', ' ');
      return <>
        <span
          key={index}
          id={id_word}
          style={{ cursor: 'pointer', ...wordStyle, }}
          onClick={() => handleClick(id_word)}
        >
          {word}
        </span>
        {renderCheck(isCorrect, data.isDoing)}
      </>
    } else {
      if (item === '|') return null;
      return <span key={index} id={id_word} >{item}</span>
    }
  })
}
export default Circle;
//
function renderCheck(isCorrect, isDoing) {
  if (isDoing) return null;
  if (isCorrect === true) return <i class="fa fa-check" style={{ position: 'absolute', fontSize: 16, color: '#2DCE89' }}></i>
  if (isCorrect === false) return <i class="fa fa-times" style={{ position: 'absolute', fontSize: 16, color: '#F13536' }}></i>
}
