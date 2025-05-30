
import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';


const json = {
  1: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P43-E1',
    audio: 'img/FriendsPlus/Page42/Audio/audio-e2-p42.mp3',
    video: 'Videos/e2.p42.mp4',
    component: UI,
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page43/E1/1.jpg' },
      ],
      [
        // Column2  hinh1-e2-p42
        { url: 'img/FriendsPlus/Page42/E2/4.jpg', audioUrl: 'img/FriendsPlus/Page42/Audio/hinh1-e2-p42.mp3' },
        { url: 'img/FriendsPlus/Page42/E2/5.jpg', audioUrl: 'img/FriendsPlus/Page42/Audio/hinh2-e2-p42.mp3' },
      ],
      [
        // Column2  hinh1-e2-p42
        { url: 'img/FriendsPlus/Page42/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page42/Audio/hinh3-e2-p42.mp3' },
        { url: 'img/FriendsPlus/Page42/E2/7.jpg', audioUrl: 'img/FriendsPlus/Page42/Audio/hinh4-e2-p42.mp3' },
      ],


    ],
  },
  2: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P43-E2',
    audio: 'img/FriendsPlus/Page43/Audio/audio-e2-p43.mp3',
    video: '',
    component: UI,
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page43/E2/1.jpg' },
        { url: 'img/FriendsPlus/Page43/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page43/Audio/tieude-e2-p43.mp3' },
        { url: 'img/FriendsPlus/Page43/E2/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page43/E2/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page43/E2/5.jpg' },
        { url: 'img/FriendsPlus/Page43/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page43/Audio/doan1.mp3' },
        { url: 'img/FriendsPlus/Page43/E2/7.jpg', audioUrl: 'img/FriendsPlus/Page43/Audio/doan2.mp3' },
        { url: 'img/FriendsPlus/Page43/E2/8.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page43/E2/9.jpg' },
        { url: 'img/FriendsPlus/Page43/E2/10.jpg', audioUrl: 'img/FriendsPlus/Page43/Audio/doan3.mp3' },
        { url: 'img/FriendsPlus/Page43/E2/11.jpg', audioUrl: 'img/FriendsPlus/Page43/Audio/doan4.mp3' },
        { url: 'img/FriendsPlus/Page43/E2/12.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page43/E2/13.jpg' },
      ],



    ],
  },
  3: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P45-E3',
    audio: '',
    video: '',
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page43/E3/Key/answerKey.png',
    titleQuestion: [{ num: '3', title: 'Read and circle', color: "#5B5A5D" }],
    question: {
      Write: {
        inputStyle: {},
        answers: [],
        initialValue: [],
      },
      Circle: {
        // initialWordStyle: { margin: '5px 0', border: 'solid 2px', borderColor: 'black', borderRadius: '50%', padding: '0 5px' },
        initialWordStyle: { margin: '5px 0', border: 'none', borderColor: 'transparent', borderRadius: '50%', fontWeight: 'bold' },
        selectWordStyle: { border: 'solid 2px', borderColor: '#00a8ec', margin: '-2px' },
        limitSelect: 1,
        listWords: [
          'Do / Does',//1
          'doesn\'t / don\'t',//1

          'has / have',//5
          'doesn\'t / don\'t',//5
          'Do / does',//5
        ],
        answers: ['2-4', '0-4', '3-4', '1-0', '4-0'],
        initialValue: [],
      },
      Layout: `
            <div style=' display:flex;justify-content: space-between;align-items: center;width: 1100px;'>

              <div style='margin-left: 20px;'>
                <div> <b> 1  &ensp;</b> Vinh <b>get / </b> <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"><b>gets up </b></span>  at six o'clock.   </div>
                <div> <b> 3 &ensp;</b> <input id='0' type='Circle' /> she have a shower at night?</div>
                <div> <b> 5 &ensp;</b> He  <input id='1' type='Circle' />  walk to school.</div>
              </div>

              <div>
                <div> <b> 2 &ensp;</b>I  <input id='2' type='Circle' /> breakfast with my family.</div>
                <div> <b> 4 &ensp;</b>They  <input id='3' type='Circle' /> catch the bus  to work.</div>
                <div> <b> 6 &ensp;</b><input id='4' type='Circle' /> they brush their teeth at night?</div>
              </div>
            </div>
          `,
    },
  },
  4: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P43-E4',
    audio: '',
    video: '',
    component: D1,
    exerciseKey: 'img/FriendsPlus/Page43/E4/Key/answerKey.png',
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page43/E4/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page43/E4/2.jpg' },
        { url: 'img/FriendsPlus/Page43/E4/3.jpg', input: true, answer: "brushes " },
        { url: 'img/FriendsPlus/Page43/E4/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page43/E4/5.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page43/E4/6.jpg' },
        { url: 'img/FriendsPlus/Page43/E4/7.jpg', input: true, answer: "don't catch" },
        { url: 'img/FriendsPlus/Page43/E4/8.jpg' },
        { url: 'img/FriendsPlus/Page43/E4/9.jpg', input: true, answer: "has" },
        { url: 'img/FriendsPlus/Page43/E4/10.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page43/E4/11.jpg' },
      ],



    ],
  },
  5: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P43-E5',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    isAllowSubmit: false,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page43/E5/1.jpg' },
      ]
    ],
  },


}

export default json;
