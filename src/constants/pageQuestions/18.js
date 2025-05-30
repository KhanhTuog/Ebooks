import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';


const json = {
  1: { // Exercise num
    unit: 'Unit 2',
    id: 'SB4-U2-P18-E1',
    audio: 'img/FriendsPlus/Page18/Audio/audio-e1-p18.mp3',
    video: '',
    recorder: true,
    component: UI,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page18/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page18/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page18/Audio/tieude-e1-p18.mp3' },
        { url: 'img/FriendsPlus/Page18/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page18/E1/4.jpg' },
        { url: 'img/FriendsPlus/Page18/E1/5.jpg', audioUrl: 'img/FriendsPlus/Page18/Audio/hinh1-e1-p18.mp3' },
        { url: 'img/FriendsPlus/Page18/E1/6.jpg' },
        { url: 'img/FriendsPlus/Page18/E1/7.jpg', audioUrl: 'img/FriendsPlus/Page18/Audio/hinh2-e1-p18.mp3' },
        { url: 'img/FriendsPlus/Page18/E1/8.jpg' },
        { url: 'img/FriendsPlus/Page18/E1/9.jpg', audioUrl: 'img/FriendsPlus/Page18/Audio/hinh3-e1-p18.mp3' },
        { url: 'img/FriendsPlus/Page18/E1/10.jpg' },
        { url: 'img/FriendsPlus/Page18/E1/11.jpg', audioUrl: 'img/FriendsPlus/Page18/Audio/hinh4-e1-p18.mp3' },
        { url: 'img/FriendsPlus/Page18/E1/12.jpg' },
        { url: 'img/FriendsPlus/Page18/E1/13.jpg', audioUrl: 'img/FriendsPlus/Page18/Audio/hinh5-e1-p18.mp3' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page18/E1/14.jpg' },
      ],

    ],
  },
  2: { // Exercise num
    unit: 'Unit 2',
    id: 'SB4-U2-P18-E2',
    audio: '',
    video: '',
    component: UI,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page18/E2/1.jpg' },
      ],
      [
        // Column1
        { url: 'img/FriendsPlus/Page18/E2/2.jpg' },
      ],
    ],
  },
  3: { // Exercise num
    unit: 'Unit 2',
    id: 'SB4-U2-P18-E3',
    audio: 'img/FriendsPlus/Page18/Audio/audio-e3-p18.mp3',
    video: '',
    recorder: true,
    component: UI,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page18/E3/1.jpg' },
        { url: 'img/FriendsPlus/Page18/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page18/Audio/tieude-e3-p18.mp3' },
        { url: 'img/FriendsPlus/Page18/E3/3.jpg' },
      ],
      [
        // Column1
        { url: 'img/FriendsPlus/Page18/E3/4.jpg' },
      ],
    ],
  },

  4: { // Exercise num
    unit: 'Unit 2',
    id: 'SB4-U2-P18-E4',
    audio: '',
    video: '',
    component: T6,
    exerciseKey: 'img/FriendsPlus/Page18/E4/Key/answerKey.png',
    // titleImage: "img/FriendsPlus/Page40/E4/1.jpg",
    inputSize: 100,
    checkUppercase: true,
    titleQuestion: [{ num: '4', title: 'Read again and answer the question.' }],
    questionImage: [],
    questions: [
      {
        title:
          `
          <div style='display: flex;'>
            <div style='margin-right:20px'>
                <div><b> 1 </b> Does hoang like playing the guitar? <u style='color:rgb(82,197,235)'>Yes</u></div>
                <div><b> 3 </b> Does Eun-sol like cooking? # </div>
                <div><b> 5 </b> Does Mon like playing soccer? # </div>
            </div>
            <div>
                <div><b> 2 </b> Does hoang like shopping? # </div>
                <div><b> 4 </b> Does Eun-sol like taking photos? # </div>
                <div><b> 6 </b> Does Mon like playing the piano? # </div>
            </div>
          </div>
      `,
        answer: [
          "Yes",
          "Yes",
          "No",
          "Yes",
          "No",
        ],
        // type: 'longAnwser'
      },
    ]
  },


}

export default json;