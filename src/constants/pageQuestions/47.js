import D1 from '../../components/ExcerciseTypes/Design/TypeIn';
import UI from '../../components/ExcerciseTypes/Design/UserInterface';
import Circle_Write from '../../components/ExcerciseTypes/Circle_Write';

const json = {
  1: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P47-E1',
    audio: 'img/FriendsPlus/Page47/Audio/audio-e1-p47.mp3',
    video: '',
    component: D1,
    padding: 0,
    textAlign: 'center',
    maxLength: 1,
    exerciseKey: 'img/FriendsPlus/Page47/E1/Key/answerKey.png',
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page47/E1/1.jpg' },
        { url: 'img/FriendsPlus/Page47/E1/2.jpg', audioUrl: 'img/FriendsPlus/Page47/Audio/tieude-e1-p47.mp3' },
        { url: 'img/FriendsPlus/Page47/E1/3.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page47/E1/4.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page47/E1/5.jpg' },
        { url: 'img/FriendsPlus/Page47/E1/6.jpg', input: true, answer: "4" },
        { url: 'img/FriendsPlus/Page47/E1/7.jpg' },
        { url: 'img/FriendsPlus/Page47/E1/8.jpg', input: true, answer: "5" },
        { url: 'img/FriendsPlus/Page47/E1/9.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page47/E1/10.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page47/E1/11.jpg' },
        { url: 'img/FriendsPlus/Page47/E1/12.jpg', input: true, answer: "3" },
        { url: 'img/FriendsPlus/Page47/E1/13.jpg' },
        { url: 'img/FriendsPlus/Page47/E1/14.jpg', input: true, answer: "2" },
        { url: 'img/FriendsPlus/Page47/E1/15.jpg' },
      ],
      [
        // Column6
        { url: 'img/FriendsPlus/Page47/E1/16.jpg' },
      ],


    ],
  },
  2: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P47-E2',
    audio: '',
    video: '',
    recorder: true,
    component: UI,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page47/E2/1.jpg' },

      ]
    ],
  },
  3: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P47-E3',
    audio: '',
    video: '',
    component: Circle_Write,
    exerciseKey: 'img/FriendsPlus/Page47/E3/Key/answerKey.png',
    // titleQuestion: [{ num: '32', title: 'Read the chant again. Circle the words with ow and ou.', color: "#5B5A5D" }],
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
          'lives in',//1
          'Mrs.Thanh is my new teacher.',//1
          'Carlos is from Mexico',//1
        ],
        answers: ['1-0', '1-8', '2-0', '2-6'],
        initialValue: [],
      },
      Layout: `
        <div style='width: 1100px;'>
            <div>
              <img src="img/FriendsPlus/Page47/E3/1.jpg" style="width: 100%" />
            </div>
            <div style='position: absolute;top: 10%;left: 50%;'>
              <h1 style='color:#1d1915'><b style='color:#223d97 ;'>3</b>  Read and circle the proper nouns.</h1>
              <div style='margin-left: 30px;letter-spacing: 4px;'>
                  <div>
                    <b>1 </b> <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;">   Thi</span> 
                    <input id='0' type='Circle' />    
                    <span style="border: 2px solid rgb(0, 168, 236);padding: 3px;border-radius: 50%;">Viet Nam</span>     
                  </div>
                   <div> <b>2 </b> <input id='1' type='Circle' /></div>
                   <div> <b>3 </b> <input id='2' type='Circle' /></div>
              </div>
            </div>
          
        </div>
      `,
    },
  },
  4: { // Exercise num
    unit: 'Unit 6',
    id: 'SB4-U6-P47-E4',
    audio: '',
    video: '',
    component: D1,
    hideBtnFooter: true,
    questionImage: [ // Row
      [
        // Column1
        { url: 'img/FriendsPlus/Page47/E4/1.jpg' },
      ],
      [
        // Column2
        { url: 'img/FriendsPlus/Page47/E4/2.jpg' },
      ],
      [
        // Column3
        { url: 'img/FriendsPlus/Page47/E4/3.jpg' },
        { url: 'img/FriendsPlus/Page47/E4/4.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page47/E4/5.jpg' },
      ],
      [
        // Column4
        { url: 'img/FriendsPlus/Page47/E4/6.jpg' },
        { url: 'img/FriendsPlus/Page47/E4/7.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page47/E4/8.jpg' },
      ],
      [
        // Column5
        { url: 'img/FriendsPlus/Page47/E4/9.jpg' },
        { url: 'img/FriendsPlus/Page47/E4/10.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page47/E4/11.jpg' },
      ],
      [
        // Column6
        { url: 'img/FriendsPlus/Page47/E4/12.jpg' },
        { url: 'img/FriendsPlus/Page47/E4/13.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page47/E4/14.jpg' },
      ],
      [
        // Column7
        { url: 'img/FriendsPlus/Page47/E4/15.jpg' },
        { url: 'img/FriendsPlus/Page47/E4/16.jpg', input: true, answer: "" },
        { url: 'img/FriendsPlus/Page47/E4/17.jpg' },
      ],
      [
        // Column8
        { url: 'img/FriendsPlus/Page47/E4/18.jpg' },
      ],
    ],
  },

}

export default json;