import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';

const json = {
    1: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P56-E1',
        audio: 'img/FriendsPlus/Page56/Audio/audio-e1-p56.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page56/E1/1.jpg' },
                { url: 'img/FriendsPlus/Page56/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page56/Audio/tieude-e1-p56.mp3' },
                { url: 'img/FriendsPlus/Page56/E1/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page56/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page56/Audio/hinh1-e1-p56.mp3' },
                { url: 'img/FriendsPlus/Page56/E1/5.jpg' },
                { url: 'img/FriendsPlus/Page56/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page56/Audio/hinh2-e1-p56.mp3' },
                { url: 'img/FriendsPlus/Page56/E1/7.jpg' },
                { url: 'img/FriendsPlus/Page56/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page56/Audio/hinh3-e1-p56.mp3' },
                { url: 'img/FriendsPlus/Page56/E1/9.jpg' },
                { url: 'img/FriendsPlus/Page56/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page56/Audio/hinh4-e1-p56.mp3' },
                { url: 'img/FriendsPlus/Page56/E1/11.jpg' },
                { url: 'img/FriendsPlus/Page56/E1/12.jpg', audioUrl: 'img/FriendsPlus/Page56/Audio/hinh5-e1-p56.mp3' },
            ],


        ],
    },
    2: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P56-E2',
        audio: '',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page56/E2/1.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page56/E3/4.jpg' },
            ],


        ],
    },
    3: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P56-E3',
        audio: 'img/FriendsPlus/Page56/Audio/audio-e3-p56.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page56/E3/1.jpg' },
                { url: 'img/FriendsPlus/Page56/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page56/Audio/tieude-e3-p56.mp3' },
                { url: 'img/FriendsPlus/Page56/E3/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page56/E3/4.jpg' },

            ],


        ],
    },
    4: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P56-E4',
        audio: '',
        video: '',
        component: T6,
        exerciseKey: 'img/FriendsPlus/Page56/E4/Key/answerKey.png',
        titleImage: "",
        inputSize: 130,
        titleQuestion: [{ num: '4', title: 'Read again and and answer the question.' }],
        questionImage: [],
        questions: [
            {
                title:
                    `
                <div style='display:flex'>
                    <div style='margin-right:50px'>
                        <div><b> 1&ensp; </b> Do Thu and Nhan visit their grandpa ?<u style='color:rgb(82,197,235)'> No </u></div>
                        <div><b> 3&ensp; </b> Is the dragon in a garden? #</div>
                        <div><b> 5 &ensp;</b> Is the movie sad? #</div>
                    </div>
                    <div>
                      <div><b> 2 &ensp;</b> Do they find a door? #</div>
                      <div><b> 4 &ensp;</b> Do they try to hide the dragon? #</div>
                      <div><b> 6 &ensp;</b> Do the actors sing in the movie? #</div>
                    </div>
                </div>
          `,
                answer: [
                    "No",
                    "No",
                    "Yes",
                    "Yes",
                    "Yes",
                ],
                // type: 'longAnwser'
            },
        ]
    },




}

export default json;