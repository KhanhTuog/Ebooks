
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import MatchDots from '../../components/ExcerciseTypes/LineTo/MatchDots';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';



const json = {
  1: { // Exercise num
    unit: 'Starter',
    id: 'SB4-S-P7-E1',
    audio: '',
    video: '',
    exerciseKey: 'img/FriendsPlus/Page7/E1/Key/answerKey.png',
    component: MatchDots,
    titleQuestion: [{ num: '1', title: 'Look and Match.', color: "#5B5A5D" }],
    question: {
      DrawLines: {
        multipleLine: true,
        boxMatch: [
          //Bên ngoài
          //Trái 
          { boxMatchStyle: { position: 'absolute', top: '137px', left: '68px', width: 112, height: 45 } },
          { boxMatchStyle: { position: 'absolute', top: '243px', left: '68px', width: 112, height: 45 } },
          { boxMatchStyle: { position: 'absolute', top: '350px', left: '68px', width: 112, height: 45 } },
          { boxMatchStyle: { position: 'absolute', top: '457px', left: '68px', width: 112, height: 45 } },
          //Phải 
          { boxMatchStyle: { position: 'absolute', top: '32px', left: '1015px', width: 90, height: 45 } },
          { boxMatchStyle: { position: 'absolute', top: '137px', left: '1026px', width: 112, height: 45 } },
          { boxMatchStyle: { position: 'absolute', top: '243px', left: '1026px', width: 112, height: 45 } },
          { boxMatchStyle: { position: 'absolute', top: '350px', left: '1026px', width: 112, height: 45 } },
          { boxMatchStyle: { position: 'absolute', top: '457px', left: '1055px', width: 160, height: 45 } },
          //Bên Trong---------------------------------------------------------------------------------------------------------------------
          { boxMatchStyle: { position: 'absolute', top: '434px', left: '710px', width: 125, height: 100 } },//20
          { boxMatchStyle: { position: 'absolute', top: '88px', left: '827px', width: 125, height: 100 }, },//30
          { boxMatchStyle: { position: 'absolute', top: '68px', left: '267px', width: 125, height: 100 }, },//40
          { boxMatchStyle: { position: 'absolute', top: '339px', left: '500px', width: 125, height: 100 }, },//50
          { boxMatchStyle: { position: 'absolute', top: '433px', left: '305px', width: 125, height: 100 }, },//60
          { boxMatchStyle: { position: 'absolute', top: '338px', left: '871px', width: 125, height: 100 }, },//70
          { boxMatchStyle: { position: 'absolute', top: '224px', left: '682px', width: 125, height: 100 } },//80
          { boxMatchStyle: { position: 'absolute', top: '49px', left: '599px', width: 125, height: 100 }, },//90
          { boxMatchStyle: { position: 'absolute', top: '274px', left: '249px', width: 125, height: 100 }, },//100



        ],
        answers: ['0-9', '1-10', '11-2', '12-3', '13-4', '14-5', '15-6', '16-7', '17-8'],
        initialValue: [],
      },
      Layout: `
          <img src='img/FriendsPlus/Page7/E1/1.jpg' />
          
          <input id='0' type= 'boxMatch' />
          <input id='1' type= 'boxMatch' />
          <input id='2' type= 'boxMatch' />
          <input id='3' type= 'boxMatch' />
          <input id='4' type= 'boxMatch' />
          <input id='5' type= 'boxMatch' />
          <input id='6' type= 'boxMatch' />
          <input id='7' type= 'boxMatch' />
          <input id='8' type= 'boxMatch' />

          <input id='9' type= 'boxMatch' />
          <input id='10' type= 'boxMatch' />
          <input id='11' type= 'boxMatch' />
          <input id='12' type= 'boxMatch' />
          <input id='13' type= 'boxMatch' />
          <input id='14' type= 'boxMatch' />
          <input id='15' type= 'boxMatch' />
          <input id='16' type= 'boxMatch' />
          <input id='17' type= 'boxMatch' />
      `,
    },
  },
  2: { // Exercise num
    unit: 'Starter',
    id: 'SB4-S-P7-E2',
    audio: 'img/FriendsPlus/Page7/Audio/audio-e2-p7.mp3',
    video: '',
    component: UI,
    recorder: true,
    titleImage: '',
    question: [
    ],
    questionImage: [
      [
        { url: 'img/FriendsPlus/Page7/E2/1.jpg' },
        { url: 'img/FriendsPlus/Page7/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/tieude-e2-p7.mp3' },
        { url: 'img/FriendsPlus/Page7/E2/3.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page7/E2/4.jpg' },
        { url: 'img/FriendsPlus/Page7/E2/5.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/21.mp3' },
        { url: 'img/FriendsPlus/Page7/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/22.mp3' },
        { url: 'img/FriendsPlus/Page7/E2/7.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/23.mp3' },
        { url: 'img/FriendsPlus/Page7/E2/8.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/24.mp3' },
        { url: 'img/FriendsPlus/Page7/E2/9.jpg' },
      ],
      [
        { url: 'img/FriendsPlus/Page7/E2/10.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/25.mp3' },
        { url: 'img/FriendsPlus/Page7/E2/11.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/26.mp3' },
        { url: 'img/FriendsPlus/Page7/E2/12.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/27.mp3' },
        { url: 'img/FriendsPlus/Page7/E2/13.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/28.mp3' },
        { url: 'img/FriendsPlus/Page7/E2/14.jpg', audioUrl: 'img/FriendsPlus/Page7/Audio/29.mp3' },
      ],
    ]
  },
  3: { // Exercise num
    unit: 'Starter',
    id: 'SB4-S-P7-E3',
    audio: '',
    video: '',
    component: T6,
    exerciseKey: 'img/FriendsPlus/Page7/E3/Key/answerKey.png',
    // titleImage: "img/FriendsPlus/Page10/E2/1.jpg",
    inputSize: 170,
    titleQuestion: [{ num: '3', title: 'Write the answer.' }],
    questionImage: [],
    questions: [
      {
        title:
          `
        <div style='display:flex'>
            <div style='margin-right:50px'>
              <div><b> 1 </b> ten + fifty = <u style='color:rgb(82,197,235)'> sixty </u></div>
              <div><b> 3 </b> twenty + twenty = # </div>
            </div>
              
            <div>
              <div><b> 2 </b> seventy + ten = # </div>
              <div><b> 4 </b> sixty-three + thirty-one = # </div>
            </div>
        </div>
      `,
        answer: [
          "forty",
          "eighty",
          "ninety-four",
        ],
        // type: 'longAnwser'
      },
    ]
  },
}

export default json;