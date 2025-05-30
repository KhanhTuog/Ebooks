

import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {

  1: {
    unit: 'Unit 12',
    id: 'SB4-U12-P90-E1',
    audio: 'img/FriendsPlus/Page90/Audio/audio-e1-p90.mp3',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        // Column1
        { url: 'img/FriendsPlus/Page90/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page90/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page90/Audio/tieude-e1-p90.mp3' },
        { url: 'img/FriendsPlus/Page90/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page90/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page90/Audio/hinh1-e1-p90.mp3' },
        { url: 'img/FriendsPlus/Page90/E1/5.jpg' },
        { url: 'img/FriendsPlus/Page90/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page90/Audio/hinh2-e1-p90.mp3' },
        { url: 'img/FriendsPlus/Page90/E1/7.jpg' },
        { url: 'img/FriendsPlus/Page90/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page90/Audio/hinh3-e1-p90.mp3' },
        { url: 'img/FriendsPlus/Page90/E1/9.jpg' },
        { url: 'img/FriendsPlus/Page90/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page90/Audio/hinh4-e1-p90.mp3' },
        { url: 'img/FriendsPlus/Page90/E1/11.jpg' },
        { url: 'img/FriendsPlus/Page90/E1/12.jpg', audioUrl: 'img/FriendsPlus/Page90/Audio/hinh5-e1-p90.mp3' },
      ],

    ]
  },


  2: {
    unit: 'Unit 12',
    id: 'SB4-U12-P90-E2',
    audio: '',
    video: '',
    component: UI,
    titleQuestion: [{ num: '2', title: 'Describe what you can see in the pictures below.' }],
    titleImage: '',
    recorder: true,
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page90/E2/1.jpg' },
      ]
    ]
  },
  3: {
    unit: 'Unit 12',
    id: 'SB4-U12-P90-E3',
    audio: 'img/FriendsPlus/Page90/Audio/audio-e3-p90.mp3',
    video: '',
    component: UI,
    titleQuestion: [{ num: '3', title: 'Listen and read. <headphone name="114" src="img/FriendsPlus/Page90/Audio/tieude-e3-p90.mp3"></headphone>  ' }],
    titleImage: '',
    recorder: true,
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page90/E2/1.jpg' },
      ]
    ]
  },
  4: { // Exercise num
    unit: 'Unit 12',
    id: 'SB4-U12-P90-E4',
    audio: '',
    video: '',
    component: T6,
    exerciseKey: 'img/FriendsPlus/Page90/E4/Key/answerKey.png',
    inputSize: 50,
    maxLength: 1,
    textAlign: 'center',
    titleQuestion: [{ num: '4', title: 'Read again and write T (true) or F (false).' }],
    questionImage: [],
    questions: [
      {
        title:
          `
                <div style='display:flex'>
                    <div style='margin-right:30px'>
                      <div> <b> 1  </b> Grandma had short hair. <u style='color:rgba(10,199,249,1)'> F </u> </div>
                      <div> <b> 3  </b>  Grandma is seventy now. # </div>
                    </div>
                    <div>
                       <div> <b> 2  </b>  Grandma was pretty. # </div>
                       <div> <b> 4  </b>  Grandma is sometimes mean. # </div>
                    </div>
                </div>
                
      `,
        answer: [
          "T",
          "T",
          "F",
        ],
        // type: 'longAnwser'
      },
    ]
  },




}
export default json;
