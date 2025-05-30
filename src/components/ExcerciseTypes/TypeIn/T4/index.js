/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import { Row, Container, Col } from 'reactstrap';
import { Input } from 'antd'
import TitleQuestion from '../../../TitleQuestion';
import FooterIeltsMindset from '../../../FooterModal';
import jsdiff from 'diff'

const fnMap = {
  'chars': jsdiff.diffChars,
  'words': jsdiff.diffWords,
  'sentences': jsdiff.diffSentences,
  'json': jsdiff.diffJson
};
// const { TextArea } = Input;

const TypeIn4 = (props) => {
  const submitButton = React.useRef();

  const [state, setState] = React.useState({
    audioUrl: null,
    sentences: null,
    videoUrl: null,
    isPointed: false,
    videoVisible: false,
    isDisabledRetry: true,
  });

  const toggleState = React.useCallback((fieldName) => () => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  }, []);

  const onSubmit = React.useCallback(() => {
    submitButton.current?.click();
  }, [])

  const onRetry = React.useCallback(() => {
    setState((preState) => ({ ...preState, isDisabledInput: false, isDisabledRetry: true, isPointed: false }))
  }, [])

  const transform = React.useCallback(() => {
    return (
      <div dangerouslySetInnerHTML={{ __html: props.questions[0].title }} />
    )
  }, [props])

  const result = React.useCallback(() => {
    const diff = fnMap['chars']('props.inputA', 'props.inputB');

    return diff.map((part, index) => {
      const spanStyle = {
        backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'lightgrey',
        fontSize: 25,
      };
      return (
        <p key={index} style={spanStyle} >{part.value}</p>
      )
    })
  }, [])

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <TitleQuestion titleQuestion={props?.titleQuestion} />
      <Row style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
        <Col style={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
          {state.videoUrl && (
            <Row className='mb-4'>
              <Player
                // playsInline
                poster="/assets/poster.png"
                src={state.videoUrl}
              />
            </Row>
          )}
          <Row className='d-flex'>
            {props?.titleImage && (
              <img
                alt='...'
                style={{
                  width: props?.imgSize ?? '100%',
                  marginBottom: 10
                }}
                src={props.titleImage}
              />
            )}
          </Row>
          {transform()}
          {/* <TextArea autoSize /> */}
          {state.isPointed && result()}
        </Col>
      </Row>

      <FooterIeltsMindset
        onSubmit={onSubmit}
        onRetry={onRetry}
        audioUrl={state.audioUrl}
        exerciseKey={props.exerciseKey}
        isDisabledSubmit={state.isPointed}
        isDisabledRetry={state.isDisabledRetry}
      />
    </div>
  );
};
TypeIn4.propTypes = {
  question: PropTypes.instanceOf(Object),
}
export default React.memo(TypeIn4);
