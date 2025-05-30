

import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';

const json = {

  1: { // Exercise num
    unit: 'Unit 9',
    id: 'SB4-U9-P67-E1',
    audio: 'img/FriendsPlus/Page67/Audio/audio-e1-p67.mp3',
    video: '',
    component: UI,
    recorder: true,
    exerciseKey: 'img/FriendsPlus/Page67/E1/Key/answerKey.png',
    questionImage: [ // Row
      [
        // Column2
        { url: 'img/FriendsPlus/Page67/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page67/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page67/Audio/tieude-e1-p67.mp3' },
        { url: 'img/FriendsPlus/Page67/E1/3.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page67/E1/4.jpg' },

      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page67/E1/5.jpg', audioUrl: 'img/FriendsPlus/Page67/Audio/rain.mp3' },
        { url: 'img/FriendsPlus/Page67/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page67/Audio/train.mp3' },
        { url: 'img/FriendsPlus/Page67/E1/7.jpg', audioUrl: 'img/FriendsPlus/Page67/Audio/monday.mp3' },
        { url: 'img/FriendsPlus/Page67/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page67/Audio/tray.mp3' },
        { url: 'img/FriendsPlus/Page67/E1/9.jpg', audioUrl: 'img/FriendsPlus/Page67/Audio/case.mp3' },
        { url: 'img/FriendsPlus/Page67/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page67/Audio/race.mp3' },

      ],
    ],
  },
  2: { // Exercise num
    unit: 'Unit 9',
    id: 'SB4-U9-P67-E2',
    audio: 'img/FriendsPlus/Page67/Audio/audio-e2-p67.mp3',
    video: '',
    component: UI,
    exerciseKey: '',
    questionImage: [ // Row
      [
        // Column2
        { url: 'img/FriendsPlus/Page67/E2/1.jpg' },
        { url: 'img/FriendsPlus/Page67/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page67/Audio/tieude-e2-p67.mp3' },
        { url: 'img/FriendsPlus/Page67/E2/3.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page67/E2/4.jpg' },

      ]
    ],
  },

  3: { // Exercise num
    unit: 'Unit 9',
    id: 'SB4-U9-P67-E3',
    audio: '',
    video: '',
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page67/E3/Key/answerKey.png',
    titleQuestion: [{ num: '3', title: 'Read the chant again. Circle the words with ai, ay, and a_e.', color: "#5B5A5D" }],
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
          'It’s',//1
          'today,',//1
          'And I can play.',

          'Outside there’s rain,',
          'But I’m in with my trains',

          'I open my case,',
          'And the trains have a race!',
        ],
        answers: ['1-0', '2-6', '3-4', '4-10', '5-6', '6-4', '6-10'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1100px;position:relative'>
            <img src="img/FriendsPlus/Page67/E3/1.jpg" style="width: 100%" />
            <div style='position: absolute;top: 33px;left:68% ; text-align: center;'>
              <div style='letter-spacing: 0px;'>
                  <div>
                      <input id='0' type='Circle' /> 
                      <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"> Monday</span> 
                      <input id='1' type='Circle' /> 
                  </div>
                   <div> <input id='2' type='Circle' />  </div>
                   <br>
                   <div> <input id='3' type='Circle' />  </div>
                   <div> <input id='4' type='Circle' />  </div>
                   <br>
                   <div> <input id='5' type='Circle' />  </div>
                   <div> <input id='6' type='Circle' />  </div>
              </div>
            </div>
          
        </div>
      `,
    },
  },

  4: { // Exercise num
    unit: 'Unit 9',
    id: 'SB4-U9-P67-E4',
    audio: '',
    video: '',
    component: D1,
    exerciseKey: 'img/FriendsPlus/Page67/E4/Key/answerKey.png',
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page67/E4/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page67/E4/2.jpg' },
        { url: 'img/FriendsPlus/Page67/E4/3.jpg', input: true, answer: "rain" },
        { url: 'img/FriendsPlus/Page67/E4/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page67/E4/5.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page67/E4/6.jpg' },
        { url: 'img/FriendsPlus/Page67/E4/7.jpg', input: true, answer: "case" },
        { url: 'img/FriendsPlus/Page67/E4/8.jpg' },
        { url: 'img/FriendsPlus/Page67/E4/9.jpg', input: true, answer: "tray" },
        { url: 'img/FriendsPlus/Page67/E4/10.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page67/E4/11.jpg' },
      ],
      [
        // Column6
        { url: 'img/FriendsPlus/Page67/E4/12.jpg' },
        { url: 'img/FriendsPlus/Page67/E4/13.jpg', input: true, answer: "train" },
        { url: 'img/FriendsPlus/Page67/E4/14.jpg' },
        { url: 'img/FriendsPlus/Page67/E4/15.jpg', input: true, answer: "race" },
        { url: 'img/FriendsPlus/Page67/E4/16.jpg' },
      ],


    ],
  },
  5: { // Exercise num
    unit: 'Unit 9',
    id: 'SB4-U9-P67-E5',
    audio: '',
    video: '',
    recorder: true,
    component: UI,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page67/E5/1.jpg' },
      ]
    ],
  },


}
export default json;
