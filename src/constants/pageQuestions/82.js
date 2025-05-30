

import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {

  1: {
    unit: 'Unit 11',
    id: 'SB4-U11-P82-E1',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page82/2.jpg' },
      ]
    ]
  },

  2: { // Exercise num
    unit: 'Unit 11',
    id: 'SB4-U11-P82-E2',
    audio: '',
    video: '',
    component: T6,
    hideBtnFooter: true,
    inputSize: 700,
    titleQuestion: [{ num: '2', title: 'Write four sentences. ' }],
    questionImage: [],
    questions: [
      {
        title:
          `
                <div style='display:flex'>
                    <div style='margin-right:30px'>
                        <div style='color:rgb(82,197,235)'>  One hundred years ago: There weren’t any motorcycles. There ...  </div>
                        <div>  # </div>
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
          "",
        ],
        // type: 'longAnwser'
      },
    ]
  },
  3: {
    unit: 'Unit 11',
    id: 'SB4-U11-P82-E3',
    audio: 'img/FriendsPlus/Page82/Audio/audio-e3-p82.mp3',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    titleQuestion: [{ num: '3', title: 'Listen and sing. <headphone name="101" src="img/FriendsPlus/Page82/Audio/tieude-e3-p82.mp3"></headphone>  ' }],
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page82/E3/1.jpg' },
      ]
    ]
  },
  4: {
    unit: 'Unit 11',
    id: 'SB4-U11-P82-E4',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    titleQuestion: [{ num: '4', title: 'Sing and do. ' }],
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page82/E3/1.jpg' },
      ]
    ]
  },




}
export default json;
