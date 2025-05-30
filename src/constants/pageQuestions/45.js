import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';

const json = {
    1: { // Exercise num
        unit: 'Unit 6',
        id: 'SB4-U6-P45-E1',
        audio: 'img/FriendsPlus/Page45/Audio/audio-e1-p45.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page45/E1/1.jpg' },
                { url: 'img/FriendsPlus/Page45/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page45/Audio/tieude-e1-p45.mp3' },
                { url: 'img/FriendsPlus/Page45/E1/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page45/E1/4.jpg' },
            ],
            [
                // Column3
                { url: 'img/FriendsPlus/Page45/E1/5.jpg' },
                { url: 'img/FriendsPlus/Page45/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page45/Audio/cow.mp3' },
                { url: 'img/FriendsPlus/Page45/E1/7.jpg', audioUrl: 'img/FriendsPlus/Page45/Audio/clown.mp3' },
                { url: 'img/FriendsPlus/Page45/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page45/Audio/flower.mp3' },
                { url: 'img/FriendsPlus/Page45/E1/9.jpg' },
                { url: 'img/FriendsPlus/Page45/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page45/Audio/house.mp3' },
                { url: 'img/FriendsPlus/Page45/E1/11.jpg', audioUrl: 'img/FriendsPlus/Page45/Audio/round.mp3' },
                { url: 'img/FriendsPlus/Page45/E1/12.jpg', audioUrl: 'img/FriendsPlus/Page45/Audio/mouse.mp3' },
                { url: 'img/FriendsPlus/Page45/E1/13.jpg' },
            ],
            [
                // Column4
                { url: 'img/FriendsPlus/Page45/E1/14.jpg' },
            ],
        ],
    },
    2: { // Exercise num
        unit: 'Unit 6',
        id: 'SB4-U6-P45-E2',
        audio: 'img/FriendsPlus/Page45/Audio/audio-e2-p45.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page45/E2/1.jpg' },
                { url: 'img/FriendsPlus/Page45/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page45/Audio/tieude-e2-p45.mp3' },
                { url: 'img/FriendsPlus/Page45/E2/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page45/E2/4.jpg' },
            ],
        ],
    },
    3: { // Exercise num
        unit: 'Unit 6',
        id: 'SB4-U6-P45-E3',
        audio: '',
        video: '',
        component: Circle_Write,
        exerciseKey: 'img/FriendsPlus/Page45/E3/Key/answerKey.png',
        titleQuestion: [{ num: '3', title: 'Read the chant again. Circle the words with ow and ou.', color: "#5B5A5D" }],
        question: {
            Write: {
                inputStyle: {},
                answers: [],
                initialValue: [],
            },
            Circle: {
                // initialWordStyle: { margin: '5px 0', border: 'solid 2px', borderColor: 'black', borderRadius: '50%', padding: '0 5px' },
                initialWordStyle: { margin: '5px 0', border: 'none', borderColor: 'transparent', borderRadius: '50%' },
                selectWordStyle: { border: 'solid 2px', borderColor: '#00a8ec', margin: '-2px' },
                // limitSelect: 1,
                listWords: [
                    'The',//1
                    'has flowers,',//1
                    'Red  and  blue.',//1
                    'He has a round nose,',//2
                    'But only one shoe.',//3

                    'He has orange hair,',//4
                    'He\'s  in his house.',//5
                    'He jumps on a chair,',//5
                    'He\'s scared of a mouse!',//5
                ],
                answers: ['1-2', '3-6', '6-8', '8-8'],
                initialValue: [],
            },
            Layout: `
            <div style='background-color: #def1ff; display:flex;border: 14px solid #ffe4b7;border-radius: 10px;justify-content: space-around;align-items: center;width: 1000px;'>
                <div>
                     <img src="img/FriendsPlus/Page45/E3/1.png" style="width: 150%" />
                </div>
              <div style='margin-left: 20px;'>
                <div> <input id='0' type='Circle' />     <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;">clown</span>      <input id='1' type='Circle' /> </div>
                
                <div><input id='2' type='Circle' /></div>
                <div><input id='3' type='Circle' /></div>
                <div><input id='4' type='Circle' /></div>
              </div>
              <div>
                <div><input id='5' type='Circle' /></div>
                <div><input id='6' type='Circle' /></div>
                <div><input id='7' type='Circle' /></div>
                <div><input id='8' type='Circle' /></div>
              </div>
            </div>
          `,
        },
    },
    4: { // Exercise num
        unit: 'Unit 6',
        id: 'SB4-U6-P45-E4',
        audio: '',
        video: '',
        component: Circle_Write,
        exerciseKey: 'img/FriendsPlus/Page45/E4/Key/answerKey.png',
        titleQuestion: [{ num: '4', title: 'Circle the odd-one-out.', color: "#5B5A5D" }],
        question: {
            Write: {
                inputStyle: {},
                answers: [],
                initialValue: [],
            },
            Circle: {
                // initialWordStyle: { margin: '5px 0', border: 'solid 2px', borderColor: 'black', borderRadius: '50%', padding: '0 5px' },
                initialWordStyle: { margin: '5px 27px 5px 0', border: 'none', borderColor: 'transparent', borderRadius: '50%', },
                selectWordStyle: { border: 'solid 2px', borderColor: '#00a8ec', margin: '0 25px 0 -2px' },
                limitSelect: 1,
                listWords: [
                    'flower    house    mouse',//3

                    'clown    cow       round',//2
                    'round    clown    house',//4
                ],
                answers: ['1-22', '0-0', '2-8'],
                initialValue: [],
            },
            Layout: `
            <div style=' display:flex;justify-content: space-around;align-items: center;width: 1000px;'>
              <div style='margin-left: 20px;'>
                <div> <b>1  &ensp;</b> cow  &ensp;&ensp;&ensp;&ensp;<span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;">house</span>&ensp;&ensp; &ensp; flower </div>
                
                <div> <b>3 &ensp; </b> <input id='0' type='Circle' /></div>
              </div>
              <div>
                <div> <b>2  &ensp;</b>  <input id='1' type='Circle' /></div>
                <div> <b>4  &ensp;</b>  <input id='2' type='Circle' /></div>
              </div>
            </div>
          `,
        },
    },
    5: { // Exercise num
        unit: 'Unit 6',
        id: 'SB4-U6-P45-E5',
        audio: '',
        video: '',
        checkDuplicated: true,
        component: D1,
        exerciseKey: 'img/FriendsPlus/Page45/E5/Key/answerKey.png',
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page45/E5/1.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page45/E5/2.jpg' },
                { url: 'img/FriendsPlus/Page45/E5/3.jpg', input: true, answer: "down/clown/flower" },
                { url: 'img/FriendsPlus/Page45/E5/4.jpg' },
            ],
            [
                // Column3
                { url: 'img/FriendsPlus/Page45/E5/5.jpg' },
                { url: 'img/FriendsPlus/Page45/E5/6.jpg', input: true, answer: "down/clown/flower" },
                { url: 'img/FriendsPlus/Page45/E5/7.jpg' },
                { url: 'img/FriendsPlus/Page45/E5/8.jpg', input: true, answer: "down/clown/flower" },
                { url: 'img/FriendsPlus/Page45/E5/9.jpg' },
            ],
            [
                // Column4
                { url: 'img/FriendsPlus/Page45/E5/10.jpg' },
            ],
            [
                // Column5
                { url: 'img/FriendsPlus/Page45/E5/11.jpg' },
                { url: 'img/FriendsPlus/Page45/E5/12.jpg', input: true, answer: "out/shout/house/round" },
                { url: 'img/FriendsPlus/Page45/E5/13.jpg' },
                { url: 'img/FriendsPlus/Page45/E5/14.jpg', input: true, answer: "out/shout/house/round" },
                { url: 'img/FriendsPlus/Page45/E5/15.jpg' },
            ],
            [
                // Column6
                { url: 'img/FriendsPlus/Page45/E5/16.jpg' },
                { url: 'img/FriendsPlus/Page45/E5/17.jpg', input: true, answer: "out/shout/house/round" },
                { url: 'img/FriendsPlus/Page45/E5/18.jpg' },
                { url: 'img/FriendsPlus/Page45/E5/19.jpg', input: true, answer: "out/shout/house/round" },
                { url: 'img/FriendsPlus/Page45/E5/20.jpg' },
            ],
            [
                // Column7
                { url: 'img/FriendsPlus/Page45/E5/21.jpg' },
            ],


        ],
    },
    6: { // Exercise num
        unit: 'Unit 6',
        id: 'SB4-U6-P45-E6',
        audio: '',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page45/E6/1.jpg' },

            ],
        ],
    },

}

export default json;