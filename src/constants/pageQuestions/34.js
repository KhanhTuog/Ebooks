import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {
    1: { // Exercise num
        unit: 'Unit 4',
        id: 'SB4-U4-P34-E1',
        audio: 'img/FriendsPlus/Page34/Audio/audio-e1-p34.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page34/E1/1.jpg' },
                { url: 'img/FriendsPlus/Page34/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page34/Audio/tieude-e1-p34.mp3' },
                { url: 'img/FriendsPlus/Page34/E1/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page34/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page34/Audio/hinh1-e1-p34.mp3' },
                { url: 'img/FriendsPlus/Page34/E1/5.jpg' },
                { url: 'img/FriendsPlus/Page34/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page34/Audio/hinh2-e1-p34.mp3' },
                { url: 'img/FriendsPlus/Page34/E1/7.jpg' },
                { url: 'img/FriendsPlus/Page34/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page34/Audio/hinh3-e1-p34.mp3' },
                { url: 'img/FriendsPlus/Page34/E1/9.jpg' },
                { url: 'img/FriendsPlus/Page34/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page34/Audio/hinh4-e1-p34.mp3' },
                { url: 'img/FriendsPlus/Page34/E1/11.jpg' },
                { url: 'img/FriendsPlus/Page34/E1/12.jpg', audioUrl: 'img/FriendsPlus/Page34/Audio/hinh5-e1-p34.mp3' },
            ],
            [
                // Column3
                { url: 'img/FriendsPlus/Page34/E1/13.jpg' },
            ],


        ],
    },
    2: { // Exercise num
        unit: 'Unit 4',
        id: 'SB4-U4-P34-E2',
        audio: '',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page34/E2/1.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page34/E3/4.jpg' },
            ],
        ]
    },
    3: { // Exercise num
        unit: 'Unit 4',
        id: 'SB4-U4-P34-E3',
        audio: 'img/FriendsPlus/Page34/Audio/audio-e3-p34.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page34/E3/1.jpg' },
                { url: 'img/FriendsPlus/Page34/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page34/Audio/tieude-e3-p34.mp3' },
                { url: 'img/FriendsPlus/Page34/E3/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page34/E3/4.jpg' },
            ],
        ]
    },
    4: { // Exercise num
        unit: 'Unit 4 ',
        id: 'SB4-U4-P34-E4',
        audio: '',
        video: '',
        component: T6,
        exerciseKey: 'img/FriendsPlus/Page34/E4/Key/answerKey.png',
        titleImage: "img/FriendsPlus/Page34/E4/1.jpg",
        inputSize: 200,
        // titleQuestion: [{ num: '2', title: 'Write about A or B.' }],
        questionImage: [],
        questions: [
            {
                title:
                    `
          <div><b> 1 </b> The beach is long and white. It's <u style='color:rgb(82,197,235)'>beautiful</u>.</div>
          <div><b> 2 </b> The sand dunes are safe. They aren't #.</div>
          <div><b> 3 </b> The water is not #. </div>
          <div><b> 4 </b> You can go snorkeling in the sea. It's very #.</div>
          
          `,
                answer: [
                    "dangerous ",
                    "polluted ",
                    "clean",
                ],
                // type: 'longAnwser'
            },
        ]
    },



}

export default json;