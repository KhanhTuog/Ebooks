

import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';

const json = {


  1: { // Exercise num
    unit: 'Unit 11',
    id: 'SB4-U11-P81-E1',
    recorder: true,
    audio: 'img/FriendsPlus/Page80/Audio/audio-e2-p80.mp3',
    video: 'img/FriendsPlus/Page80/videos/e2.p80.mp4',
    titleQuestion: [{ num: '1', title: 'Listen to the story and repeat. Act.', color: "#5B5A5D" }],
    component: UI,
    exerciseKey: '',
    questionImage: [ // Row      

      [
        // Column2
        { url: 'img/FriendsPlus/Page80/E2/4.jpg', audioUrl: 'img/FriendsPlus/Page80/Audio/hinh1-e2-p80.mp3' },
        { url: 'img/FriendsPlus/Page80/E2/5.jpg', audioUrl: 'img/FriendsPlus/Page80/Audio/hinh2-e2-p80.mp3' },


      ],
      [
        { url: 'img/FriendsPlus/Page80/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page80/Audio/hinh3-e2-p80.mp3' },
        { url: 'img/FriendsPlus/Page80/E2/7.jpg', audioUrl: 'img/FriendsPlus/Page80/Audio/hinh4-e2-p80.mp3' },
      ]
    ],
  },

  2: { // Exercise num
    unit: 'Unit 11',
    id: 'SB4-U11-P81-E2',
    recorder: true,
    audio: 'img/FriendsPlus/Page81/Audio/audio-e2-p81.mp3',
    video: '',
    component: UI,
    exerciseKey: '',
    questionImage: [ // Row      
      [
        // Column1
        { url: 'img/FriendsPlus/Page81/E2/1.jpg' },
        { url: 'img/FriendsPlus/Page81/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page81/Audio/tieude-e2-p81.mp3' },
        { url: 'img/FriendsPlus/Page81/E2/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page81/E2/4.jpg' },
      ],
    ],
  },
  3: { // Exercise num
    unit: 'Unit 11',
    id: 'SB4-U11-P81-E3',
    audio: '',
    video: '',
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page81/E3/Key/answerKey.png',
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
          'was / were',
          'was / were',
          'was / were',
        ],
        answers: ['0-4', '1-0', '2-4'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1100px;position:relative'>
              <div style='letter-spacing: 0px;'>
                  <div>
                       1 &nbsp;  There
                     <b> <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"> was</span> / were </b>
                      a park in our town one hundred years ago
                  </div>
                   <div>  2  &nbsp; There <b>  <input id='0' type='Circle' /> </b> trains one hundred years ago. </div>
                   <div>  3  &nbsp; There <b>  <input id='1' type='Circle' /> </b> a hotel in the town ten years ago. </div>
                   <div>  4  &nbsp; There <b>  <input id='2' type='Circle' /> </b> lots of buses twenty years ago. </div>
                  
              </div>
          
        </div>
      `,
    },
  },

  4: { // Exercise num
    unit: 'Unit 11',
    id: 'SB4-U11-P81-E4',
    audio: '',
    video: '',
    component: T6,
    stylesTextInput: { backgroundColor: 'transparent', border: 'none', padding: 0 },
    exerciseKey: 'img/FriendsPlus/Page81/E4/Key/answerKey.png',
    inputSize: 110,
    // titleImage: "img/FriendsPlus/Page60/E1/1.jpg",
    // titleQuestion: [{ num: '1', title: 'Read the sentences and number the picture.', color: "#5B5A5D" }], weren’t 3 weren’t 4 was 5 were 6 wasn’t

    questionImage: [],
    questions: [
      {
        title: `
        <div style=" position: relative; ">
          <div> <img src='img/FriendsPlus/Page81/E4/1.jpg' /> </div>
          <div style=" position: absolute; top: 299px; left: 113px; "><input id='0' /></div>
          <div style=" position: absolute; top: 336px; left: 113px; "><input id='1' /></div>
          <div style=" position: absolute; top: 372px; left: 112px; "><input id='2' /></div>
          <div style=" position: absolute; top: 409px; left: 112px; "><input id='3' /></div>
          <div style=" position: absolute; top: 445px; left: 112px; "><input id='4' /></div>

        </div>
        `,
        answer: [
          "weren't",
          "weren't",
          "was",
          "were",
          "wasn't",
        ],
      },
    ],
  },
  5: {
    unit: 'Unit 11',
    id: 'SB4-U11-P81-E5',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page81/E5/1.jpg' },
      ]
    ]
  },



}
export default json;
