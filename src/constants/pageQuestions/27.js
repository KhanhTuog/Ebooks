import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';


const json = {
  1: { // Exercise num
    unit: 'Review 1',
    id: 'SB4-PV-P27-E1',
    audio: '',
    video: '',
    component: T6,
    exerciseKey: 'img/FriendsPlus/Page27/E1/Key/answerKey.png',
    titleImage: "img/FriendsPlus/Page27/E1/title.jpg",
    inputSize: 150,
    // titleQuestion: [{ num: '1', ' }],
    questionImage: [],
    questions: [
      {
        title:
          `
          <div>
            <div>
              <b>1</b>  Duy <u style='color: rgb(82,197,235);'>likes </u> playing volleyball. He <u style='color: rgb(82,197,235);'>doesn't like </u> fishing.
            </div>
            <div> <b>2</b> Ly and Mi # doing gymnastics. They #playing the piano.</div>
            <div> <b>3</b> Oanh # reading comics.She # playing chess.</div>
            <div> <b>4</b> Lam and Nam # taking photos.They # playing the guitar.</div>
            <div> <b>5</b> Xuan # cooking.She # shopping.</div>
          <div>
      `,
        answer: [
          "don't like",
          "like",
          "likes",
          "doesn't like",
          "like",
          "don't like",
          "likes",
          "doesn't like",
        ],
      },
    ]
  },
  2: { // Exercise num
    unit: 'Review 1',
    id: 'SB4-PV-P27-E2',
    audio: '',
    exerciseKey: 'img/FriendsPlus/Page27/E2/Key/answerKey.png',
    video: '',
    maxLength: 1,
    padding: 0,
    textAlign: 'center',
    component: D1,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page27/E2/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page27/E2/2.jpg' },
        { url: 'img/FriendsPlus/Page27/E2/3.jpg', input: true, answer: "3" },
        { url: 'img/FriendsPlus/Page27/E2/4.jpg' },
        { url: 'img/FriendsPlus/Page27/E2/5.jpg', input: true, answer: "4" },
        { url: 'img/FriendsPlus/Page27/E2/6.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page27/E2/7.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page27/E2/8.jpg' },
        { url: 'img/FriendsPlus/Page27/E2/9.jpg', input: true, answer: "2" },
        { url: 'img/FriendsPlus/Page27/E2/10.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page27/E2/11.jpg' },
      ],


    ],
  },
  3: { // Exercise num
    unit: 'Review 1',
    id: 'SB4-PV-P27-E3',
    audio: '',
    video: '',
    maxLength: 1,
    textAlign: 'center',
    padding: 0,
    component: D1,
    exerciseKey: 'img/FriendsPlus/Page27/E3/Key/answerKey.png',
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page27/E3/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page27/E3/2.jpg' },
        { url: 'img/FriendsPlus/Page27/E3/3.jpg', input: true, answer: "u" },
        { url: 'img/FriendsPlus/Page27/E3/4.jpg' },
        { url: 'img/FriendsPlus/Page27/E3/5.jpg', input: true, answer: "e" },
        { url: 'img/FriendsPlus/Page27/E3/6.jpg' },
        { url: 'img/FriendsPlus/Page27/E3/7.jpg', input: true, answer: "o" },
        { url: 'img/FriendsPlus/Page27/E3/8.jpg' },
        { url: 'img/FriendsPlus/Page27/E3/9.jpg', input: true, answer: "e" },
        { url: 'img/FriendsPlus/Page27/E3/10.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page27/E3/11.jpg' },
        { url: 'img/FriendsPlus/Page27/E3/12.jpg', input: true, answer: "a" },
        { url: 'img/FriendsPlus/Page27/E3/13.jpg' },
        { url: 'img/FriendsPlus/Page27/E3/14.jpg', input: true, answer: "e" },
        { url: 'img/FriendsPlus/Page27/E3/15.jpg' },
        { url: 'img/FriendsPlus/Page27/E3/16.jpg', input: true, answer: "o" },
        { url: 'img/FriendsPlus/Page27/E3/17.jpg' },
        { url: 'img/FriendsPlus/Page27/E3/18.jpg', input: true, answer: "e" },
        { url: 'img/FriendsPlus/Page27/E3/19.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page27/E3/20.jpg' },
      ],
    ],
  },


}

export default json;