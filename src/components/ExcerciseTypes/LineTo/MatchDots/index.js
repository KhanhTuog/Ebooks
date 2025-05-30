import React from 'react'
import { Button, Container, Row } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import TitleQuestion from '../../../TitleQuestion';
import PointDot, { calculateResultLine, RenderLineTo } from './PointDot';
import FooterModal from '../../../FooterModal';
import StarModal from './StarModal';


function MatchDots(props) {
  const [state, setState] = React.useState({
    booleanArray: [],
    isDisabledRetry: true,
    isDisabledSubmit: true,
  });
  const [Question, setQuestion] = React.useState(null);
  const [modalStar, setModalStar] = React.useState(false);


  React.useEffect(() => {
    const clonedProps = JSON.parse(JSON.stringify(props));
    const question = clonedProps.question;
    //initialDrawLines
    question.DrawLines.isDoing = true;
    question.DrawLines.userAnswers = Array.from(question.DrawLines.initialValue);
    //
    const audioUrl = clonedProps.audio;
    const videoUrl = clonedProps.video;

    setState((prevState) => ({ ...prevState, audioUrl, videoUrl }));
    setQuestion(question);
  }, [props]);
  // hiển thị ngôi sao
  const onModalStar = () => {
    setModalStar(true)
    setTimeout(() => { setModalStar(false) }, 3000);
  }
  const onSubmit = React.useCallback(() => {
    const { DrawLines } = Question;
    DrawLines.isDoing = false; //
    DrawLines.resultLines = calculateResultLine(DrawLines.userAnswers, DrawLines.answers);
    //State
    const booleanArray = DrawLines.resultLines.booleanArray;
    const star = DrawLines.resultLines.star;

    const result_String = DrawLines.resultLines.resultString;
    const studentAnswer = DrawLines.userAnswers;
    const params = {
      unit: props.unit,
      exerciseId: props.id,
      results: result_String,
      studentAnswer: JSON.stringify(studentAnswer),
    }
    props.postAnswerToApi(params)

    //update
    setState(pre => ({ ...pre, isDisabledRetry: false, isDisabledSubmit: true, booleanArray, star }));
    setQuestion(pre => ({ ...pre, DrawLines }));
    onModalStar();
  }, [Question, props]);

  const onRetry = React.useCallback(() => {
    const { DrawLines } = Question;
    //initialDrawLines
    DrawLines.isDoing = true; //
    DrawLines.userAnswers = Array.from(DrawLines.initialValue);
    //initialState
    const booleanArray = [];
    //update
    setState(pre => ({ ...pre, booleanArray, isDisabledRetry: true }));
    setQuestion(pre => ({ ...pre, DrawLines }));
  }, [Question]);

  const transform = React.useCallback((node, index) => {
    if (node.type === "tag" && node.name === 'input' && node.attribs.type === 'boxMatch') { //render tag input boxMatch 
      const id_dot = node.attribs.id;
      return < PointDot
        key={index}
        id={id_dot}
        data={Question.DrawLines}
        setData={(data) => setQuestion(pre => ({ ...pre, DrawLines: data }))}
      />
    }
  }, [Question]);

  const checkEnableSubmit = React.useCallback(() => {
    setQuestion(question => {
      const { DrawLines: { userAnswers, answers } } = question;
      if (!userAnswers) return null;
      const isSubmit = userAnswers.length >= answers.length;
      setState(pre => ({ ...pre, isDisabledSubmit: !isSubmit }));

      return question;
    });
  }, []);

  const renderContent = React.useCallback((value) => {
    const { Layout, DrawLines } = Question;
    return (
      <div className='match-container' style={{ position: 'relative' }} onClick={checkEnableSubmit}>
        {ReactHtmlParser(Layout, { transform })}
        <RenderLineTo
          userAnswers={DrawLines.userAnswers}
          isDoing={DrawLines.isDoing}
          listBoolean={DrawLines.resultLines?.listBoolean}
          checkEnableSubmit={checkEnableSubmit}
        />
      </div>
    );
  }, [Question, checkEnableSubmit, transform]);

  if (!Question) return null;

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div>
          <Row>
            <TitleQuestion titleQuestion={props.titleQuestion} />
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
            {renderContent()}
          </Row>
          <StarModal isModal={modalStar} star={state.star} />
        </div>
      </div>
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

      // isDisabledSubmit={questions.recorder ? false : state.isDisabledSubmit}
      />
      {/* <Button
        onClick={() => {
        }}
      >
        điền đáp án test
      </Button> */}
    </Container >
  )
}

export default MatchDots
