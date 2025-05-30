

import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';

const json = {

  1: {
    unit: 'Unit 12',
    id: 'SB4-U12-P87-E1',
    audio: 'img/FriendsPlus/Page86/Audio/audio-e2-p86.mp3',
    video: 'img/FriendsPlus/Page86/Videos/e2.86.mp4',
    component: UI,
    recorder: true,
    titleImage: '',
    titleQuestion: [{ num: '1', title: 'Listen to the story and repeat. Act.' }],
    question: [
    ],
    questionImage: [

      [
        // Column2
        { url: 'img/FriendsPlus/Page86/E2/4.jpg', audioUrl: 'img/FriendsPlus/Page86/Audio/hinh1-e2-p86.mp3' },
        { url: 'img/FriendsPlus/Page86/E2/5.jpg', audioUrl: 'img/FriendsPlus/Page86/Audio/hinh2-e2-p86.mp3' },


      ],
      [
        { url: 'img/FriendsPlus/Page86/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page86/Audio/hinh3-e2-p86.mp3' },
        { url: 'img/FriendsPlus/Page86/E2/7.jpg', audioUrl: 'img/FriendsPlus/Page86/Audio/hinh4-e2-p86.mp3' },
      ],
    ]
  },

  2: {
    unit: 'Unit 12',
    id: 'SB4-U12-P87-E1',
    audio: 'img/FriendsPlus/Page87/Audio/audio-e2-p87.mp3',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        // Column1
        { url: 'img/FriendsPlus/Page87/E2/1.jpg' },
        { url: 'img/FriendsPlus/Page87/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page87/Audio/tieude-e2-p87.mp3' },
        { url: 'img/FriendsPlus/Page87/E2/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page87/E2/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page87/E2/5.jpg' },
        { url: 'img/FriendsPlus/Page87/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page87/Audio/doan1.mp3' },
        { url: 'img/FriendsPlus/Page87/E2/7.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page87/E2/8.jpg' },
        { url: 'img/FriendsPlus/Page87/E2/9.jpg', audioUrl: 'img/FriendsPlus/Page87/Audio/doan2.mp3' },
        { url: 'img/FriendsPlus/Page87/E2/10.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page87/E2/11.jpg' },
      ],

    ]
  },
  3: { // Exercise num
    unit: 'Unit 12',
    id: 'SB4-U12-P87-E3',
    audio: '',
    video: '',
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page87/E3/Key/answerKey.png',
    titleQuestion: [{ num: '3', title: 'Read and circle.', color: "#5B5A5D" }],
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
        limitSelect: 1,
        listWords: [
          'was / wasn’t',
          'was / wasn’t',
          'were / weren’t',
          'were / weren’t',
        ],
        answers: ['0-0', '1-4', '2-0', '3-4'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1100px;position:relative'>
              <div style='letter-spacing: 0px;'>
                  <div>
                       1 &nbsp;  They
                     <b> <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"> were</span> / weren’t </b>
                     at the park on Sunday.
                  </div>
                   <div>  2  &nbsp; It <b>  <input id='0' type='Circle' /> </b> sunny. </div>
                   <div>  3  &nbsp; The ocean <b>  <input id='1' type='Circle' /> </b> hot. </div>
                   <div>  4  &nbsp; The children <b>  <input id='2' type='Circle' /> </b>  hungry. </div>
                   <div>  5  &nbsp; The sandwiches <b>  <input id='3' type='Circle' /> </b>  small. </div>
                  
              </div>
          
        </div>
      `,
    },
  },
  4: { // Exercise num
    unit: 'Unit 12',
    id: 'SB4-U12-P87-E4',
    audio: '',
    video: '',
    component: T6,
    stylesTextInput: { backgroundColor: 'transparent', border: 'none', padding: 0 },
    exerciseKey: 'img/FriendsPlus/Page87/E4/Key/answerKey.png',
    inputSize: 185,
    questionImage: [],
    questions: [
      {
        title: `
        <div style=" position: relative; ">
          <div> <img src='img/FriendsPlus/Page87/E4/1.jpg' /> </div>
          <div style=" position: absolute; top: 206px; left: 427px; "><input id='0' /></div>
          <div style=" position: absolute; top: 418px; left: 54px; "><input id='1' /></div>
          <div style=" position: absolute; top: 418px; left: 422px; "><input id='2' /></div>



        </div>
        `,
        answer: [
          "had ",
          "didn't have ",
          "had",
        ],
      },
    ],
  },
  5: {
    unit: 'Unit 12',
    id: 'SB4-U12-P87-E5',
    audio: '',
    video: '',
    component: UI,
    titleImage: '',
    recorder: true,
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page87/E5/1.jpg' },
      ]
    ]
  },



}
export default json;
