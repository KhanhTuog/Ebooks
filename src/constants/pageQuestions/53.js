import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';
import DesignUnderLine from '../../components/ExcerciseTypes/Design/DesignUnderLine';

const json = {
    1: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P53-E1',
        audio: 'img/FriendsPlus/Page52/Audio/audio-e2-p52.mp3',
        video: 'img/FriendsPlus/Page52/Videos/e2.p52.mp4',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page53/E1/1.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page52/E2/4.jpg', audioUrl: 'img/FriendsPlus/Page52/Audio/hinh1-e2-p52.mp3' },
                { url: 'img/FriendsPlus/Page52/E2/5.jpg', audioUrl: 'img/FriendsPlus/Page52/Audio/hinh2-e2-p52.mp3' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page52/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page52/Audio/hinh3-e2-p52.mp3' },
                { url: 'img/FriendsPlus/Page52/E2/7.jpg', audioUrl: 'img/FriendsPlus/Page52/Audio/hinh4-e2-p52.mp3' },
            ]
        ],
    },
    2: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P53-E2',
        audio: 'img/FriendsPlus/Page53/Audio/audio-e2-p53.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page53/E2/1.jpg' },
                { url: 'img/FriendsPlus/Page53/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page53/Audio/tieude-e2-p53.mp3' },
                { url: 'img/FriendsPlus/Page53/E2/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page53/E2/4.jpg' },
            ],
            [
                // Column3
                { url: 'img/FriendsPlus/Page53/E2/5.jpg' },
                { url: 'img/FriendsPlus/Page53/E2/6.jpg', audioUrl: 'img/FriendsPlus/Page53/Audio/doan1.mp3' },
                { url: 'img/FriendsPlus/Page53/E2/7.jpg' },
            ],
            [
                // Column4
                { url: 'img/FriendsPlus/Page53/E2/8.jpg' },
                { url: 'img/FriendsPlus/Page53/E2/9.jpg', audioUrl: 'img/FriendsPlus/Page53/Audio/doan2.mp3' },
                { url: 'img/FriendsPlus/Page53/E2/10.jpg' },
            ],
            [
                // Column5
                { url: 'img/FriendsPlus/Page53/E2/11.jpg' },
            ],



        ],
    },
    3: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P53-E3',
        audio: '',
        video: '',
        component: DesignUnderLine,
        exerciseKey: 'img/FriendsPlus/Page53/E3/Key/answerKey.png',
        totalInput: 3,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page53/E3/1.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page53/E3/2.jpg' },
                { url: 'img/FriendsPlus/Page53/E3/3.jpg', input: 1, isCorrect: true },
                { url: 'img/FriendsPlus/Page53/E3/4.jpg', input: 1, },
                { url: 'img/FriendsPlus/Page53/E3/5.jpg' },
            ],
            [
                // Column3
                { url: 'img/FriendsPlus/Page53/E3/6.jpg' },
            ],
            [
                // Column4
                { url: 'img/FriendsPlus/Page53/E3/7.jpg' },
                { url: 'img/FriendsPlus/Page53/E3/8.jpg', input: 2, isCorrect: true },
                { url: 'img/FriendsPlus/Page53/E3/9.jpg', input: 2, },
                { url: 'img/FriendsPlus/Page53/E3/10.jpg' },
                { url: 'img/FriendsPlus/Page53/E3/11.jpg', input: 3, },
                { url: 'img/FriendsPlus/Page53/E3/12.jpg', input: 3, isCorrect: true },
                { url: 'img/FriendsPlus/Page53/E3/13.jpg' },
            ],
            [
                // Column5
                { url: 'img/FriendsPlus/Page53/E3/14.jpg' },
            ],


        ],
    },
    4: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P53-E4',
        audio: '',
        video: '',
        component: T6,
        exerciseKey: 'img/FriendsPlus/Page53/E4/Key/answerKey.png',
        titleImage: "img/FriendsPlus/Page53/E4/1.jpg",
        inputSize: 130,
        // titleQuestion: [{ num: '2', title: 'Write about A or B.' }],
        questionImage: [],
        questions: [
            {
                title:
                    `
                <div >
                    <div><b> 1 </b> Mai's birthday is <u style='color:rgb(82,197,235)'> in </u> March.</div>
                    <div><b> 2 </b> I always have lunch # one o'clock.</div>
                    <div><b> 3 </b> Dad never works # Saturdays.</div>
                    <div><b> 4 </b> We sometimes go to the beach # August.</div>
                    <div><b> 5 </b> You never watch TV # Mondays.</div>
                    <div><b> 6 </b> The children always go to bed # nine o'clock.</div>
                </div>
          `,
                answer: [
                    "at",
                    "on",
                    "in",
                    "on",
                    "at",
                ],
                // type: 'longAnwser'
            },
        ]
    },
    5: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P53-E5',
        audio: '',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page53/E5/1.jpg' },
            ]
        ],
    },




}

export default json;