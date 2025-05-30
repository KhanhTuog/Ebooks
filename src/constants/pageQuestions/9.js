import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import DesignUnderLine from '../../components/ExcerciseTypes/Design/DesignUnderLine';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';


const json = {
  1: { // Exercise num
    unit: 'Unit 1',
    id: 'SB4-U1-P9-E1',
    audio: 'img/FriendsPlus/Page8/Audio/audio-e2-p8.mp3',
    recorder: true,
    video: 'Videos/e2.p8.mp4',
    component: UI,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page9/E1/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page8/E2/4.jpg', audioUrl: 'img/FriendsPlus/Page8/Audio/hinh1-e2-p8.mp3' },
        { url: 'img/FriendsPlus/Page8/E2/5.jpg', audioUrl: 'img/FriendsPlus/Page8/Audio/hinh2-e2-p8.mp3' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page8/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page8/Audio/hinh3-e2-p8.mp3' },
        { url: 'img/FriendsPlus/Page8/E2/7.jpg', audioUrl: 'img/FriendsPlus/Page8/Audio/hinh4-e2-p8.mp3' },
      ],

    ],
  },
  2: { // Exercise num
    unit: 'Unit 1',
    id: 'SB4-U1-P9-E2',
    audio: 'img/FriendsPlus/Page9/Audio/audio-e2-p9.mp3',
    recorder: true,
    video: '',
    component: UI,
    questionImage: [ // Row
      [
        { url: 'img/FriendsPlus/Page9/E2/1.jpg' },
        { url: 'img/FriendsPlus/Page9/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page9/Audio/tieude-e2-p9.mp3' },
        { url: 'img/FriendsPlus/Page9/E2/3.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page9/E2/4.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page9/E2/5.jpg' },
        { url: 'img/FriendsPlus/Page9/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page9/Audio/cau1.mp3' },
        { url: 'img/FriendsPlus/Page9/E2/7.jpg', audioUrl: 'img/FriendsPlus/Page9/Audio/cau2.mp3' },
        { url: 'img/FriendsPlus/Page9/E2/8.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page9/E2/9.jpg' },
        { url: 'img/FriendsPlus/Page9/E2/10.jpg', audioUrl: 'img/FriendsPlus/Page9/Audio/cau3.mp3' },
        { url: 'img/FriendsPlus/Page9/E2/11.jpg', audioUrl: 'img/FriendsPlus/Page9/Audio/cau4.mp3' },
        { url: 'img/FriendsPlus/Page9/E2/12.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page9/E2/13.jpg' },
        { url: 'img/FriendsPlus/Page9/E2/14.jpg', audioUrl: 'img/FriendsPlus/Page9/Audio/cau5.mp3' },
        { url: 'img/FriendsPlus/Page9/E2/15.jpg', audioUrl: 'img/FriendsPlus/Page9/Audio/cau6.mp3' },
        { url: 'img/FriendsPlus/Page9/E2/16.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page9/E2/17.jpg' },
      ],
    ],
  },

  3: { // Exercise num
    unit: 'Unit 1',
    id: 'SB4-U1-P9-E3',
    audio: '',
    video: '',
    component: DesignUnderLine,
    totalInput: 3,
    exerciseKey: 'img/FriendsPlus/Page9/E3/Key/answerKey.png',
    titleImage: '',
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        // Column 1
        { url: 'img/FriendsPlus/Page9/E3/1.jpg' },
      ],
      [
        // Column 2
        { url: 'img/FriendsPlus/Page9/E3/2.jpg' },
        { url: 'img/FriendsPlus/Page9/E3/3.jpg', input: 1, isCorrect: true },
        { url: 'img/FriendsPlus/Page9/E3/4.jpg' },
      ],
      [
        // Column 2
        { url: 'img/FriendsPlus/Page9/E3/5.jpg' },
        { url: 'img/FriendsPlus/Page9/E3/6.jpg', input: 1 },
        { url: 'img/FriendsPlus/Page9/E3/7.jpg' },
      ],
      [
        // Column 1
        { url: 'img/FriendsPlus/Page9/E3/8.jpg' },
      ],
      [
        // Column 1
        { url: 'img/FriendsPlus/Page9/E3/9.jpg' },
        { url: 'img/FriendsPlus/Page9/E3/10.jpg', input: 2 },
        { url: 'img/FriendsPlus/Page9/E3/11.jpg' },
        { url: 'img/FriendsPlus/Page9/E3/12.jpg', input: 3, isCorrect: true },
        { url: 'img/FriendsPlus/Page9/E3/13.jpg' },
      ],
      [
        // Column 1
        { url: 'img/FriendsPlus/Page9/E3/14.jpg' },
        { url: 'img/FriendsPlus/Page9/E3/15.jpg', input: 2, isCorrect: true },
        { url: 'img/FriendsPlus/Page9/E3/16.jpg' },
        { url: 'img/FriendsPlus/Page9/E3/17.jpg', input: 3 },
        { url: 'img/FriendsPlus/Page9/E3/18.jpg' },
      ],

    ],
  },

  4: { // Exercise num
    unit: 'Unit 1',
    id: 'SB4-U1-P9-E4',
    audio: '',
    video: '',
    component: T6,
    exerciseKey: 'img/FriendsPlus/Page9/E4/Key/answerKey.png',
    titleImage: "img/FriendsPlus/Page9/E4/1.jpg",
    inputSize: 130,
    // titleQuestion: [{ num: '1', title: '' }],
    questionImage: [],
    questions: [
      {
        title: `
          <div style='line-height: 50px'>
              <div><b> 1 </b>  Tom is nine.<u style='color: rgb(45 189 249);'><i>He's</i></u>  from the U.S.A. </div>
              <div><b> 2 </b> Jenny is eight. # from Australia</div>
              <div><b> 3 </b> Cho amd I are friends # from Viet Nam. </div>
              <div><b> 4 </b> Jaidee and Tai are brothers. # from Thailand</div>
          </div>
        `,
        answer: [
          "She's",
          "We're",
          "They're"
        ],
        // type: 'longAnwser'
      },
    ]
  },

  5: { // Exercise num
    unit: 'Unit 1',
    id: 'SB4-U1-P9-E5',
    audio: '',
    video: '',
    recorder: true,
    component: UI,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page9/E5/1.jpg' },
      ]
    ],
  },

}

export default json;