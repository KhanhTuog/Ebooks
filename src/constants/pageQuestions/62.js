
import T6 from '../../components/ExcerciseTypes/TypeIn/T6';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';


const json = {

    1: { // Exercise num
        unit: 'Unit 8',
        id: 'SB4-U8-P62-E1',
        audio: 'img/FriendsPlus/Page62/Audio/audio-e1-p62.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page62/E1/1.jpg' },
                { url: 'img/FriendsPlus/Page62/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page62/Audio/tieude-e1-p62.mp3' },
                { url: 'img/FriendsPlus/Page62/E1/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page62/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page62/Audio/hinh1-e1-p62.mp3' },
                { url: 'img/FriendsPlus/Page62/E1/5.jpg' },
                { url: 'img/FriendsPlus/Page62/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page62/Audio/hinh2-e1-p62.mp3' },
                { url: 'img/FriendsPlus/Page62/E1/7.jpg' },
                { url: 'img/FriendsPlus/Page62/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page62/Audio/hinh3-e1-p62.mp3' },
                { url: 'img/FriendsPlus/Page62/E1/9.jpg' },
                { url: 'img/FriendsPlus/Page62/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page62/Audio/hinh4-e1-p62.mp3' },
                { url: 'img/FriendsPlus/Page62/E1/11.jpg' },
                { url: 'img/FriendsPlus/Page62/E1/12.jpg', audioUrl: 'img/FriendsPlus/Page62/Audio/hinh5-e1-p62.mp3' },
            ]
        ],
    },
    2: { // Exercise num
        unit: 'Unit 8',
        id: 'SB4-U8-P62-E2',
        audio: '',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page62/E2/1.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page62/E3/4.jpg' },

            ]
        ],
    },
    3: { // Exercise num
        unit: 'Unit 8',
        id: 'SB4-U8-P62-E3',
        audio: 'img/FriendsPlus/Page62/Audio/audio-e3-p62.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page62/E3/1.jpg' },
                { url: 'img/FriendsPlus/Page62/E3/2.jpg', audioUrl: 'img/FriendsPlus/Page62/Audio/tieude-e3-p62.mp3' },
                { url: 'img/FriendsPlus/Page62/E3/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page62/E3/4.jpg' },

            ]
        ],
    },


    4: { // Exercise num
        unit: 'Unit 8',
        id: 'SB4-U8-P62-E4',
        audio: '',
        video: '',
        component: T6,
        textAglin: 'center',
        maxLength: 1,
        exerciseKey: 'img/FriendsPlus/Page62/E4/Key/answerKey.png',
        inputSize: 50,
        titleQuestion: [{ num: '4', title: 'Read again and write T (true) or F (false).' }],
        questionImage: [],
        questions: [
            {
                title:
                    `
                    <div style='display:flex'>
                        <div style='margin-right:30px'>
                            <div>  <b> 1 </b> You need some noodles. <u style='color:rgb(82,197,235)'> F </u></div>
                            <div>  <b> 3 </b> You need some mushrooms. #</div>
                            <div>  <b> 5 </b> You fry the chicken in a pan. #</div>

                        </div>
                        <div>
                            <div>  <b> 2 </b> You need some chicken.  #</div>
                            <div>  <b> 4 </b> You cook the pastry in the pot. #</div>
                            <div>  <b> 6 </b> You put everything under the pastry. #</div>
                        </div>
                        
                    </div>
                    
          `,
                answer: [
                    "T",
                    "T",
                    "T",
                    "F",
                    "F",
                ],
                // type: 'longAnwser'
            },
        ]
    },

}

export default json