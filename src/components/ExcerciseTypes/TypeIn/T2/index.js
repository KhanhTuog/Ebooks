/* eslint-disable no-unused-expressions */
import React from 'react';
import styles from './styles.module.css';
import { Row, Input, Container } from 'reactstrap';
import { Form, Button } from 'antd';
import PropTypes from 'prop-types';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import ReactHtmlParser from 'react-html-parser';
import FooterIeltsMindset from '../../../FooterModal';
import TitleQuestion from '../../../TitleQuestion';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const TypeIn1 = (props) => {
  const inputTag = '#';

  const FormItem = Form.Item;
  const submitButton = React.useRef();
  const refForm = React.useRef();
  const inputCount = React.useRef(0);
  const [form] = Form.useForm();

  const [state, setState] = React.useState({
    sentences: null,
    isPointed: false,
    isDisabledRetry: true,
    videoVisible: false,
    audioUrl: null,
    videoUrl:null
  });

  React.useEffect(() => {
    const sentences = JSON.parse(JSON.stringify(props.questions));
    sentences.titleImage = props.titleImage
    sentences.titleQuestion = props.titleQuestion

    const audioUrl = props.audio
    const videoUrl = props.video

    setState((prevState) => ({ ...prevState, sentences, audioUrl ,videoUrl}))
  }, [props])

  const transform = React.useCallback((node, index) => {

    if (node.type === 'text') {
      if (!node.data.includes(inputTag)) return;
      const elementArray = node.data.split(inputTag);


      let currentInputNo = 0;

      return (
        <span style={{ fontSize: 25 }}>
          {elementArray.map((item, index) => {

            if (index > 0) {
              currentInputNo = inputCount.current;
              const maxInput = state.sentences[0].answer.length
              inputCount.current++;
              if (inputCount.current >= maxInput) {
                inputCount.current = 0;
              }
            }

            const type = state.sentences[0].type === 'longAnwser'
            return (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <FormItem
                    className='ml-2 mr-2'
                    name={currentInputNo}
                    style={{ display: 'inline-block', marginBottom: 0 }}
                  // rules={[{ required: true, message: 'Please fill the answer' },]}
                  >
                    <div>
                      <Input
                        autoComplete={false}
                        autoCorrect={false}
                        style={{
                          height: 30,
                          fontSize: 26,
                          borderWidth: 0,
                          borderRadius: 0,
                          fontWeight: '500',
                          display: 'inline',
                          borderBottomWidth: 1,
                          width: type ? 850 : 150,
                          backgroundColor: 'white',
                          borderBottomColor: '#bdc3c7',
                          boxShadow: 'none',
                          color: state.isPointed ? (state.sentences.booleanArray?.[currentInputNo] ? '#2ecc71' : '#e74c3c') : 'black',
                        }}
                        id={currentInputNo}
                        disabled={state.isPointed}
                        className={!state.isPointed ? styles.input : styles.checkInput}
                      />
                      {state.isPointed && state.sentences.booleanArray?.[currentInputNo] && (
                        <CheckCircleOutlined style={{ fontSize: 25, color: '#2ecc71' }} />
                      )}
                      {state.isPointed && !state.sentences.booleanArray?.[currentInputNo] && (
                        <CloseCircleOutlined style={{ fontSize: 25, color: '#e74c3c' }} />
                      )}
                    </div>
                  </FormItem>
                )}
                <div>
                  {item}
                </div>
              </React.Fragment>
            )
          })}
        </span>
      )
    }
  }, [state.sentences, state.isPointed])

  if (!state.sentences) return null;

  return (
    <Container className='fluid'>
      <Row style={{ display: 'flex', marginRight: 450, minWidth: 1100 }}>
        <TitleQuestion titleQuestion={state.sentences?.titleQuestion} />
      </Row>
      {state.videoUrl && (
          <Row className='mb-4'>
            <Player
              // playsInline
              poster="/assets/poster.png"
              src={state.videoUrl}
            />
          </Row>
        )}
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'start' }}>
        {state.sentences.titleImage && (
          <img src={state.sentences.titleImage} alt='...' style={{ width: props?.imgSize ?? '60%', marginBottom: 10 }} />
        )}
       
        <Form
          autoComplete="off"
          form={form}
          ref={refForm}
        >
          {ReactHtmlParser(state.sentences?.[0]?.title, { transform })}
          <FormItem>
            <Button style={{ display: 'none' }} ref={submitButton} id='submitButton' htmlType="submit"></Button>
          </FormItem>
        </Form>
      </Row>

      <FooterIeltsMindset
        onRetry
        isDisabledSubmit
        audioUrl={state.audioUrl}
        isDisabledRetry={state.isDisabledRetry}
      />
    </Container>
  );
};
TypeIn1.propTypes = {
  question: PropTypes.instanceOf(Object),

}
export default TypeIn1;
