import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';


const json = {
  1: { // Exercise num
    unit: 'Unit 2',
    id: 'SB4-U2-P19-E1',
    audio: 'img/FriendsPlus/Page19/Audio/audio-e1-p19.mp3',
    video: '',
    component: D1,
    padding: 0,
    textAlign: 'center',
    exerciseKey: 'img/FriendsPlus/Page19/E1/Key/answerKey.png',
    maxLength: 1,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page19/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page19/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page19/Audio/tieude-e1-p19.mp3' },
        { url: 'img/FriendsPlus/Page19/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page19/E1/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page19/E1/5.jpg' },
        { url: 'img/FriendsPlus/Page19/E1/6.jpg', input: true, answer: "2" },
        { url: 'img/FriendsPlus/Page19/E1/7.jpg' },
        { url: 'img/FriendsPlus/Page19/E1/8.jpg', input: true, answer: "3" },
        { url: 'img/FriendsPlus/Page19/E1/9.jpg' },
        { url: 'img/FriendsPlus/Page19/E1/10.jpg', input: true, answer: "4" },
        { url: 'img/FriendsPlus/Page19/E1/11.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page19/E1/12.jpg' },
      ],


    ],
  },
  2: { // Exercise num
    unit: 'Unit 2',
    id: 'SB4-U2-P19-E2',
    audio: '',
    video: '',
    component: UI,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page19/E2/1.jpg' },
      ],

    ],
  },
  3: { // Exercise num
    unit: 'Unit 2',
    id: 'SB4-U2-P19-E3',
    audio: '',
    video: '',
    component: D1,
    hideBtnFooter: true,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page19/E3/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page19/E3/2.jpg' },
        { url: 'img/FriendsPlus/Page19/E3/3.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page19/E3/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page19/E3/5.jpg' },
        { url: 'img/FriendsPlus/Page19/E3/6.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page19/E3/7.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page19/E3/8.jpg' },
        { url: 'img/FriendsPlus/Page19/E3/9.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page19/E3/10.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page19/E3/11.jpg' },
        { url: 'img/FriendsPlus/Page19/E3/12.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page19/E3/13.jpg' },
      ],
      [
        // Column6
        { url: 'img/FriendsPlus/Page19/E3/14.jpg' },
      ],


    ],
  },
}

export default json;