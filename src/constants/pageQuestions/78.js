

import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {

  1: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P78-E1',
    recorder: true,
    audio: 'img/FriendsPlus/Page78/Audio/audio-e1-p78.mp3',
    video: '',
    component: UI,
    exerciseKey: '',
    questionImage: [ // Row      
      [
        // Column1
        { url: 'img/FriendsPlus/Page78/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page78/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page78/Audio/tieude-e1-p78.mp3' },
        { url: 'img/FriendsPlus/Page78/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page78/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page78/Audio/hinh1-e1-p78.mp3' },
        { url: 'img/FriendsPlus/Page78/E1/5.jpg' },
        { url: 'img/FriendsPlus/Page78/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page78/Audio/hinh2-e1-p78.mp3' },
        { url: 'img/FriendsPlus/Page78/E1/7.jpg' },
        { url: 'img/FriendsPlus/Page78/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page78/Audio/hinh3-e1-p78.mp3' },
        { url: 'img/FriendsPlus/Page78/E1/9.jpg' },
        { url: 'img/FriendsPlus/Page78/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page78/Audio/hinh4-e1-p78.mp3' },
        { url: 'img/FriendsPlus/Page78/E1/11.jpg' },
        { url: 'img/FriendsPlus/Page78/E1/12.jpg', audioUrl: 'img/FriendsPlus/Page78/Audio/hinh5-e1-p78.mp3' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page78/E1/13.jpg' },
      ],
    ],
  },

  2: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P78-E2',
    audio: '',
    video: '',
    titleQuestion: [{ num: '2', title: 'Describe what is happening in the pictures below.', color: "#5B5A5D" }],
    component: D1,
    recorder: true,
    exerciseKey: '',
    questionImage: [ // Row      
      [
        // Column1
        { url: 'img/FriendsPlus/Page78/E2/1.jpg' },
      ]
    ],
  },
  3: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P78-E3',
    audio: 'img/FriendsPlus/Page78/Audio/audio-e3-p78.mp3',
    video: '',
    titleQuestion: [{ num: '3', title: 'Listen and read. <headphone name="96" src="img/FriendsPlus/Page78/Audio/tieude-e3-p78.mp3"></headphone>', color: "#5B5A5D" }],
    component: D1,
    recorder: true,
    exerciseKey: '',
    questionImage: [ // Row      
      [
        // Column1
        { url: 'img/FriendsPlus/Page78/E2/1.jpg' },
      ]
    ],
  },
  4: { // Exercise num
    unit: 'Unit 10',
    id: 'SB4-U10-P78-E4',
    audio: '',
    video: '',
    component: T6,
    exerciseKey: 'img/FriendsPlus/Page78/E4/Key/answerKey.png',
    inputSize: 40,
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
                        <div>
                          <b> 1 </b> The Gingerbread Man is a cookie.
                          <u style='color:rgba(10,199,249,1)'>  T </u> 
                        </div>
                        <div> <b> 3 </b> The Gingerbread Man meets a cat. #</div>
                        <div> <b> 5 </b> The Gingerbread Man can swim.  #</div>
                    </div>
                    <div>
                       <div> <b> 2 </b>The old woman runs away.  #</div>
                       <div> <b> 4 </b> The cat eats the Gingerbread Man. #</div>
                       <div> <b> 6 </b> The fox eats the Gingerbread Man. #</div>
                    </div>
                </div>
                
      `,
        answer: [
          "T",
          "F",
          "F", // 2
          "F",
          "T",
        ],
        //  1 T 2 F 3 T 4 F 5 F 6 T
      },
    ]
  },



}
export default json;
