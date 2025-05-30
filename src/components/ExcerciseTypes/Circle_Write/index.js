import React from 'react'
import { Button, Container, Row } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { Form } from 'antd';
import Write, { calculateResultWrite, toFormValues } from './Write';
import TitleQuestion from '../../TitleQuestion';
import Circle, { calculateResultCircle } from './Circle';
import FooterModal from '../../FooterModal';
import StarModal from './StarModal';
import 'moment/locale/vi';
import moment from 'moment';

moment.locale('vi');

function Circle_Write(props) {
  const [form] = Form.useForm();
  const [state, setState] = React.useState({
    booleanArray: [],
    isDisabledRetry: true,
    isDisabledSubmit: true,
  });
  const [Question, setQuestion] = React.useState(null);
  const [modalStar, setModalStar] = React.useState(false);
  //
  React.useEffect(() => {
    const clonedProps = JSON.parse(JSON.stringify(props));
    const question = clonedProps.question;
    //initialCircle
    question.Circle.isDoing = true;
    question.Circle.userAnswers = Array.from(question.Circle.initialValue);
    //initialWrite
    question.Write.isDoing = true;
    question.Write.userAnswers = Array.from(question.Write.initialValue);
    form.resetFields();
    form.setFieldsValue(toFormValues(question.Write.userAnswers)); // nhập giá trị cho form
    //
    const audioUrl = clonedProps.audio;
    const videoUrl = clonedProps.video;
    //update
    setState((prevState) => ({ ...prevState, audioUrl, videoUrl }));
    setQuestion(question);
  }, [form, props]);
  // hiển thị ngôi sao
  const onModalStar = () => {
    setModalStar(true)
    setTimeout(() => { setModalStar(false) }, 3000);
  };
  //
  const onSubmit = React.useCallback(() => {
    const { Circle, Write } = Question;
    //Circle
    Circle.isDoing = false; //
    Circle.resultCircle = calculateResultCircle(Circle.userAnswers, Circle.answers, Circle.listWords, Circle.limitSelect);;
    //Write
    Write.isDoing = false; //
    const values = form.getFieldsValue();
    Write.userAnswers = Object.values(values);
    Write.resultWrite = calculateResultWrite(Write.userAnswers, Write.answers, Write.checkUppercase);
    //State
    const { star, resultString, percent, booleanArray } = calculateResult(Circle.resultCircle.booleanArray, Write.resultWrite.booleanArray);
    const studentAnswer = {
      Write: Write.userAnswers,
      Circle: Circle.userAnswers,
    }
    const params = {
      score: percent,
      unit: props.unit,
      results: resultString,
      exerciseId: props.id,
      sreatedDate: moment().format(),
      studentAnswer: JSON.stringify(studentAnswer),
    }
    console.log("🚀 ~ params", params)
    props.postAnswerToApi(params)
    //update
    setState(pre => ({ ...pre, isDisabledRetry: false, isDisabledSubmit: true, booleanArray, star }));
    setQuestion(pre => ({ ...pre, Circle, Write }));
    onModalStar();
  }, [Question, form, props]);

  const onRetry = React.useCallback(() => {
    const { Circle, Write } = Question;
    //initialCircle
    Circle.isDoing = true; //
    Circle.userAnswers = Array.from(Circle.initialValue);
    //initialWrite
    Write.isDoing = true;
    Write.userAnswers = Array.from(Write.initialValue);
    form.resetFields();
    form.setFieldsValue(toFormValues(Write.userAnswers)); // nhập giá trị cho form
    //initialState
    const booleanArray = [];
    //update
    setState(pre => ({ ...pre, booleanArray, isDisabledRetry: true }));
    setQuestion(pre => ({ ...pre, Circle, Write }));
  }, [Question, form]);

  const transform = React.useCallback((node, index) => {
    if (node.type === "tag" && node.name === 'input' && node.attribs.type === 'Circle') { //render tag input Circle 
      const id_circle = node.attribs.id;
      return < Circle
        key={index}
        id={id_circle}
        data={Question.Circle}
        setData={(data) => setQuestion(pre => ({ ...pre, Circle: data }))}
      />
    }
    if (node.type === "tag" && node.name === 'input') { //render tag input
      const id_input = node.attribs.id;
      return < Write key={index} id={id_input} data={Question.Write} />
    };
  }, [Question]);
  //
  const checkEnableSubmit = React.useCallback(() => {
    //
    setQuestion(question => {
      //check Write
      const formValues = form.getFieldsValue();
      const isWriteDone = Object.values(formValues).every(item => item);
      //check Circle 
      const { Circle } = question;
      const isCircleDone = Circle.userAnswers.length >= Circle.answers.length;
      const isSubmit = isWriteDone && isCircleDone;
      //
      setState(pre => ({ ...pre, isDisabledSubmit: !isSubmit }));
      return question;
    })
  }, [form]);
  //
  const renderContent = React.useCallback(() => {
    const { Layout } = Question;
    return (
      <div style={{ fontSize: 24, marginBottom: 50 }} onClick={checkEnableSubmit}>
        {ReactHtmlParser(Layout, { transform })}
      </div>
    );
  }, [Question, checkEnableSubmit, transform])
  //
  if (!Question) return null;

  return (
    <Container >
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div>
          <Row style={{ marginLeft: 40 }}>
            <TitleQuestion titleQuestion={props.titleQuestion} />
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
            <Form
              autoComplete="off"
              form={form}
              // onFinish={onFinish}
              onValuesChange={checkEnableSubmit}
            >
              {renderContent()}
            </Form>
          </Row>
          <StarModal isModal={modalStar} star={state.star} />
        </div>
      </div>

      {/* {testButton({ Question, setQuestion, form })} */}

      <FooterModal
        onRetry={onRetry}
        onSubmit={onSubmit}
        audioUrl={state.audioUrl}
        result={state?.booleanArray}
        studentAnswer={state.studentAnswer}
        exerciseKey={props.exerciseKey}
        isDisabledRetry={state.isDisabledRetry}
        isDisabledSubmit={state.isDisabledSubmit}
        hideBtnFooter={props.hideBtnFooter}  //not answer
      />
    </Container >
  )
}

export default Circle_Write;

//tính kết quả
function calculateResult(...array) {
  const booleanArray = [].concat(...array)
  const correctAnswer = booleanArray.filter(x => x === true).length;
  const percent = parseInt(correctAnswer * 100 / booleanArray.length);
  const star = percent / 20;
  const resultString = `${correctAnswer}/${booleanArray.length}`;

  return { star, resultString, percent, correctAnswer, booleanArray };
}
// test
function testButton({ Question, setQuestion, form }) {
  return (
    <div>
      <Button
        onClick={() => {
          setQuestion(pre => {
            const { Circle, Write } = pre;
            Circle.userAnswers = Array.from(Circle.answers);
            //
            Write.userAnswers = Array.from(Write.answers);
            form.resetFields();
            form.setFieldsValue(toFormValues(Write.userAnswers)); // nhập giá trị cho form
            return { ...pre, Circle, Write }
          });
        }}
      >
        điền đáp án test
      </Button>
      <Button
        onClick={() => {
          console.log('🚀 ~ Circle.userAnswers: ', Question.Circle.userAnswers);
          const values = form.getFieldsValue();
          const Write_userAnswers = Object.values(values);
          console.log("🚀 ~ Write_userAnswers", Write_userAnswers);
        }}
      >
        log userAnswers
      </Button>
    </div>
  )
}

