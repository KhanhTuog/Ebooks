

import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';

const json = {

  1: {
    unit: 'Unit 11',
    id: 'SB4-U11-P83-E1',
    audio: 'img/FriendsPlus/Page83/Audio/audio-e1-p83.mp3',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        // Column1
        { url: 'img/FriendsPlus/Page83/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page83/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page83/Audio/tieude-e1-p83.mp3' },
        { url: 'img/FriendsPlus/Page83/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page83/E1/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page83/E1/5.jpg', audioUrl: 'img/FriendsPlus/Page83/Audio/night.mp3' },
        { url: 'img/FriendsPlus/Page83/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page83/Audio/light.mp3' },
        { url: 'img/FriendsPlus/Page83/E1/7.jpg', audioUrl: 'img/FriendsPlus/Page83/Audio/sky.mp3' },
        { url: 'img/FriendsPlus/Page83/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page83/Audio/dry.mp3' },
        { url: 'img/FriendsPlus/Page83/E1/9.jpg', audioUrl: 'img/FriendsPlus/Page83/Audio/smile.mp3' },
        { url: 'img/FriendsPlus/Page83/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page83/Audio/shine.mp3' },
      ],

    ]
  },

  2: {
    unit: 'Unit 11',
    id: 'SB4-U11-P83-E2',
    audio: 'img/FriendsPlus/Page83/Audio/audio-e2-p83.mp3',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    titleQuestion: [{ num: '2', title: 'Listen and chant. <headphone name="103" src="img/FriendsPlus/Page83/Audio/tieude-e2-p83.mp3"></headphone>  ' }],
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page83/E2/1.jpg' },
      ]
    ]
  },
  3: { // Exercise num
    unit: 'Unit 11',
    id: 'SB4-U11-P83-E3',
    audio: '',
    video: '',
    recorder: false,
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page83/E3/Key/answerKey.png',
    titleQuestion: [{ num: '3', title: 'Read the chant again. Circle the words with ea, ee, and y', color: "#5B5A5D" }],
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
          'In the dry, ',//1
          'sky,',//1

          'There’s a light so white.',
          'It makes me smile,',
          'As it shines all night.',
        ],
        answers: ['0-4', '1-0', '2-4', '2-8', '3-6', '4-4', '4-8'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1300px;position:relative'>
            <img src="img/FriendsPlus/Page83/E3/1.jpg" style="width: 100%" />
            <div style='position: absolute;top: 75px;left:69% ; text-align: center;'>
              <div style='letter-spacing: 0px;'>
                  <div>
                    <input id='0' type='Circle' /> 
                    <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"> night</span> 
                    <input id='1' type='Circle' /> 
                  </div>
                   <div> <input id='2' type='Circle' />  </div>
                   <div> <input id='3' type='Circle' />  </div>
                   <div> <input id='4' type='Circle' />  </div>
              </div>
            </div>
          
        </div>
      `,
    },
  },
  4: { // Exercise num
    unit: 'Unit 11',
    id: 'SB4-U11-P83-E4',
    audio: '',
    video: '',
    component: T6,
    stylesTextInput: { backgroundColor: 'transparent', border: 'none', padding: 0 },
    exerciseKey: 'img/FriendsPlus/Page83/E4/Key/answerKey.png',
    inputSize: 165,
    // titleImage: "img/FriendsPlus/Page60/E1/1.jpg",
    // titleQuestion: [{ num: '1', title: 'Read the sentences and number the picture.', color: "#5B5A5D" }],
    questionImage: [],
    questions: [
      {
        title: `
        <div style=" position: relative; ">
          <div> <img src='img/FriendsPlus/Page83/E4/1.jpg' /> </div>
          <div style=" position: absolute; top: 161px; left: 448px; "><input id='0' /></div>
          <div style=" position: absolute; top: 321px; left: 32px; "><input id='1' /></div>
          <div style=" position: absolute; top: 321px; left: 447px; "><input id='2' /></div>
          <div style=" position: absolute; top: 481px; left: 33px; "><input id='3' /></div>
          <div style=" position: absolute; top: 480px; left: 448px; "><input id='4' /></div>

        </div>
        `,
        answer: [
          "night",
          "dry",
          "smile",
          "light",
          "sky",
        ],
      },
    ],
  },
  5: {
    unit: 'Unit 11',
    id: 'SB4-U11-P83-E5',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page83/E5/1.jpg' },
      ]
    ]
  },




}
export default json;
