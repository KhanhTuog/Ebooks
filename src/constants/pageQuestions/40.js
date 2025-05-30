import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';
const json = {
  1: { // Exercise num
    unit: 'Unit 5',
    id: 'SB4-U5-P40-E1',
    audio: 'img/FriendsPlus/Page40/Audio/audio-e1-p40.mp3',
    video: '',
    component: UI,
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page40/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page40/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/tieude-e1-p40.mp3' },
        { url: 'img/FriendsPlus/Page40/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page40/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/hinh1-e1-p40.mp3' },
        { url: 'img/FriendsPlus/Page40/E1/5.jpg' },
        { url: 'img/FriendsPlus/Page40/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/hinh2-e1-p40.mp3' },
        { url: 'img/FriendsPlus/Page40/E1/7.jpg' },
        { url: 'img/FriendsPlus/Page40/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/hinh3-e1-p40.mp3' },
        { url: 'img/FriendsPlus/Page40/E1/9.jpg' },
        { url: 'img/FriendsPlus/Page40/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/hinh4-e1-p40.mp3' },
        { url: 'img/FriendsPlus/Page40/E1/11.jpg' },
        { url: 'img/FriendsPlus/Page40/E1/12.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/hinh5-e1-p40.mp3' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page40/E1/13.jpg' },
      ],


    ],
  },
  2: { // Exercise num
    unit: 'Unit 5',
    id: 'SB4-U5-P40-E2',
    audio: '',
    video: '',
    component: UI,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page40/E2/1.jpg' },

      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page40/E2/2.jpg' },
      ]
    ],
  },
  3: { // Exercise num
    unit: 'Unit 5',
    id: 'SB4-U5-P40-E3',
    audio: 'img/FriendsPlus/Page40/Audio/audio-e3-p40.mp3',
    video: '',
    component: UI,
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page40/E3/1.jpg' },
        { url: 'img/FriendsPlus/Page40/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/tieude-e3-p40.mp3' },
        { url: 'img/FriendsPlus/Page40/E3/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page40/E3/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page40/E3/5.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/hinh1-e3-p40.mp3' },
        { url: 'img/FriendsPlus/Page40/E3/6.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/hinh2-e3-p40.mp3' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page40/E3/7.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/hinh1-e3-p40.mp3' },
        { url: 'img/FriendsPlus/Page40/E3/8.jpg', audioUrl: 'img/FriendsPlus/Page40/Audio/hinh3-e3-p40.mp3' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page40/E3/9.jpg' },
      ],


    ],
  },
  4: { // Exercise num
    unit: 'Unit 5',
    id: 'SB4-U5-P40-E4',
    audio: '',
    video: '',
    component: T6,
    exerciseKey: 'img/FriendsPlus/Page40/E4/Key/answerKey.png',
    titleImage: "img/FriendsPlus/Page40/E4/1.jpg",
    inputSize: 130,
    // titleQuestion: [{ num: '2', title: 'Write about A or B.' }],
    questionImage: [],
    questions: [
      {
        title:
          `
          <div style='display: flex;'>
            <div style='margin-right:20px'>
                <div><b> 1 </b> The <u style='color:rgb(82,197,235)'>lion</u> is sleeping.</div>
                <div><b> 3 </b> The # is little.</div>
                <div><b> 5 </b> The # opens its mouth and roars.</div>
            </div>
            <div>
                <div><b> 2 </b> The # is angry.</div>
                <div><b> 4 </b> The # runs away.</div>
                <div><b> 6 </b> The # chew a hole in the net.</div>
            </div>
          </div>
      `,
        answer: [
          "mouse",
          "lion",
          "lion",
          "mouse",
          "mouse",
        ],
        // type: 'longAnwser'
      },
    ]
  },

}

export default json;
