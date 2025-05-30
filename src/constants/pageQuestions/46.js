import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';


const json = {
  1: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P46-E1',
    audio: 'img/FriendsPlus/Page46/Audio/audio-e1-p46.mp3',
    video: '',
    component: UI,
    recorder: true,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page46/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page46/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page46/Audio/tieude-e1-p46.mp3' },
        { url: 'img/FriendsPlus/Page46/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page46/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page46/Audio/hinh1-e1-p46.mp3' },
        { url: 'img/FriendsPlus/Page46/E1/5.jpg' },
        { url: 'img/FriendsPlus/Page46/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page46/Audio/hinh2-e1-p46.mp3' },
        { url: 'img/FriendsPlus/Page46/E1/7.jpg' },
        { url: 'img/FriendsPlus/Page46/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page46/Audio/hinh3-e1-p46.mp3' },
        { url: 'img/FriendsPlus/Page46/E1/9.jpg' },
        { url: 'img/FriendsPlus/Page46/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page46/Audio/hinh4-e1-p46.mp3' },
        { url: 'img/FriendsPlus/Page46/E1/11.jpg' },
        { url: 'img/FriendsPlus/Page46/E1/12.jpg', audioUrl: 'img/FriendsPlus/Page46/Audio/hinh5-e1-p46.mp3' },
      ],

    ],
  },
  2: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P46-E2',
    audio: '',
    video: '',
    component: UI,
    questionImage: [ // Row
      [
        // Column2
        { url: 'img/FriendsPlus/Page46/E2/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page46/E2/2.jpg' },
      ],

    ],
  },
  3: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P46-E3',
    audio: 'img/FriendsPlus/Page46/Audio/audio-e3-p46.mp3',
    video: '',
    component: UI,
    recorder: true,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page46/E3/1.jpg' },
        { url: 'img/FriendsPlus/Page46/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page46/Audio/tieude-e3-p46.mp3' },
        { url: 'img/FriendsPlus/Page46/E3/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page46/E3/4.jpg' },
      ],

    ],
  },
  4: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P46-E4',
    audio: '',
    video: '',
    component: T6,
    exerciseKey: 'img/FriendsPlus/Page46/E4/Key/answerKey.png',
    inputSize: 100,
    titleQuestion: [{ num: '4', title: 'Read again and answer the question.' }],
    questionImage: [],
    questions: [
      {
        title:
          `
          <div style='display: flex;width:1300px'>
            <div style='margin-right:20px'>
                <div><b> 1 </b> Does Thi live in a town? <u style='color:rgb(82,197,235)'>No</u>  </div>
                <div><b> 3 </b> Does Thi help her parents on the farm first? # </div>
                <div><b> 5 </b> Does Thi go to school by motorcycle? #</div>
            </div>
            <div>
                <div><b> 2 </b> Does thi get up early? #</div>
                <div><b> 4 </b> Does Thi do homework in the evenings? #</div>
                <div><b> 6 </b> Does Thi live close to her friends? #</div>
            </div>
          </div>
      `,
        answer: [
          "No",
          "No",
          "Yes",
          "Yes",
          "No",
        ],
        // type: 'longAnwser'
      },
    ]
  },
}

export default json;