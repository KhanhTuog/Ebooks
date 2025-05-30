

import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';

const json = {

  1: {
    unit: 'Unit 12',
    id: 'SB4-U12-P89-E1',
    audio: 'img/FriendsPlus/Page89/Audio/audio-e1-p89.mp3',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        // Column1
        { url: 'img/FriendsPlus/Page89/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page89/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page89/Audio/tieude-e1-p89.mp3' },
        { url: 'img/FriendsPlus/Page89/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page89/E1/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page89/E1/5.jpg', audioUrl: 'img/FriendsPlus/Page89/Audio/snow.mp3' },
        { url: 'img/FriendsPlus/Page89/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page89/Audio/elbow.mp3' },
        { url: 'img/FriendsPlus/Page89/E1/7.jpg', audioUrl: 'img/FriendsPlus/Page89/Audio/coat.mp3' },
        { url: 'img/FriendsPlus/Page89/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page89/Audio/soap.mp3' },
        { url: 'img/FriendsPlus/Page89/E1/9.jpg', audioUrl: 'img/FriendsPlus/Page89/Audio/nose.mp3' },
        { url: 'img/FriendsPlus/Page89/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page89/Audio/stone.mp3' },
      ],

    ]
  },


  2: {
    unit: 'Unit 12',
    id: 'SB4-U12-P89-E2',
    audio: 'img/FriendsPlus/Page89/Audio/audio-e2-p89.mp3',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        // Column1
        { url: 'img/FriendsPlus/Page89/E2/1.jpg' },
        { url: 'img/FriendsPlus/Page89/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page89/Audio/tieude-e2-p89.mp3' },
        { url: 'img/FriendsPlus/Page89/E2/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page89/E2/4.jpg' },
      ]
    ]
  },
  3: { // Exercise num
    unit: 'Unit 12',
    id: 'SB4-U12-P89-E3',
    audio: '',
    video: '',
    recorder: false,
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page89/E3/Key/answerKey.png',
    titleQuestion: [{ num: '3', title: 'Read the chant again. Circle the words with ow, oa, and o_e' }],
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
          'I put on my',//1
          'And go out in the snow.',//1

          'There is snow on my nose, ',
          'And on my elbow.',
        ],
        answers: ['1-10', '2-4', '2-10', '3-6'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1000px;position:relative'>
            <img src="img/FriendsPlus/Page89/E3/1.jpg" style="width: 100%" />
            <div style='position: absolute;top: 55px;left:61% ; text-align: center;'>
              <div style='letter-spacing: 0px;'>
                  <div>
                    <input id='0' type='Circle' /> 
                    <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"> coat,</span> 
                  </div>
                   <div> <input id='1' type='Circle' />  </div>
                   <div> <input id='2' type='Circle' />  </div>
                   <div> <input id='3' type='Circle' />  </div>
              </div>
            </div>
          
        </div>
      `,
    },
  },
  4: { // Exercise num
    unit: 'Unit 12',
    id: 'SB4-U12-P89-E4',
    audio: '',
    video: '',
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page89/E4/Key/answerKey.png',
    titleQuestion: [{ num: '4', title: 'Circle the odd-one-out.', color: "#5B5A5D" }],
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
          'soap rope coat boat',

          'home bone snow stone',
          'boat coat goat bone',



        ],
        answers: ['1-4', '0-2', '2-6'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1000px;'>
              <div style='display:flex; justify-content:space-between'>
                  <div style='word-spacing: 40px;'>
                       
                        1 snow <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"> soap</span> show slow
                       <div>  3   <input id='0' type='Circle' />  </div>
                  </div>
                  <div style='word-spacing: 40px;'> 
                        <div>  2  <input id='1' type='Circle' /> </div>
                        <div>  4  <input id='2' type='Circle' /> </div>
                  </div>
                  
              </div>
          
        </div>
      `,
    },
  },
  5: { // Exercise num
    unit: 'Unit 12',
    id: 'SB4-U12-P89-E5',
    audio: '',
    video: '',
    component: T6,
    checkDuplicated:true,
    stylesTextInput: { backgroundColor: 'transparent', border: 'none', padding: 0 },
    exerciseKey: 'img/FriendsPlus/Page89/E5/Key/answerKey.png',
    inputSize: 160,
    questionImage: [],
    questions: [
      {
        title: `
        <div style=" position: relative; ">
          <div> <img src='img/FriendsPlus/Page89/E5/1.jpg' /> </div>
          <div style=" position: absolute; top: 256px; left: 38px; "><input id='0' /></div>
          <div style=" position: absolute; top: 301px; left: 39px; "><input id='1' /></div>
          <div style=" position: absolute; top: 211px; left: 260px; "><input id='2' /></div>
          <div style=" position: absolute; top: 256px; left: 260px; "><input id='3' /></div>
          <div style=" position: absolute; top: 301px; left: 261px; "><input id='4' /></div>
          <div style=" position: absolute; top: 211px; left: 486px; "><input id='5' /></div>
          <div style=" position: absolute; top: 256px; left: 486px; "><input id='6' /></div>
          <div style=" position: absolute; top: 301px; left: 486px; "><input id='7' /></div>
        </div>
        `,
        answer: [
          "slow/snow",
          "slow/snow",

          "boat/coat/goat",
          "boat/coat/goat",
          "boat/coat/goat ",

          "home/those/bone",
          "home/those/bone",
          "home/those/bone",
        ],
      },
    ],
  },
  6: {
    unit: 'Unit 12',
    id: 'SB4-U12-P89-E6',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        // Column1
        { url: 'img/FriendsPlus/Page89/E6/1.jpg' },

      ]
    ]
  },






}
export default json;
