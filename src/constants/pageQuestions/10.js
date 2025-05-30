import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';
import D1 from '../../components/ExcerciseTypes/Design/TypeIn';


const json = {
    1: { // Exercise num
        unit: 'Unit 1',
        id: 'SB4-U1-P10-E1',
        audio: '',
        video: '',
        recorder: true,
        component: UI,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page10/E1/1.jpg' },
            ]
        ],
    },
    2: { // Exercise num
        unit: 'Unit 1',
        id: 'SB4-U1-P10-E2',
        audio: '',
        video: '',
        component: T6,
        hideBtnFooter: true,
        // exerciseKey: 'img/FriendsPlus/Page43/E1/Key/answerKey.png',
        // titleImage: "img/FriendsPlus/Page10/E2/1.jpg",
        inputSize: 700,
        titleQuestion: [{ num: '2', title: 'Write about three people' }],
        questionImage: [],
        questions: [
            {
                title:
                    `
          <div style='color:rgb(82,197,235)'>Linh is eight. She's from Viet Nam. Jae-won is ...</div>
          <div>#</div>
          <div>#</div>
          <div>#</div>
          <div>#</div>
          <div>#</div>
          <div>#</div>
          `,
                answer: [
                    "",
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
        unit: 'Unit 1',
        id: 'SB4-U1-P10-E3',
        audio: 'img/FriendsPlus/Page10/Audio/audio-e3-p10.mp3',
        video: '',
        recorder: true,
        component: UI,
        questionImage: [ // Row
            [
                { url: 'img/FriendsPlus/Page10/E3/1.jpg' },
                { url: 'img/FriendsPlus/Page10/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page10/Audio/tieude-e3-p10.mp3' },
                { url: 'img/FriendsPlus/Page10/E3/3.jpg' },
            ],
            [
                { url: 'img/FriendsPlus/Page10/E3/4.jpg' },
            ]
        ],
    },

    4: { // Exercise num
        unit: 'Unit 1',
        id: 'SB4-U1-P10-E4',
        audio: '',
        video: '',
        component: D1,
        recorder: true,
        padding: 0,
        hideBtnFooter: true,
        questionImage: [ // Row
            [
                { url: 'img/FriendsPlus/Page10/E4/1.jpg' },
            ],
            [
                { url: 'img/FriendsPlus/Page10/E4/2.jpg' },
                { url: 'img/FriendsPlus/Page10/E4/3.jpg', input: true, answer: "" },
                { url: 'img/FriendsPlus/Page10/E4/4.jpg' },
            ],

            [
                { url: 'img/FriendsPlus/Page10/E4/5.jpg' },
            ],
        ],
    },


}

export default json;