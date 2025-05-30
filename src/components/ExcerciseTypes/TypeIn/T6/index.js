/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import styles from './styles.module.css';
import { Row, Input, Container, Modal, ModalBody, Button } from 'reactstrap';
import 'video-react/dist/video-react.css';
import ReactHtmlParser from 'react-html-parser';
import TitleQuestion from '../../../TitleQuestion';
import FooterIeltsMindset from '../../../FooterModal';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Player, BigPlayButton, ControlBar, ClosedCaptionButton, ReplayControl, ForwardControl, CurrentTimeDisplay } from 'video-react';
import moment from 'moment';
import Firework from '../../../ResultsAndEffects/fireworks.js';
import Animate from '../../../Animate';
import 'moment/locale/vi';
moment.locale('vi');

const TypeIn6 = (props) => {

  // const inputTag = '#';

  const inputCount = React.useRef(0);

  const [form] = Form.useForm();

  const [state, setState] = React.useState({
    star: 0,
    audioUrl: null,
    videoUrl: null,
    sentences: null,
    isPointed: false,
    studentAnswer: null,
    videoVisible: false,
    isDisabledRetry: true,
    isDisabledSubmit: true,
    booleanArray: [],
  });

  const [modal, setModal] = useState(false);


  React.useEffect(() => {
    const sentences = JSON.parse(JSON.stringify(props.questions));
    sentences.titleImage = props.titleImage
    sentences.titleQuestion = props.titleQuestion
    const audioUrl = props.audio
    const videoUrl = props.video
    const maxInput = sentences[0].answer.length
    const inputArray = new Array(maxInput).fill()
    //thay thế dấu # thành thẻ input
    sentences[0].title = sentences[0].title.replaceAll('#', '<input/>')
    //
    inputCount.current = 0;

    setState((prevState) => ({ ...prevState, sentences, audioUrl, videoUrl, inputArray, maxInput }))
  }, [props])


  const toggleState = React.useCallback((fieldName) => () => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  }, []);

  const onPlayVideo = React.useCallback(() => {
    toggleState('videoVisible')();
  }, [toggleState])

  const onModal = React.useCallback(() => {
    setModal(true)
    setTimeout(() => {
      setModal(false);
    }, 3000);
  }, []);

  const onSubmit = React.useCallback(() => {
    form.submit();
    // setState(pre => ({ ...pre, isDisabledSubmit: true }))
    // show Modal Start
    onModal()
  }, [form, onModal])

  const onRetry = React.useCallback(() => {
    form.resetFields();
    setState((preState) => ({ ...preState, isDisabledInput: false, isDisabledRetry: true, isPointed: false, resultString: null, isDisabledSubmit: true, booleanArray: [], inputArray: new Array(state.maxInput).fill() }));
  }, [form, state.maxInput])

  // Khi hoàn thành các field
  const onFinish = React.useCallback((value) => {
    const studentAnswer = Object.values(value);
    const Answers = state.sentences[0].answer.map((item) => item.split('/'))
    let arrayChecked = [];
    const booleanArray = Answers.map((item, index) => {
      //check nhập đáp án giống nhau => false
      if (props.checkDuplicated) {
        const isDuplicated = arrayChecked.includes(studentAnswer[index]);
        if (isDuplicated) return false;
      }
      arrayChecked.push(studentAnswer[index]);
      //
      if (!item[0]) return true; //answer: "", luôn đúng
      //
      if (item[0] === 'none') return !studentAnswer[index]; // vị trí cần bỏ trống => true
      //
      return item.some(x => props.checkUppercase
        ? x.trim() === studentAnswer[index].trim() // chữ hoa khác chữ thường
        : x.trim().toLowerCase().replace(/(\W+)$/g, '') === studentAnswer[index].trim().toLowerCase().replace(/(\W+)$/g, '') // ko phân biệt hoa thường, bỏ dấu cuối câu
      );
    });
    const correctAnswer = booleanArray.filter(x => x).length;
    const percent = parseInt(correctAnswer / booleanArray.length * 100)
    const resultString = `${correctAnswer}/${booleanArray.length}`
    const star = percent / 20;


    const params = {
      score: percent,
      unit: props.unit,
      results: resultString,
      exerciseId: props.id,
      sreatedDate: moment().format(),
      studentAnswer: JSON.stringify(studentAnswer),
    }
    props.postAnswerToApi(params)
    setState((preState) => ({
      ...preState,
      resultString,
      isPointed: true,
      booleanArray,
      isDisabledRetry: false,
      sentences: state.sentences,
    }))
    // onModal()
    setState((prevState) => ({ ...prevState, isDisabledSubmit: true, booleanArray, studentAnswer: value, star }))
  }, [props, state.sentences])
  //kiểm tra các field
  const handleChange = React.useCallback((changedValues, allValues) => {
    // const isDisabledSubmit = allValues.some(item => !item.value) // tìm field còn trống
    const count_answer_none = state.sentences[0].answer.filter(x => x === 'none').length;
    const count_input_empty = allValues.filter(item => !item.value).length;

    const isDisabledSubmit = count_input_empty > count_answer_none;
    setState(pre => ({ ...pre, isDisabledSubmit }))
  }, [state])

  const transform = React.useCallback((node, index) => {

    if (node.type === "tag" && node.name === "input") { //render tag Input
      const maxInput = state.maxInput;
      let currentInputNo = inputCount.current;

      inputCount.current++;
      if (inputCount.current >= maxInput) {
        inputCount.current = 0;
      }
      //
      let Color = 'black';
      if (state.isPointed) {
        Color = (state.booleanArray?.[currentInputNo] ? '#2ecc71' : '#e74c3c')
      }
      return (
        <div key={index} style={{ display: 'inline-flex', marginBottom: 0 }}>
          <Form.Item
            className='ml-1 mr-1'
            name={`${currentInputNo}`}
            style={{ marginBottom: 0 }}
            rules={[{ required: !props.hideRulesRequired, message: 'Please fill the answer' },]}
            initialValue=''
          >
            <Input
              maxLength={props.maxLength ?? ''}
              autoComplete='off'
              disabled={state.isPointed}
              className={styles.input}
              style={{
                height: 30,
                width: props.inputSize,
                fontSize: 26,
                fontWeight: '500',
                textTransform: props.textTransform ?? '',
                textAlign: props.textAlign ?? '',
                border: '0px solid #A8A8A8',
                borderRadius: 0,
                borderBottomWidth: '2px',
                padding: 10,
                display: 'inline',
                backgroundColor: 'white',
                boxShadow: 'none',
                color: Color,
                ...props.stylesTextInput
              }}
            />
          </Form.Item>
          {
            (state.isPointed && !props.isHiddenCheck) && (
              state.booleanArray[currentInputNo]
                ? (<CheckCircleOutlined style={{ fontSize: 25, color: '#2ecc71' }} />)
                : (<CloseCircleOutlined style={{ fontSize: 25, color: '#e74c3c' }} />)
            )
          }
        </div>
      );
    };
    if (node.type === "tag" && node.name === "textarea") { //render tag textarea
      const { id, rows, textindent } = node.attribs;
      const { textareaStyle } = props;
      //
      let Color = 'black';
      if (state.isPointed) {
        Color = (state.booleanArray?.[id] ? '#2ecc71' : '#e74c3c')
      }
      textareaStyle.color = Color;
      return (
        <div key={id}>
          <Form.Item name={id} initialValue={node.children[0]?.data}>
            <textarea
              rows={rows}
              className={styles.notes}
              style={{ fontSize: 24, border: 'none', ...props.textareaStyle, textIndent: textindent }}
            >
            </textarea>
          </Form.Item>
        </div>
      );
    };

  }, [props, state.booleanArray, state.isPointed, state.maxInput])

  if (!state.sentences) return null;

  return (
    <Container className='fluid'>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div>
          <Row>
            <TitleQuestion titleQuestion={state.sentences.titleQuestion} />
          </Row>
          <Row>
            {state.sentences.titleImage && (
              <img
                alt='...'
                style={{
                  width: props?.imgSize ?? '100%',
                  marginBottom: 10,
                  position: 'relative',
                  left: '-50px',
                }}
                src={state.sentences.titleImage}
              />
            )}
            {state.videoUrl && (
              <Player>
                <BigPlayButton position="center" />
                <source
                  src={props.video}
                  type="video/mp4"
                  default

                />
                <track
                  kind="captions"
                  src={props.videoSub}
                  srcLang="en"
                  label="English"
                />
                <ControlBar autoHide={false}>
                  <ReplayControl seconds={10} order={1.1} />
                  <ForwardControl seconds={10} order={1.2} />
                  <CurrentTimeDisplay order={4.1} />
                  <ClosedCaptionButton order={7} />
                </ControlBar>
              </Player>

            )}
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
            <Form
              autoComplete="off"
              form={form}
              onFinish={onFinish}
              onFieldsChange={handleChange}
            >
              <div style={{ fontSize: 24, marginBottom: 50 }}>
                {ReactHtmlParser(state.sentences[0].title, { transform })}
              </div>
            </Form>
          </Row>
          <Modal centered isOpen={modal} style={{ maxWidth: 640, }}>
            <ModalBody>
              {/* {renderContent} */}
              {(state.star >= 1) && (
                <Firework />
              )}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 240 }}>
                <Animate
                  resultString={state.star}
                />
              </div>
            </ModalBody>
          </Modal>
        </div>
        {/* <Button
          onClick={() => {
            const res = state.sentences[0].answer.map((item, index) => [index, item]);
            const FieldsValue = Object.fromEntries(res);
            form.setFieldsValue(FieldsValue);
            setState(pre => ({ ...pre, isDisabledSubmit: false }))
          }}
        >
          điền đáp án test
        </Button> */}

        <FooterIeltsMindset
          onRetry={onRetry}
          onSubmit={onSubmit}
          onPlayVideo={onPlayVideo}
          audioUrl={state.audioUrl}
          result={state?.booleanArray}
          exerciseKey={props.exerciseKey}
          isDisabledRetry={state.isDisabledRetry}
          isDisabledSubmit={state.isDisabledSubmit}
          hideBtnFooter={props.hideBtnFooter ?? false}  //not answer
        />
      </div>
    </Container>
  );
};
TypeIn6.propTypes = {
  question: PropTypes.instanceOf(Object),

}
export default React.memo(TypeIn6);
//*********
// version v3 (24/9/21)
