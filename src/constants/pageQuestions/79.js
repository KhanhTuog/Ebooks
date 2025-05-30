

import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {

  1: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P79-E1',
    audio: 'img/FriendsPlus/Page79/Audio/audio-e1-p79.mp3',
    video: '',
    component: T6,
    stylesTextInput: { backgroundColor: 'transparent', border: 'none', padding: 0 },
    exerciseKey: 'img/FriendsPlus/Page79/E1/Key/answerKey.png',
    inputSize: 20,
    textAlign: 'center',
    maxLength: 1,
    // titleImage: "img/FriendsPlus/Page60/E1/1.jpg",
    titleQuestion: [{ num: '1', title: 'Listen and write the numbers. <headphone name="97" src="img/FriendsPlus/Page79/Audio/tieude-e1-p79.mp3"></headphone>', color: "#5B5A5D" }],
    questionImage: [],
    questions: [
      {
        title: `
        <div style=" position: relative; ">
          <div> <img src='img/FriendsPlus/Page79/E1/1.jpg' /> </div>
          <div style=" position: absolute; top: 145px; left: 210px; "><input id='0' /></div>
          <div style=" position: absolute; top: 144px; left: 530px; "><input id='1' /></div>
          <div style=" position: absolute; top: 324px; left: 370px; "><input id='2' /></div>
          <div style=" position: absolute; top: 323px; left: 689px; "><input id='3' /></div>

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

  2: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P79-E2',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    exerciseKey: '',
    questionImage: [ // Row      
      [
        // Column1
        { url: 'img/FriendsPlus/Page79/E2/1.jpg' },

      ]
    ],
  },
  3: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P79-E3',
    audio: '',
    video: '',
    component: D1,
    padding: 0,
    exerciseKey: 'img/FriendsPlus/Page79/E3/Key/answerKey.png',
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page79/E3/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page79/E3/2.jpg' },
        { url: 'img/FriendsPlus/Page79/E3/3.jpg', input: true, answer: "or" },
        { url: 'img/FriendsPlus/Page79/E3/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page79/E3/5.jpg' },
        { url: 'img/FriendsPlus/Page79/E3/6.jpg', input: true, answer: "and" },
        { url: 'img/FriendsPlus/Page79/E3/7.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page79/E3/8.jpg' },
        { url: 'img/FriendsPlus/Page79/E3/9.jpg', input: true, answer: "and" },
        { url: 'img/FriendsPlus/Page79/E3/10.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page79/E3/11.jpg' },
      ],

    ],
  },
  4: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P79-E4',
    audio: '',
    video: '',
    hideBtnFooter: true,
    component: D1,
    exerciseKey: 'img/FriendsPlus/Page79/E3/Key/answerKey.png',
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page79/E4/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page79/E4/2.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page79/E4/3.jpg' },
        { url: 'img/FriendsPlus/Page79/E4/4.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page79/E4/5.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page79/E4/6.jpg' },
        { url: 'img/FriendsPlus/Page79/E4/7.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page79/E4/8.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page79/E4/9.jpg' },
        { url: 'img/FriendsPlus/Page79/E4/10.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page79/E4/11.jpg' },
      ],
      [
        // Column6
        { url: 'img/FriendsPlus/Page79/E4/12.jpg' },
        { url: 'img/FriendsPlus/Page79/E4/13.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page79/E4/14.jpg' },
      ],
      [
        // Column7
        { url: 'img/FriendsPlus/Page79/E4/15.jpg' },
      ],


    ],
  },



}
export default json;
