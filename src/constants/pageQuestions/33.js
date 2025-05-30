import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';


const json = {
  1: {
    unit: 'Unit 4 ',
    id: 'SB4-U4-P33-E1',
    audio: 'img/FriendsPlus/Page33/Audio/audio-e1-p33.mp3',
    video: '',
    component: UI,
    // exerciseKey: '',
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page33/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page33/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page33/Audio/tieude-e1-p33.mp3' },
        { url: 'img/FriendsPlus/Page33/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page33/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page33/Audio/all.mp3' },
        { url: 'img/FriendsPlus/Page33/E1/5.jpg', audioUrl: 'img/FriendsPlus/Page33/Audio/ball.mp3' },
        { url: 'img/FriendsPlus/Page33/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page33/Audio/mall.mp3' },
        { url: 'img/FriendsPlus/Page33/E1/7.jpg', audioUrl: 'img/FriendsPlus/Page33/Audio/wall.mp3' },
        { url: 'img/FriendsPlus/Page33/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page33/Audio/tall.mp3' },
        { url: 'img/FriendsPlus/Page33/E1/9.jpg', audioUrl: 'img/FriendsPlus/Page33/Audio/small.mp3' },
      ],

    ],
  },
  2: {
    unit: 'Unit 4 ',
    id: 'SB4-U4-P33-E2',
    audio: 'img/FriendsPlus/Page33/Audio/audio-e2-p33.mp3',
    video: '',
    component: UI,
    // exerciseKey: '',
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        { url: 'img/FriendsPlus/Page33/E2/1.jpg' },
        { url: 'img/FriendsPlus/Page33/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page33/Audio/tieude-e2-p33.mp3' },
        { url: 'img/FriendsPlus/Page33/E2/3.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page33/E2/4.jpg' },
      ]
    ],
  },
  3: { // Exercise num
    unit: 'Unit 4 ',
    id: 'SB4-U4-P33-E3',
    audio: '',
    video: '',
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page33/E3/Key/answerKey.png',
    titleQuestion: [{ num: '3', title: 'Read the chant again. Circle the words with all.', color: "#5B5A5D" }],
    question: {
      Write: {
        inputStyle: {},
        answers: [],
        initialValue: [],
      },
      Circle: {
        // initialWordStyle: { margin: '5px 0', border: 'solid 2px', borderColor: 'black', borderRadius: '50%', padding: '0 5px' },
        initialWordStyle: { margin: '5px 0', border: 'none', borderColor: 'transparent', borderRadius: '50%' },
        selectWordStyle: { border: 'solid 2px', borderColor: '#00a8ec', margin: '-2px' },
        // limitSelect: 1,
        listWords: [
          'A mall, mall, mall.',//1
          'Some people are tall,',//1
          'Some are small, small, small.',//1
          'I want a ball',//2
          'a ball, ball, ball.',//2
          'I don\'t know which to buy,',//2
          'I like them all, all, all.',//2
        ],
        answers: ['0-2', '0-4', '0-6', '1-6', '2-4', '2-6', '2-8', '3-6', '4-2', '4-4', '4-6', '6-6', '6-8', '6-10'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1200px;  position: relative;text-align: center;'>
            <img src="img/FriendsPlus/Page33/E3/2.jpg" style="width: 100%" />
            <div style='position: absolute; top: 12%;left: 56%;'>
              <div>  I'm in a   <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;">mall</span></div>
              <div>  <input id='0' type='Circle' /></div>
              <div>  <input id='1' type='Circle' /></div>
              <div>  <input id='2' type='Circle' /></div>
              <div>  <input id='3' type='Circle' /></div>
              <div>  <input id='4' type='Circle' /></div>
              <div>  <input id='5' type='Circle' /></div>
              <div>  <input id='6' type='Circle' /></div>
            </div>
        </div>
      `,
    },
  },
  4: { // Exercise num
    unit: 'Unit 4 ',
    id: 'SB4-U4-P33-E4',
    audio: '',
    video: '',
    exerciseKey: 'img/FriendsPlus/Page33/E4/Key/answerKey.png',
    component: D1,
    question: [
    ],
    questionImage: [
      [
        // Column1
        { url: 'img/FriendsPlus/Page33/E4/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page33/E4/2.jpg' },
        { url: 'img/FriendsPlus/Page33/E4/3.jpg', input: true, answer: "tall" },
        { url: 'img/FriendsPlus/Page33/E4/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page33/E4/5.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page33/E4/6.jpg' },
        { url: 'img/FriendsPlus/Page33/E4/7.jpg', input: true, answer: "small" },
        { url: 'img/FriendsPlus/Page33/E4/8.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page33/E4/9.jpg' },
      ],
      [
        // Column6
        { url: 'img/FriendsPlus/Page33/E4/10.jpg' },
        { url: 'img/FriendsPlus/Page33/E4/11.jpg', input: true, answer: "mall" },
        { url: 'img/FriendsPlus/Page33/E4/12.jpg' },
      ],
      [
        // Column7
        { url: 'img/FriendsPlus/Page33/E4/13.jpg' },
      ],
      [
        // Column8
        { url: 'img/FriendsPlus/Page33/E4/14.jpg' },
        { url: 'img/FriendsPlus/Page33/E4/15.jpg', input: true, answer: "ball" },
        { url: 'img/FriendsPlus/Page33/E4/16.jpg' },
      ],
      [
        // Column9
        { url: 'img/FriendsPlus/Page33/E4/17.jpg' },
      ],


    ]
  },
  5: {
    unit: 'Unit 4 ',
    id: 'SB4-U4-P33-E5',
    audio: '',
    video: '',
    component: UI,
    // exerciseKey: '',
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [

        { url: 'img/FriendsPlus/Page33/E5/1.jpg' },
      ]
    ],
  },

}

export default json;