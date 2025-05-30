import React from "react";
import { Container, Row, Button } from "reactstrap";
import { Form, Select } from "antd";
import FooterModal from "../../../FooterModal";
import VideoModal from "../../../VideoModal";
import AudioPlayer from "../../../AudioPlayer";
import TitleQuestion from '../../../TitleQuestion'
import StarModal from './StarModal';

const FormItem = Form.Item;

const DesignSelect = (props) => {
  const videoRef = React.useRef();

  const [state, setState] = React.useState({
    data: [],
    answers: [],
    booleanArray: [],
    randomArray: [],
    maxInput: null,
    isDoing: true,
    isDisabledRetry: true,
    isDisabledSubmit: true,
    audioUrl: null,
    videoUrl: null,
    studentAnswer: null,
  });
  const [modalStar, setModalStar] = React.useState(false);

  const submitButtonRef = React.useRef();
  const inputCount = React.useRef(0);

  const [formCheckAnswer] = Form.useForm();

  React.useEffect(() => {
    const dataClone = JSON.parse(JSON.stringify(props));
    const data = dataClone?.questionImage;
    let maxInput = 0;
    let answers = [];
    data.forEach((item) => {
      item.forEach((img) => {
        if (img.input) {
          maxInput++;
          answers.push(img.answer);
        }
      });
    });
    const randomArray = answers.slice();

    for (let i = 0; i < answers?.length / 2; i++) {
      const randomIndex = Math.floor(Math.random() * answers.length);
      [randomArray[i], randomArray[randomIndex]] = [
        randomArray[randomIndex],
        randomArray[i],
      ];
    }

    const audioUrl = dataClone.audio;
    const videoUrl = dataClone.video;

    setState((prevState) => ({
      ...prevState,
      data,
      maxInput,
      answers,
      randomArray,
      audioUrl,
      videoUrl,
    }));
  }, [props]);

  const contentSelect = React.useCallback(
    (color) => {
      return state.randomArray.map((item, index) => (
        <Select.Option key={index}>
          <span style={{ color }}>{item}</span>
        </Select.Option>
      ));
    },
    [state.randomArray]
  );

  const filterOption = React.useCallback((input, option) => {
    return (
      option?.children.props.children
        .toLowerCase()
        .indexOf(input.toLocaleLowerCase()) >= 0
    );
  }, []);

  const onSelectionChange = React.useCallback(
    (item, inputIndex) => (valueIndex) => {
      setState((prevState) => {
        const booleanArray = JSON.parse(JSON.stringify(prevState.booleanArray));

        const isCorrect = prevState.randomArray[valueIndex] === item.answer;

        const itemIndex = booleanArray.findIndex(
          (x) => x?.inputIndex === inputIndex
        );

        const itemModel = {
          inputIndex,
          isCorrect,
          itemSelected: prevState.randomArray[valueIndex],
          itemAnswer: item.answer,
        };

        if (itemIndex === -1) {
          booleanArray.push(itemModel);
        } else {
          booleanArray[inputIndex] = itemModel;
        }
        let isDisabledSubmit = booleanArray.length < state.maxInput;
        return { ...prevState, booleanArray, isDisabledSubmit };
      });
    },
    [state]
  );

  const onClickImage = React.useCallback(
    (item, index, rowIndex) => () => {
      const url = item.audioUrl || item.videoUrl;
      if (url) {
        const timeStamp = Date.now();
        if (url?.includes(".mp4")) {
          setState((prevState) => ({ ...prevState, videoUrl: url }));
          return videoRef.current?.toggleModal("isVisibled");
        }
        if (state.audioUrl) {
          document.getElementById("myAudio")?.pause();
        }
        setState((prevState) => ({
          ...prevState,
          audioImgUrl: url,
          timeStamp,
        }));
      }
    },
    [state.audioUrl]
  );

  const renderRow = React.useCallback(
    (row, rowIndex) => {
      return row.map((rowItem, index) => {
        let className = "";
        let cursor = "";
        // const drawingCursor = `url(img/volume.png) 12 12, auto`;
        const isInput = rowItem.input;
        if (rowItem.audioUrl) {
          cursor = `url(img/volume.png) 12 12, auto`;
        }
        if (rowItem.videoUrl) {
          cursor = `url(img/video.png) 12 12, auto`;
        }
        if (rowItem.input) {
          cursor = "pointer";
        }

        let color;
        let inputCurrent = 0;
        if (isInput) {
          inputCurrent = inputCount.current;
          inputCount.current++;
          if (inputCurrent === state.maxInput - 1) {
            inputCount.current = 0;
          }
          if (!state.isDoing) {
            const isCorrect = state.booleanArray?.[inputCurrent];
            color = isCorrect ? "#2DCE89" : "#F13536";
          }
        }

        return (
          <div style={{ position: "relative", display: "grid" }}>
            <img
              // onClick={() => onCompleteExcercise(data.audioUrl[index], item, indexData, index)}
              className={className}
              style={{ position: isInput ? "relative" : "", cursor }}
              src={rowItem.url}
              alt="..."
              onClick={onClickImage(rowItem, index, rowIndex)}
            />
            {isInput && (
              <FormItem
                style={{
                  display: "inline-block",
                  position: "absolute",
                  zIndex: 100,
                  top: "-3px",
                  right: 0,
                  left: 0,
                  padding: 0,
                }}
                name={inputCurrent}
              >
                <Select
                  disabled={!state.isDoing}
                  style={{
                    height: "100%",
                    backgroundColor: "transparent !important",
                    fontWeight: "500",
                    fontSize: props.fontSize ?? '',
                    // color,
                  }}
                  size="small"
                  showSearch
                  allowClear
                  // placeholder='---Select---'
                  filterOption={filterOption}
                  onChange={onSelectionChange(rowItem, inputCurrent)}
                // prefix={<PhoneOutlined />}
                >
                  {contentSelect(color)}
                </Select>
              </FormItem>
            )}
          </div>
        );
      });
    },
    [
      contentSelect,
      filterOption,
      onClickImage,
      onSelectionChange,
      state.booleanArray,
      state.isDoing,
      state.maxInput,
    ]
  );

  const renderContent = React.useMemo(() => {
    return state.data.map((item, index) => {
      return (
        <div key={index} style={{ display: "flex" }}>
          {renderRow(item, index)}
        </div>
      );
    });
  }, [renderRow, state.data]);

  const onModalStar = () => {
    setModalStar(true)
    setTimeout(() => { setModalStar(false) }, 3000);
  }

  const onSubmit = React.useCallback(() => {
    submitButtonRef.current?.click();
    setState((prevState) => ({
      ...prevState,
      isDoing: false,
      isDisabledRetry: false,
      isDisabledSubmit: true,
    }));
  }, []);

  const onRetry = React.useCallback(() => {
    formCheckAnswer.resetFields();
    setState((prevState) => ({
      ...prevState,
      isDoing: true,
      isDisabledRetry: true,
      isDisabledSubmit: true,
      booleanArray: [],
    }));
  }, [formCheckAnswer]);

  const onFinish = React.useCallback(
    (values) => {
      let studentAnswer = [];

      let booleanArray = [];

      for (let i = 0; i < state.maxInput; i++) {
        const isCorrect =
          state.randomArray[values[i]]?.trim()?.toLowerCase() ===
          state.answers[i]?.trim()?.toLowerCase();
        booleanArray.push(isCorrect);

        studentAnswer.push(state.answers[i]?.trim()?.toLowerCase());
      }

      let correctAnswer = 0;
      booleanArray.forEach((item, index) => {
        if (item) {
          correctAnswer++;
        }
      });
      const percent = parseInt((correctAnswer / booleanArray.length) * 100);
      const resultString = `${correctAnswer}/${booleanArray.length} (${percent}%)`;
      const result_String = `${correctAnswer}/${booleanArray.length}`;
      const star = percent / 20;


      const params = {
        score: percent,
        exerciseId: props.id,
        studentAnswer: JSON.stringify(studentAnswer),
        results: result_String,
        unit: props.unit,
      };

      props.postAnswerToApi(params);
      setState((preState) => ({
        ...preState,
        resultString,
        isPointed: true,
        isDisabledRetry: false,
        sentences: state.sentences,
      }));

      setState((prevState) => ({ ...prevState, booleanArray, star }));
      onModalStar();

    }, [props, state.answers, state.maxInput, state.randomArray, state.sentences]
  );

  return (
    <Container className="fluid">
      <Row style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
        <TitleQuestion titleQuestion={props?.titleQuestion} />
      </Row>
      <Row
        style={{
          minWidth: 985,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form form={formCheckAnswer} autoComplete="off" onFinish={onFinish}>
          {renderContent}
          <Button
            innerRef={submitButtonRef}
            style={{ display: "none" }}
            htmlType="submit"
          >
            text
          </Button>
        </Form>
      </Row>
      <StarModal isModal={modalStar} star={state.star} />
      {state.videoUrl && (
        <VideoModal
          ref={videoRef}
          videoUrl={state.videoUrl}
          crossorigin="anonymous"
        />
      )}

      {state.audioImgUrl && (
        <AudioPlayer
          id="audio"
          timeStamp={state.timeStamp}
          isPause={state.isPause}
          audioUrl={state.audioImgUrl}
          isVisibled={props.isVisibled}
        />
      )}

      <FooterModal
        onRetry={onRetry}
        onSubmit={onSubmit}
        audioUrl={state.audioUrl}
        videoUrl={state.videoUrl}
        result={state.booleanArray}
        exerciseKey={props.exerciseKey}
        isDisabledRetry={state.isDisabledRetry}
        isDisabledSubmit={state.isDisabledSubmit}
      />
    </Container>
  );
};
export default DesignSelect;
