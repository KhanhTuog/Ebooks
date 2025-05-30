import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';


const json = {
  1: { // Exercise num
    unit: 'Unit 3',
    id: 'SB4-U3-P22-E1',
    audio: '',
    video: '',
    recorder: true,
    component: UI,
    questionImage: [ // Row

      [
        // Column1
        { url: 'img/FriendsPlus/Page22/E1/1.jpg' },
      ],
    ],
  },
  2: { // Exercise num
    unit: 'Unit 3',
    id: 'SB4-U3-P22-E2',
    audio: '',
    video: '',
    component: T6,
    hideBtnFooter: true,
    // exerciseKey: 'img/FriendsPlus/Page43/E1/Key/answerKey.png',
    // titleImage: "img/FriendsPlus/Page10/E2/1.jpg",
    inputSize: 700,
    titleQuestion: [{ num: '2', title: 'Close your book and write three questions.' }],
    questionImage: [],
    questions: [
      {
        title:
          `
      <div style='color:rgb(82,197,235)'>Can you open the window, please?</div>
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

  3: { // Exercise num
    unit: 'Unit 3',
    id: 'SB4-U3-P22-E3',
    audio: 'img/FriendsPlus/Page22/Audio/audio-e3-p22.mp3',
    video: '',
    recorder: true,
    component: UI,
    questionImage: [ // Row

      [
        // Column1
        { url: 'img/FriendsPlus/Page22/E3/1.jpg' },
        { url: 'img/FriendsPlus/Page22/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page22/Audio/tieude-e3-p22.mp3' },
        { url: 'img/FriendsPlus/Page22/E3/3.jpg' },
      ],
      [
        // Column1
        { url: 'img/FriendsPlus/Page22/E3/4.jpg' },
      ],
    ],
  },
  4: { // Exercise num
    unit: 'Unit 3',
    id: 'SB4-U3-P22-E4',
    audio: '',
    video: '',
    recorder: true,
    component: UI,
    questionImage: [ // Row

      [
        // Column1
        { url: 'img/FriendsPlus/Page22/E4/1.jpg' },
      ],
      [
        // Column1
        { url: 'img/FriendsPlus/Page22/E3/4.jpg' },
      ],
    ],
  },



}

export default json;