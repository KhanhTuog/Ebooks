import React from 'react'
// import { Row, Col } from 'antd'
import { Container, Row, Button, Input } from 'reactstrap'
import { Form } from 'antd'
import FooterModal from '../../../FooterModal'
import TitleQuestion from '../../../TitleQuestion'
import classNames from 'classnames';

const FormItem = Form.Item;

const TypeIn_Uderline = (props) => {
  const [state, setState] = React.useState({
    data: null,
    selects: [],
    answers: [],
    isDoing: true,
    maxInput: null,
    audioUrl: null,
    booleanArray: [],
    isDisabledRetry: true
  });

  const inputCount = React.useRef(0);
  const submitButtonRef = React.useRef();
  const [formCheckAnswer] = Form.useForm();

  React.useEffect(() => {
    const dataClone = JSON.parse(JSON.stringify(props));

    let answers = [];
    let maxInput = 0;
    const data = dataClone?.questionImage;

    data.forEach((item) => {
      item.forEach((img) => {
        if (img.input) {
          maxInput++;
          answers.push(img.answer);
        }
      })
    })

    data.titleQuestion = props.titleQuestion;

    const audioUrl = dataClone.audio;

    setState((prevState) => ({ ...prevState, data, maxInput, answers, audioUrl }));
  }, [props]);

  const onClickImage = React.useCallback((item, index, rowIndex) => () => {
    if (!item.select || !state.isDoing) return;

    setState((prevState) => {
      const selects = JSON.parse(JSON.stringify(prevState.selects));

      const selectIndex = selects.findIndex((x) => x.select === item.select);

      if (selectIndex > -1) {
        if (selects[selectIndex].index !== index || selects[selectIndex].rowIndex !== rowIndex) {
          selects[selectIndex].index = index;
          selects[selectIndex].rowIndex = rowIndex;
        } else {
          selects.splice(selectIndex, 1);
        }
      } else {
        selects.push({ select: item.select, index, rowIndex });
      }

      return ({ ...prevState, selects: selects });
    })
  }, [state.isDoing]);

  const renderImage = React.useCallback((images, rowIndex) => {
    return images.map((item, index) => {
      let className = "";
      let color = 'black';
      let selectIndex = -1;
      let inputCurrent = 0;
      let imageSrc = item.url;
      let isSelecting = false;

      if (item.input) {
        inputCurrent = inputCount.current;

        inputCount.current++;


        if (inputCurrent === state.maxInput - 1) {
          inputCount.current = 0;
        }
        if (!state.isDoing) {
          const isCorrect = state.booleanArray[inputCurrent]
          color = isCorrect ? '#2DCE89' : '#F13536'
        }
      }

      if (item.select) {
        selectIndex = state.selects.findIndex((x) => x.select === item.select);
        if (selectIndex > -1) {
          isSelecting = state.selects[selectIndex]?.index === index && state.selects[selectIndex]?.rowIndex === rowIndex;
          if (isSelecting) {
            if (state.isDoing) {
              imageSrc = imageSrc.replace('.jpg', 'select.jpg');
            } else {
              imageSrc = imageSrc.replace('.jpg', 'answer.jpg');
            }
          }
        }
      }

      return (
        <div style={{ position: 'relative', display: 'grid' }}>
          <img
            alt='...'
            src={imageSrc}
            className={className}
            style={{
              width: '100%',
              position: item.input ? 'relative' : '',
              cursor: item.select ? 'pointer' : undefined,
            }}
            onClick={onClickImage(item, index, rowIndex)}
          />
          {item.input && (
            <FormItem
              style={{ display: 'inline-block', position: 'absolute', right: 0, left: 0, padding: 0 }}
              name={inputCurrent}
            >
              <Input
                allowClear
                maxLength={props.typeInput ? 1 : ''}
                disabled={!state.isDoing}
                style={{
                  color,
                  height: 5,
                  width: '100%',
                  borderWidth: 0,
                  borderRadius: 0,
                  marginBottom: 12,
                  boxShadow: 'none',
                  fontWeight: '600',
                  borderColor: color,
                  backgroundColor: 'transparent',
                  textAlign: props.typeInput ? 'center' : '',
                  fontSize: props.fontSize ? props.fontSize : 20,
                }}
              ></Input>
            </FormItem>
          )}
          {!state.isDoing && item.input && (
            <i
              className={classNames({
                "fas fa-check": state.booleanArray[inputCurrent],
                "fas fa-times": !state.booleanArray[inputCurrent]
              })}
              style={{
                color,
                top: -1,
                zIndex: 1,
                right: -10,
                fontSize: 20,
                position: 'absolute',
              }}
            />
          )}
        </div>
      );
    });
  }, [
    onClickImage,
    state.selects,
    state.isDoing,
    state.maxInput,
    state.booleanArray,
    props.fontSize,
    props.typeInput,
  ]);

  const renderContent = React.useMemo(() => {
    // const maxInput = state.data.
    return state.data?.map((rowItem, rowIndex) => {
      return (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {renderImage(rowItem, rowIndex)}
        </div>
      )
    })
  }, [renderImage, state.data])

  const onSubmit = React.useCallback(() => {
    submitButtonRef.current?.click();
    setState((prevState) => ({ ...prevState, isDoing: false, isDisabledRetry: false }))
  }, []);

  const onRetry = React.useCallback(() => {
    formCheckAnswer.resetFields();
    setState((prevState) => ({
      ...prevState,
      selects: [],
      isDoing: true,
      isDisabledRetry: true
    }))
  }, [formCheckAnswer])

  const onFinish = React.useCallback((values) => {

    let booleanArray = [];
    for (let i = 0; i < state.maxInput; i++) {
      let isCorrect = false;
      const answersInArray = state.answers[i];
      const isManyAnswers = answersInArray.includes('/');
      if (isManyAnswers && values[i]) {

        const answers = answersInArray.split('/');

        for (let j = 0; j < answers.length; j++) {
          isCorrect = answers[j].trim().toLowerCase() === values[i].trim().toLowerCase();
          if (isCorrect) break;
        }
      } else {
        if (!answersInArray) {
          isCorrect = true;
        }
        else {
          if (values[i]) {
            isCorrect = values[i].trim().toLowerCase() === state.answers[i].trim().toLowerCase();
          }
        }
      }

      booleanArray.push(isCorrect);
    }
    setState((prevState) => ({ ...prevState, booleanArray }))
  }, [state.answers, state.maxInput])

  if (!state.data) return null;

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TitleQuestion titleQuestion={state.data?.titleQuestion} />
      </Row>
      <Row style={{ minWidth: 985, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form form={formCheckAnswer} autoComplete="off" onFinish={onFinish}>
          {renderContent}
          <Button innerRef={submitButtonRef} style={{ display: 'none' }} htmlType="submit" >text</Button>
        </Form>
      </Row>

      <FooterModal
        onRetry={onRetry}
        onSubmit={onSubmit}
        audioUrl={state.audioUrl}
        exerciseKey={props.exerciseKey}
        isDisabledRetry={state.isDisabledRetry}
        isDisabledSubmit={!state.isDisabledRetry}
      />

    </Container>
  )
}
export default TypeIn_Uderline