

import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {

  1: { // Exercise num
    unit: 'Unit 11',
    id: 'SB4-U11-P85-E1',
    audio: 'img/FriendsPlus/Page85/Audio/audio-e1-p85.mp3',
    video: '',
    component: T6,
    stylesTextInput: { backgroundColor: 'transparent', border: 'none', padding: 0 },
    exerciseKey: 'img/FriendsPlus/Page85/E1/Key/answerKey.png',
    inputSize: 20,
    maxLength: 1,
    textAlign: 'center',
    // titleImage: "img/FriendsPlus/Page60/E1/1.jpg",
    titleQuestion: [{ num: '1', title: 'Listen and write the numbers.  <headphone name="106" src="img/FriendsPlus/Page85/Audio/tieude-e1-p85.mp3"></headphone>  ' }],
    questionImage: [],
    questions: [
      {
        title: `
        <div style=" position: relative; ">
          <div> <img src='img/FriendsPlus/Page85/E1/1.jpg' /> </div>
          <div style=" position: absolute; top: 137px; left: 227px; "><input id='0' /></div>
          <div style=" position: absolute; top: 136px; left: 541px; "><input id='1' /></div>
          <div style=" position: absolute; top: 309px; left: 382px; "><input id='2' /></div>
          <div style=" position: absolute; top: 309px; left: 695px; "><input id='3' /></div>

        </div>
        `,
        answer: [
          "3",
          "4",
          "5",
          "2",
        ],
      },
    ],
  },


  2: {
    unit: 'Unit 11',
    id: 'SB4-U11-P85-E2',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page85/E2/2.jpg' },
      ]
    ]
  },
  3: { // Exercise num
    unit: 'Unit 11',
    id: 'SB4-U11-P85-E3',
    audio: '',
    video: '',
    component: T6,
    stylesTextInput: { backgroundColor: 'transparent', border: 'none', padding: 0 },
    exerciseKey: 'img/FriendsPlus/Page85/E1/Key/answerKey.png',
    inputSize: 875,
    hideBtnFooter: true,
    questionImage: [],
    questions: [
      {
        title: `
        <div style=" position: relative; ">
          <div> <img src='img/FriendsPlus/Page85/E3/3.jpg' /> </div>
          <div style=" position: absolute; top: 241px; left: 34px; "><input id='0' /></div>
          <div style=" position: absolute; top: 280px; left: 34px; "><input id='1' /></div>
          <div style=" position: absolute; top: 320px; left: 34px; "><input id='2' /></div>
          <div style=" position: absolute; top: 408px; left: 33px; "><input id='3' /></div>
          <div style=" position: absolute; top: 448px; left: 33px; "><input id='4' /></div>
          <div style=" position: absolute; top: 487px; left: 34px; "><input id='5' /></div>


        </div>
        `,
        answer: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  },




}
export default json;
