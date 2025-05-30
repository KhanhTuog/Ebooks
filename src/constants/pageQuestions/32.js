import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {
  1: {
    unit: 'Unit 4 ',
    id: 'SB4-U4-P32-E1',
    audio: '',
    video: '',
    component: UI,
    // exerciseKey: '',
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        { url: 'img/FriendsPlus/Page32/E1/1.jpg' },
      ]
    ],
  },
  2: { // Exercise num
    unit: 'Unit 4 ',
    id: 'SB4-U4-P32-E2',
    audio: '',
    video: '',
    component: T6,
    hideBtnFooter: true,
    // exerciseKey: 'img/FriendsPlus/Page43/E1/Key/answerKey.png',
    // titleImage: "img/FriendsPlus/Page10/E2/1.jpg",
    inputSize: 700,
    titleQuestion: [{ num: '2', title: 'Write about A or B.' }],
    questionImage: [],
    questions: [
      {
        title:
          `
      <div style='color:rgb(82,197,235)'>A: The boy is eating some ice cream. He isn't ...</div>
      <div>#</div>
      <div>#</div>
      <div>#</div>
      <div>#</div>
      <div>#</div>
      <div>#</div>
      `,
        answer: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        // type: 'longAnwser'
      },
    ]
  },
  3: {
    unit: 'Unit 4 ',
    id: 'SB4-U4-P32-E3',
    audio: 'img/FriendsPlus/Page32/Audio/audio-e3-p32.mp3',
    video: '',
    component: UI,
    // exerciseKey: '',
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        { url: 'img/FriendsPlus/Page32/E3/1.jpg' },
        { url: 'img/FriendsPlus/Page32/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page32/Audio/tieude-e3-p32.mp3' },
        { url: 'img/FriendsPlus/Page32/E3/3.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page32/E3/4.jpg' },
      ]
    ],
  },
  4: {
    unit: 'Unit 4 ',
    id: 'SB4-U4-P32-E4',
    audio: '',
    video: '',
    component: UI,
    // exerciseKey: '',
    recorder: true,
    questionImage: [ // Row
      [
        { url: 'img/FriendsPlus/Page32/E4/1.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page32/E3/4.jpg' },
      ]
    ],
  },


}

export default json;