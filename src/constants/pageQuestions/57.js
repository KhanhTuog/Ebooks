import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import DesignUnderLine from '../../components/ExcerciseTypes/Design/DesignUnderLine';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import DrawColor from '../../components/ExcerciseTypes/DrawColor';

const json = {
    1: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P57-E1',
        audio: 'img/FriendsPlus/Page57/Audio/audio-e1-p57.mp3',
        exerciseKey: 'img/FriendsPlus/Page57/E1/Key/answerKey.png',
        video: '',
        component: DesignUnderLine,
        totalInput: 4,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page57/E1/1.jpg' },
                { url: 'img/FriendsPlus/Page57/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page57/Audio/tieude-e1-p57.mp3' },
                { url: 'img/FriendsPlus/Page57/E1/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page57/E1/4.jpg' },
            ],
            [
                // Column3
                { url: 'img/FriendsPlus/Page57/E1/5.jpg' },
                { url: 'img/FriendsPlus/Page57/E1/6.jpg', input: 1, },
                { url: 'img/FriendsPlus/Page57/E1/7.jpg', input: 1, isCorrect: true },
                { url: 'img/FriendsPlus/Page57/E1/8.jpg' },
                { url: 'img/FriendsPlus/Page57/E1/9.jpg', input: 2, isCorrect: true },
                { url: 'img/FriendsPlus/Page57/E1/10.jpg', input: 2, },
                { url: 'img/FriendsPlus/Page57/E1/11.jpg' },
            ],
            [
                // Column4
                { url: 'img/FriendsPlus/Page57/E1/12.jpg' },
            ],
            [
                // Column5
                { url: 'img/FriendsPlus/Page57/E1/13.jpg' },
                { url: 'img/FriendsPlus/Page57/E1/14.jpg', input: 3, isCorrect: true },
                { url: 'img/FriendsPlus/Page57/E1/15.jpg', input: 3, },
                { url: 'img/FriendsPlus/Page57/E1/16.jpg' },
                { url: 'img/FriendsPlus/Page57/E1/17.jpg', input: 4, },
                { url: 'img/FriendsPlus/Page57/E1/18.jpg', input: 4, isCorrect: true },
                { url: 'img/FriendsPlus/Page57/E1/19.jpg' },
            ],
            [
                // Column6
                { url: 'img/FriendsPlus/Page57/E1/20.jpg' },
            ],


        ],
    },
    2: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P57-E2',
        //audio: 'img/FriendsPlus/Page57/Audio/audio.e2.mp3',
        video: '',
        component: D1,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page57/E2/1.jpg' },
            ],

        ],
    },
    3: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P57-E3',
        audio: '',
        video: '',
        component: DrawColor,
        exerciseKey: 'img/FriendsPlus/Page57/E3/Key/answerKey.png',
        // titleQuestion: [{ num: '1', title: 'Circle the correct form of the verb.', color: "#5B5A5D" }],
        question: {
            Write: {
                underlineStyle: {},
                inputStyle: {},
                answers: [],
                initialValue: [],
            },
            Circle: {
                listStyle: {
                    normal: {},
                    red: { padding: 3, border: 'solid 2px', borderRadius: '50%', borderColor: '#cc2c32' },
                    blue: { padding: 3, border: 'solid 2px', borderRadius: '50%', borderColor: '#0b83c9' },
                    green: { padding: 3, border: 'solid 2px', borderRadius: '50%', borderColor: '#3eac54' },
                    //   underline: { borderBottom: '2px solid gray' },
                    // square: { padding: 3, border: 'solid 2px', borderColor: '#4285F4' },
                },
                // limitSelect: 1,
                listWords: [
                    "I live in a small apartment.",	//0
                    "I go to the beach on sunny days.",	//1
                ],
                answers: { '0-2': 'red', '0-8': 'blue', '0-4': 'green', '1-2': 'red', '1-12': 'blue', '1-4': 'green', '1-10': 'green' },
                initialValue: {},
            },
            Layout: `
          <div style="line-height: 50px;position: relative;">
              <img src="img/FriendsPlus/Page57/E3/1.jpg" />
              <div style="position: absolute; top:173px; left: 399px;">
                <div><b> 2 </b> <input id='0' type='Circle' /></div>
                <div><b> 3 </b><input id='1' type='Circle' /></div>
              </div>
          </div>
          `,
        },
    },
    4: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P57-E4',
        audio: '',
        video: '',
        component: D1,
        hideBtnFooter: true,
        question: [
        ],
        questionImage: [
            [
                // Column1
                { url: 'img/FriendsPlus/Page57/E4/1.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page57/E4/2.jpg' },
                { url: 'img/FriendsPlus/Page57/E4/3.jpg', input: true, answer: "" },
                { url: 'img/FriendsPlus/Page57/E4/4.jpg' },
            ],
            [
                // Column3
                { url: 'img/FriendsPlus/Page57/E4/5.jpg' },
                { url: 'img/FriendsPlus/Page57/E4/6.jpg', input: true, answer: "" },
                { url: 'img/FriendsPlus/Page57/E4/7.jpg' },
            ],
            [
                // Column4
                { url: 'img/FriendsPlus/Page57/E4/8.jpg' },
                { url: 'img/FriendsPlus/Page57/E4/9.jpg', input: true, answer: "" },
                { url: 'img/FriendsPlus/Page57/E4/10.jpg' },
            ],
            [
                // Column5
                { url: 'img/FriendsPlus/Page57/E4/11.jpg' },
            ],

        ]
    },



}

export default json;