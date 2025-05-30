

import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {

  1: { // Exercise num
    unit: 'Unit 9',
    id: 'SB4-U9-P66-E1',
    audio: '',
    video: '',
    recorder: true,
    component: UI,
    questionImage: [ // Row
      [
        // Column2
        { url: 'img/FriendsPlus/Page66/E1/1.jpg' },
      ]
    ],
  },

  2: { // Exercise num
    unit: 'Unit 9',
    id: 'SB4-U9-P66-E2',
    audio: '',
    video: '',
    component: T6,
    hideBtnFooter: true,
    inputSize: 700,
    titleQuestion: [{ num: '2', title: 'Write three sentences.' }],
    questionImage: [],
    questions: [
      {
        title:
          `
                <div style='display:flex'>
                    <div style='margin-right:30px'>
                        <div style='color:rgb(82,197,235)'>  The slowest animal is a monkey. The ... </div>
                        <div>  # </div>
                        <div>  # </div>
                        <div>  # </div>
                        <div>  # </div>
                    </div>
                    
                </div>
                
      `,
        answer: [
          "",
          "",
          "",
          "",
        ],
        // type: 'longAnwser'
      },
    ]
  },
  3: { // Exercise num
    unit: 'Unit 9',
    id: 'SB4-U9-P66-E3',
    audio: 'img/FriendsPlus/Page66/Audio/audio-e3-p66.mp3',
    video: '',
    component: UI,
    recorder: true,
    questionImage: [ // Row
      [
        // Column2
        { url: 'img/FriendsPlus/Page66/E3/1.jpg' },
        { url: 'img/FriendsPlus/Page66/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page66/Audio/tieude-e3-p66.mp3' },
        { url: 'img/FriendsPlus/Page66/E3/3.jpg' },
      ]
      ,
      [
        // Column2
        { url: 'img/FriendsPlus/Page66/E3/4.jpg' },
      ]
    ],
  },
  4: { // Exercise num
    unit: 'Unit 9',
    id: 'SB4-U9-P66-E4',
    audio: '',
    video: '',
    titleQuestion: [{ num: '4', title: 'Sing and do. ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ', color: '#5196C7' }], // ㅤ
    component: UI,
    recorder: true,
    questionImage: [ // Row
      [
        // Column2
        { url: 'img/FriendsPlus/Page66/E3/4.jpg' },
      ]
    ],
  },


}
export default json;
