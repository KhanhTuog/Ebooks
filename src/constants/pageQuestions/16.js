import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {
    1: { // Exercise num
        unit: 'Unit 2',
        id: 'SB4-U2-P16-E1',
        audio: '',
        video: '',
        recorder: true,
        component: UI,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page16/E1/1.jpg' },
            ],
        ],
    },
    2: { // Exercise num
        unit: 'Unit 2',
        id: 'SB4-U2-P16-E2',
        audio: '',
        video: '',
        component: T6,
        hideBtnFooter: true,
        // exerciseKey: 'img/FriendsPlus/Page43/E1/Key/answerKey.png',
        // titleImage: "img/FriendsPlus/Page10/E2/1.jpg",
        inputSize: 700,
        // titleQuestion: [{ num: '2', title: 'Write about a boy' }],
        questionImage: [],
        questions: [
            {
                title:
                    `
          <div style='color:rgb(82,197,235)'>Phong doesn't like fishing. He likes reading comics. He ...</div>
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
    3: { // Exercise num
        unit: 'Unit 2',
        id: 'SB4-U2-P16-E3',
        audio: 'img/FriendsPlus/Page16/Audio/audio-e3-p16.mp3',
        video: '',
        recorder: true,
        component: UI,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page16/E3/1.jpg' },
                { url: 'img/FriendsPlus/Page16/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page16/Audio/tieude-e3-p16.mp3' },
                { url: 'img/FriendsPlus/Page16/E3/3.jpg' },
            ],
            [
                // Column1
                { url: 'img/FriendsPlus/Page16/E3/4.jpg' },
            ],
        ],
    },
    4: { // Exercise num
        unit: 'Unit 2',
        id: 'SB4-U2-P16-E4',
        audio: 'img/FriendsPlus/Page16/Audio/audio-e3-p16.mp3',
        video: '',
        recorder: true,
        component: UI,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page16/E4/1.jpg' },
            ],
            [
                // Column1
                { url: 'img/FriendsPlus/Page16/E4/2.jpg' },
            ]
        ],
    },


}

export default json;