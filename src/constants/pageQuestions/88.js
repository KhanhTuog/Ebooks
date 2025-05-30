

import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {

  1: {
    unit: 'Unit 12',
    id: 'SB4-U12-P88-E1',
    audio: '',
    video: '',
    component: UI,
    titleImage: '',
    recorder: true,
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page88/2.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page88/E1/3.jpg' },
      ]
    ]
  },


  2: { // Exercise num
    unit: 'Unit 12',
    id: 'SB4-U12-P88-E2',
    audio: '',
    video: '',
    component: T6,
    hideBtnFooter: true,
    inputSize: 700,
    titleQuestion: [{ num: '2', title: 'Write about Mai.  ' }],
    questionImage: [],
    questions: [
      {
        title:
          `
                <div style='display:flex'>
                    <div style='margin-right:30px'>
                        <div style='color:rgb(82,197,235)'> When Mai was two years old, she had short hair. She was short. She was ...  </div>
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
    unit: 'Unit 12',
    id: 'SB4-U12-P88-E3',
    audio: 'img/FriendsPlus/Page88/Audio/audio-e3-p88.mp3',
    video: '',
    component: UI,
    titleImage: '',
    titleQuestion: [{ num: '3', title: 'Listen and sing. <headphone name="110" src="img/FriendsPlus/Page88/Audio/tieude-e3-p88.mp3"></headphone>  ' }],
    recorder: true,
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page88/E3/1.jpg' },
      ]
    ]
  },
  4: {
    unit: 'Unit 12',
    id: 'SB4-U12-P88-E4',
    audio: '',
    video: '',
    component: UI,
    titleImage: '',
    titleQuestion: [{ num: '4', title: 'Sing and do.' }],
    recorder: true,
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page88/E3/1.jpg' },
      ]
    ]
  },




}
export default json;
