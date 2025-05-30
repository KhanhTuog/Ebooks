

import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {

  1: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P77-E1',
    recorder: true,
    audio: 'img/FriendsPlus/Page77/Audio/audio-e1-p77.mp3',
    video: '',
    component: UI,
    titleQuestion: [{ num: '1', title: 'Listen, point, and repeat.  <headphone name="93" src="img/FriendsPlus/Page77/Audio/tieude-e1-p77.mp3"></headphone>  ' }],
    exerciseKey: 'img/FriendsPlus/Page71/E2/Key/answerKey.png',
    questionImage: [ // Row      
      [
        // Column1
        { url: 'img/FriendsPlus/Page77/E1/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page77/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page77/Audio/dream.mp3' },
        { url: 'img/FriendsPlus/Page77/E1/3.jpg', audioUrl: 'img/FriendsPlus/Page77/Audio/ice cream.mp3' },
        { url: 'img/FriendsPlus/Page77/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page77/Audio/queen.mp3' },
        { url: 'img/FriendsPlus/Page77/E1/5.jpg', audioUrl: 'img/FriendsPlus/Page77/Audio/green.mp3' },
        { url: 'img/FriendsPlus/Page77/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page77/Audio/jelly.mp3' },
        { url: 'img/FriendsPlus/Page77/E1/7.jpg', audioUrl: 'img/FriendsPlus/Page77/Audio/happy.mp3' },
      ],
    ],
  },
  2: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P77-E2',
    recorder: true,
    audio: 'img/FriendsPlus/Page77/Audio/audio-e2-p77.mp3',
    video: '',
    component: UI,
    titleQuestion: [{ num: '2', title: 'Listen and chant.  <headphone name="94" src="img/FriendsPlus/Page77/Audio/tieude-e2-p77.mp3"></headphone>  ' }],
    exerciseKey: 'img/FriendsPlus/Page71/E2/Key/answerKey.png',
    questionImage: [ // Row      
      [
        // Column1
        { url: 'img/FriendsPlus/Page77/E2/1.jpg' },
      ],
    ],
  },

  3: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P77-E3',
    audio: '',
    video: '',
    recorder: false,
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page77/E3/Key/answerKey.png',
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
          'In my ',//1
          'I am a queen, queen, queen.',//1

          'I eat green jelly',
          'and ice cream, cream, cream.',

          'I’m very happy,',
          'in my dream, dream, dream.',
        ],
        answers: ['1-10', '1-8', '1-6', '2-4', '2-6', '3-2', '3-4', '3-6', '3-8', '4-4', '5-8', '5-6', '5-4'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1300px;position:relative'>
            <img src="img/FriendsPlus/Page77/E3/1.jpg" style="width: 100%" />
            <div style='position: absolute;top: 33px;left:15% ; text-align: center;'>
              <div style='letter-spacing: 0px;'>
                  <div>
                    <input id='0' type='Circle' /> 
                    <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"> dream</span> 
                  </div>
                   <div> <input id='1' type='Circle' />  </div>
                   <br>
                   <div> <input id='2' type='Circle' />  </div>
                   <div> <input id='3' type='Circle' />  </div>
                   <br>
                   
                   <div> <input id='4' type='Circle' />  </div>
                   <div> <input id='5' type='Circle' />  </div>
              </div>
            </div>
          
        </div>
      `,
    },
  },
  4: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P77-E4',
    audio: '',
    video: '',
    component: T6,
    checkDuplicated:true,
    stylesTextInput: { backgroundColor: 'transparent', border: 'none', padding: 0 },
    exerciseKey: 'img/FriendsPlus/Page77/E4/Key/answerKey.png',
    inputSize: 130,
    // titleImage: "img/FriendsPlus/Page60/E1/1.jpg",
    // titleQuestion: [{ num: '1', title: 'Read the sentences and number the picture.', color: "#5B5A5D" }],
    questionImage: [],
    questions: [
      {
        title: `
        <div style=" position: relative; ">
          <div> <img src='img/FriendsPlus/Page77/E4/1.jpg' /> </div>
          <div style=" position: absolute; top: 221px; left: 70px; "><input id='0' /></div>
          <div style=" position: absolute; top: 266px; left: 70px; "><input id='1' /></div>
          <div style=" position: absolute; top: 311px; left: 72px; "><input id='2' /></div>
          <div style=" position: absolute; top: 266px; left: 278px; "><input id='3' /></div>
          <div style=" position: absolute; top: 311px; left: 278px; "><input id='4' /></div>
          <div style=" position: absolute; top: 221px; left: 485px; "><input id='5' /></div>
          <div style=" position: absolute; top: 266px; left: 486px; "><input id='6' /></div>
          <div style=" position: absolute; top: 311px; left: 486px; "><input id='7' /></div>
          
        </div>
        `,
        answer: [
          "teacher/eat/please",
          "teacher/eat/please",
          "teacher/eat/please",
          "week/sheep",
          "week/sheep",
          "family/funny/twenty",
          "family/funny/twenty",
          "family/funny/twenty",
        ],
      },
    ],
  },
  5: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P77-E5',
    recorder: true,
    audio: '',
    video: '',
    component: UI,
    exerciseKey: 'img/FriendsPlus/Page71/E2/Key/answerKey.png',
    questionImage: [ // Row      
      [
        // Column1
        { url: 'img/FriendsPlus/Page77/E5/1.jpg' },
      ]
    ],
  },




}
export default json;
