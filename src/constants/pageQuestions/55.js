import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';
import D1 from '../../components/ExcerciseTypes/Design/TypeIn';

const json = {
    1: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P55-E1',
        audio: 'img/FriendsPlus/Page55/Audio/audio-e1-p55.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page55/E1/1.jpg' },
                { url: 'img/FriendsPlus/Page55/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/tieude-e1-p55.mp3' },
                { url: 'img/FriendsPlus/Page55/E1/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page55/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/ld.mp3' },
                { url: 'img/FriendsPlus/Page55/E1/5.jpg' },
                { url: 'img/FriendsPlus/Page55/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/lt.mp3' },
                { url: 'img/FriendsPlus/Page55/E1/7.jpg' },
            ],
            [
                // Column3
                { url: 'img/FriendsPlus/Page55/E1/8.jpg' },
                { url: 'img/FriendsPlus/Page55/E1/9.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/child.mp3' },
                { url: 'img/FriendsPlus/Page55/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/shield.mp3' },
                { url: 'img/FriendsPlus/Page55/E1/11.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/field.mp3' },
                { url: 'img/FriendsPlus/Page55/E1/12.jpg' },
                { url: 'img/FriendsPlus/Page55/E1/13.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/belt.mp3' },
                { url: 'img/FriendsPlus/Page55/E1/14.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/quilt.mp3' },
                { url: 'img/FriendsPlus/Page55/E1/15.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/adult.mp3' },
            ],
            [
                // Column4
                { url: 'img/FriendsPlus/Page55/E1/16.jpg' },
            ],


        ],
    },
    2: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P55-E2',
        audio: 'img/FriendsPlus/Page55/Audio/audio-e2-p55.mp3',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page55/E2/1.jpg' },
                { url: 'img/FriendsPlus/Page55/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page55/Audio/tieude-e2-p55.mp3' },
                { url: 'img/FriendsPlus/Page55/E2/3.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page55/E2/4.jpg' },

            ]
        ],
    },
    3: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P55-E3',
        audio: '',
        video: '',
        recorder: false,
        component: Circle_Write,
        exerciseKey: 'img/FriendsPlus/Page55/E3/Key/answerKey.png',
        titleQuestion: [{ num: '3', title: 'Read the chant again. circle the words with ld and lt', color: "#5B5A5D" }],
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
                    'A',//1
                    'and an adult,',//1
                    'Are standing in a field.',
                    'The adult has a quilt.',

                    'The child has a shield.',
                    'The quilt is red,',
                    'The shield is gray.',
                    'The adult sits down,',
                    'But the child wants to play.'
                ],
                answers: ['1-4', '2-8', '3-2', '3-8', '4-2', '4-8', '5-2', '6-2', '7-2', '8-4'],
                initialValue: [],
            },
            Layout: `
            <div style='width: 1300px;'>
                <img src="img/FriendsPlus/Page55/E3/1.jpg" style="width: 100%" />
                <div style='position: absolute;top: 130px;left:63% ; text-align: center;'>
                  <div style='letter-spacing: 0px;'>
                      <div>
                        <input id='0' type='Circle' />
                        <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"> child</span> 
                        <input id='1' type='Circle' />
                      </div>
                       <div> <input id='2' type='Circle' />  </div>
                       <div> <input id='3' type='Circle' />  </div>
                       <div> <input id='4' type='Circle' />  </div>
                       <br>
                       <div> <input id='5' type='Circle' />  </div>
                       <div> <input id='6' type='Circle' />  </div>
                       <div> <input id='7' type='Circle' />  </div>
                       <div> <input id='8' type='Circle' />  </div>
                  </div>
                </div>
              
            </div>
          `,
        },
    },
    4: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P55-E4',
        audio: '',
        video: '',
        component: D1,
        exerciseKey: 'img/FriendsPlus/Page55/E4/Key/answerKey.png',
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page55/E4/1.jpg' },
            ],
            [
                // Column2
                { url: 'img/FriendsPlus/Page55/E4/2.jpg' },
                { url: 'img/FriendsPlus/Page55/E4/3.jpg', input: true, answer: "child" },
                { url: 'img/FriendsPlus/Page55/E4/4.jpg' },
            ],
            [
                // Column3
                { url: 'img/FriendsPlus/Page55/E4/5.jpg' },
            ],
            [
                // Column4
                { url: 'img/FriendsPlus/Page55/E4/6.jpg' },
                { url: 'img/FriendsPlus/Page55/E4/7.jpg', input: true, answer: "quilt" },
                { url: 'img/FriendsPlus/Page55/E4/8.jpg' },
            ],
            [
                // Column5
                { url: 'img/FriendsPlus/Page55/E4/9.jpg' },
            ],
            [
                // Column6
                { url: 'img/FriendsPlus/Page55/E4/10.jpg' },
                { url: 'img/FriendsPlus/Page55/E4/11.jpg', input: true, answer: "field" },
                { url: 'img/FriendsPlus/Page55/E4/12.jpg' },
            ],
            [
                // Column7
                { url: 'img/FriendsPlus/Page55/E4/13.jpg' },
            ],
            [
                // Column8
                { url: 'img/FriendsPlus/Page55/E4/14.jpg' },
                { url: 'img/FriendsPlus/Page55/E4/15.jpg', input: true, answer: "shield" },
                { url: 'img/FriendsPlus/Page55/E4/16.jpg' },
            ],
            [
                // Column9
                { url: 'img/FriendsPlus/Page55/E4/17.jpg' },
            ],
            [
                // Column10
                { url: 'img/FriendsPlus/Page55/E4/18.jpg' },
                { url: 'img/FriendsPlus/Page55/E4/19.jpg', input: true, answer: "adult" },
                { url: 'img/FriendsPlus/Page55/E4/20.jpg' },
            ],
            [
                // Column11
                { url: 'img/FriendsPlus/Page55/E4/21.jpg' },
            ],



        ],
    },
    5: { // Exercise num
        unit: 'Unit 7',
        id: 'SB4-U7-P55-E5',
        audio: '',
        video: '',
        component: UI,
        recorder: true,
        questionImage: [ // Row
            [
                // Column1
                { url: 'img/FriendsPlus/Page55/E5/1.jpg' },

            ]
        ],
    },



}

export default json;