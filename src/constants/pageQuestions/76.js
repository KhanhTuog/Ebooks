

import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {

  1: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P76-E1',
    recorder: true,
    audio: '',
    video: '',
    component: UI,
    // titleQuestion: [{ num: '1', title: ' Listen to the story and repeat. Act.' }],
    exerciseKey: '',
    questionImage: [ // Row      
      [
        // Column2
        { url: 'img/FriendsPlus/Page76/2.jpg' },
      ],
    ],
  },

  2: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P76-E2',
    audio: '',
    video: '',
    component: T6,
    exerciseKey: 'img/FriendsPlus/Page65/E4/Key/answerKey.png',
    inputSize: 700,
    hideBtnFooter:true,
    titleQuestion: [{ num: '2', title: 'Write four sentences.' }],
    questionImage: [],
    questions: [
      {
        title:
          `
                <div style='display:flex'>
                    <div style='margin-right:30px'>
                        <div style='color:rgba(10,199,249,1)'>  You must put litter in the garbage can. You ...   </div>
                        <div>  #</div>
                        <div>  #</div>
                        <div>  #</div>
                        <div>  #</div>
                        <div>  #</div>
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
  3: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P76-E3',
    audio: 'img/FriendsPlus/Page76/Audio/audio-e3-p76.mp3',
    video: '',
    component: UI,
    recorder: true,
    titleQuestion: [{ num: '3', title: 'Listen and sing.  <headphone name="92" src="img/FriendsPlus/Page76/Audio/tieude-e3-p76.mp3"></headphone>  ' }],
    exerciseKey: '',
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page76/E3/1.jpg' },
      ]
    ],
  },
  4: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P76-E4',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    titleQuestion: [{ num: '4', title: 'Sing and do. ' }],
    exerciseKey: '',
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page76/E3/1.jpg' },
      ]
    ],
  },



}
export default json;
