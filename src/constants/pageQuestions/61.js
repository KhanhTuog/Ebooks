
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';
import DesignUnderLine from '../../components/ExcerciseTypes/Design/DesignUnderLine';

const json = {

  1: { // Exercise num
    unit: 'Unit 8',
    id: 'SB4-U8-P61-E1',
    audio: 'img/FriendsPlus/Page61/Audio/audio-e1-p61.mp3',
    video: '',
    component: UI,
    recorder: true,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page61/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page61/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/tieude-e1-p61.mp3' },
        { url: 'img/FriendsPlus/Page61/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page61/E1/4.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/nd.mp3' },
        { url: 'img/FriendsPlus/Page61/E1/5.jpg' },
        { url: 'img/FriendsPlus/Page61/E1/6.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/nt.mp3' },
        { url: 'img/FriendsPlus/Page61/E1/7.jpg' },
        { url: 'img/FriendsPlus/Page61/E1/8.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/mp.mp3' },
        { url: 'img/FriendsPlus/Page61/E1/9.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page61/E1/10.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/hand.mp3' },
        { url: 'img/FriendsPlus/Page61/E1/11.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/pond.mp3' },
        { url: 'img/FriendsPlus/Page61/E1/12.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/plant.mp3' },
        { url: 'img/FriendsPlus/Page61/E1/13.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/tent.mp3' },
        { url: 'img/FriendsPlus/Page61/E1/14.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/lamp.mp3' },
        { url: 'img/FriendsPlus/Page61/E1/15.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/camp.mp3' },
      ],


    ]
  },
  2: { // Exercise num
    unit: 'Unit 8',
    id: 'SB4-U8-P61-E2',
    audio: 'img/FriendsPlus/Page61/Audio/audio-e2-p61.mp3',
    video: '',
    component: UI,
    recorder: true,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page61/E2/1.jpg' },
        { url: 'img/FriendsPlus/Page61/E2/2.jpg', audioUrl: 'img/FriendsPlus/Page61/Audio/tieude-e2-p61.mp3' },
        { url: 'img/FriendsPlus/Page61/E2/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page61/E2/4.jpg' },

      ]

    ]
  },
  3: { // Exercise num
    unit: 'Unit 8',
    id: 'SB4-U8-P61-E3',
    audio: '',
    video: '',
    recorder: false,
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page61/E3/Key/answerKey.png',
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
          'We put up the',//1
          'At the big, big camp.',//1
          'We hear the wind.',
          'We light the lamp.',

          'We sit by the pond.',
          'We look at the plants.',
          'We’re happy together,',
          'Just me and my aunt.',
        ],
        answers: ['1-8', '2-6', '3-6', '4-8', '5-8', '7-8'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1300px;position:relative'>
            <img src="img/FriendsPlus/Page61/E3/1.jpg" style="width: 100%" />
            <div style='position: absolute;top: 33px;left:71% ; text-align: center;'>
              <div style='letter-spacing: 0px;'>
                  <div>
                    <input id='0' type='Circle' />  <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;"> tent</span> 
                  </div>
                   <div> <input id='1' type='Circle' />  </div>
                   <div> <input id='2' type='Circle' />  </div>
                   <div> <input id='3' type='Circle' />  </div>
                   <br>
                   <div> <input id='4' type='Circle' />  </div>
                   <div> <input id='5' type='Circle' />  </div>
                   <div> <input id='6' type='Circle' />  </div>
                   <div> <input id='7' type='Circle' />  </div>
              </div>
            </div>
          
        </div>
      `,
    },
  },
  4: { // Exercise num
    unit: 'Unit 8',
    id: 'SB4-U8-P61-E4',
    audio: '',
    exerciseKey: 'img/FriendsPlus/Page61/E4/Key/answerKey.png',
    video: '',
    component: DesignUnderLine,
    totalInput: 5,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page61/E4/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page61/E4/2.jpg' },
        { url: 'img/FriendsPlus/Page61/E4/3.jpg', input: 1, isCorrect: true },
        { url: 'img/FriendsPlus/Page61/E4/4.jpg', input: 1, },
        { url: 'img/FriendsPlus/Page61/E4/5.jpg', input: 1, },
        { url: 'img/FriendsPlus/Page61/E4/6.jpg' },
        { url: 'img/FriendsPlus/Page61/E4/7.jpg', input: 2, isCorrect: true },
        { url: 'img/FriendsPlus/Page61/E4/8.jpg', input: 2, },
        { url: 'img/FriendsPlus/Page61/E4/9.jpg', input: 2, },
        { url: 'img/FriendsPlus/Page61/E4/10.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page61/E4/11.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page61/E4/12.jpg' },
        { url: 'img/FriendsPlus/Page61/E4/13.jpg', input: 3, },
        { url: 'img/FriendsPlus/Page61/E4/14.jpg', input: 3, isCorrect: true },
        { url: 'img/FriendsPlus/Page61/E4/15.jpg', input: 3, },
        { url: 'img/FriendsPlus/Page61/E4/16.jpg' },
        { url: 'img/FriendsPlus/Page61/E4/17.jpg', input: 4, },
        { url: 'img/FriendsPlus/Page61/E4/18.jpg', input: 4, },
        { url: 'img/FriendsPlus/Page61/E4/19.jpg', input: 4, isCorrect: true },
        { url: 'img/FriendsPlus/Page61/E4/20.jpg' },
        { url: 'img/FriendsPlus/Page61/E4/21.jpg', input: 5, },
        { url: 'img/FriendsPlus/Page61/E4/22.jpg', input: 5, },
        { url: 'img/FriendsPlus/Page61/E4/23.jpg', input: 5, isCorrect: true },
        { url: 'img/FriendsPlus/Page61/E4/24.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page61/E4/25.jpg' },
      ],



    ],
  },
  5: { // Exercise num
    unit: 'Unit 8',
    id: 'SB4-U8-P61-E5',
    audio: '',
    video: '',
    component: UI,
    recorder: true,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page61/E5/1.jpg' },

      ]
    ]
  },



}
export default json