import React from 'react'

export function calculateResultCircle(userAnswers, answers, listWords, limitSelect) {
  // chấm điểm theo từng từ id_word
  let booleanArray = [];
  let correctWord = 0;  // tổng điểm các từ
  const listBoolean = {}; // biến hiển thị css đúng/sai
  userAnswers.forEach((item, index) => {
    const isCorrect = answers.includes(item);
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
  return { listBoolean, booleanArray, percent, resultString, star }
}
//
function Circle({ id, data, setData }) {
  const initialWordStyle = { cursor: 'pointer', ...data.initialWordStyle };
  const selectWordStyle = { ...initialWordStyle, ...data.selectWordStyle };
  let wordStyle = initialWordStyle;

  const listWords = data.listWords[id];
  const arrayWords = listWords.split(/([\s|])/);

  const handleClick = React.useCallback((id_word) => {
    if (data.isDoing === false) return;
    let userAnswers = data.userAnswers ?? [];

    if (userAnswers.includes(id_word)) {
      userAnswers = userAnswers.filter(x => x !== id_word) // bỏ chọn
    } else {
      userAnswers.push(id_word);  // chọn thêm
    }
    //limitSelect
    if (data.limitSelect) {
      const limitSelect = data.limitSelect;
      const [id, index] = id_word.split('-');
      const listSelected = userAnswers.filter(x => x.includes(`${id}-`)); // đã chọn theo id hiện tại
      if (listSelected.length > limitSelect) {
        const indexDelete = userAnswers.findIndex(x => x.includes(`${id}-`)); // vị trí cũ cần xóa
        userAnswers.splice(indexDelete, 1) //xóa 1 phần tử tại indexDelete
      };
    }
    //update
    const newData = { ...data, userAnswers }
    setData(newData);
  }, [data, setData]);

  if (!data) return null;

  return arrayWords.map((item, index) => {
    const id_word = `${id}-${index}`
    const userAnswers = data.userAnswers ?? [];
    const isSelect = userAnswers.includes(id_word);
    //set style word
    if (isSelect) {
      wordStyle = selectWordStyle // hiện khoanh tròn
      if (data.isDoing === false) {
        const isCorrect = data.resultCircle.listBoolean[id_word]
        const color = isCorrect ? 'green' : 'red';
        Object.assign(wordStyle, { borderColor: color, color: color })
      }
    }
    else {
      wordStyle = initialWordStyle  // ẩn khoanh tròn
    }
    //render
    const isWord = /^[\w✓"’“”]/g; //  ký tự đầu chữ hoặc số hoặc ✓ hoặc " hoặc ’
    if (isWord.test(item)) {
      const word = item.replaceAll('_', ' ');
      return <span
        key={index}
        id={id_word}
        style={{ ...wordStyle, }}
        onClick={() => handleClick(id_word)}
      >
        {word}
      </span>
    } else {
      if (item === '|') return null;
      return <span key={index} id={id_word} >{item}</span>
    }
  })
}

export default Circle;


