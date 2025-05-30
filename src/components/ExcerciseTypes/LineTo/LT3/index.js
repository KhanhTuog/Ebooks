/* eslint-disable no-undef */
import React from "react";
import LineTo from 'react-lineto';
// import { Row, Col } from 'antd';
import classNames from 'classnames';
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import { Container, Row, Button } from "reactstrap";
// import AudioPlayer from "../../../../../AudioPlayer";
import { Card } from "./Card.js";
import { ItemTypes } from "./ItemTypes";
import styles from "./styles.module.css";
import Listen from "../../../Listening";
import Recorder from "../../../Recorder";
import FooterModal from '../../../FooterModal'


const LT3 = (props) => {
  const [cardsRight, setCardsRight] = React.useState(
    JSON.parse(JSON.stringify(props.questionImage.ITEMSRIGHT))
  );
  const [cardsLeft, setCardsLeft] = React.useState(
    JSON.parse(JSON.stringify(props.questionImage.ITEMSLEFT))
  );
  const answer = props.questionImage.answer
  const [state, setState] = React.useState({
    isDoing: true,
    recordURL: null,
    matchedPairs: [],
    selectedLeft: null,
    selectedRight: null,
  });

  const findCardRight = React.useCallback(
    (id) => {
      const card = cardsRight.filter((c) => `${c.id}` === id)[0];
      return {
        card,
        index: cardsRight.indexOf(card),
      };
    },
    [cardsRight]
  );

  const moveCardRight = React.useCallback((id, atIndex) => {
    const { card, index } = findCardRight(id);
    setCardsRight(
      update(cardsRight, {
        $splice: [
          [index, 1],
          [atIndex, 0, card],
        ],
      })
    );
  }, [cardsRight, findCardRight]);

  const [, dropRight] = useDrop({ accept: ItemTypes.CARD });

  // Card left
  const findCardLeft = React.useCallback(
    (id) => {
      const card = cardsLeft.filter((c) => `${c.id}` === id)[0];
      return {
        card,
        index: cardsLeft.indexOf(card),
      };
    },
    [cardsLeft]
  );

  const moveCardLeft = React.useCallback(
    (id, atIndex) => {
      const { card, index } = findCardLeft(id);
      setCardsLeft(
        update(cardsLeft, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [cardsLeft, findCardLeft]
  );

  const [, dropLeft] = useDrop({ accept: ItemTypes.CARD });

  const checkAnswer = React.useCallback(() => {
    setState((prevState) => {
      const { matchedPairs } = prevState;

      matchedPairs.forEach((item, index) => {
        const answerItem = answer.find((x) => x.left === item.left.id);
        const isCorrect = item.right.id === answerItem.right;
        matchedPairs[index].isCorrect = isCorrect;
      });

      return ({
        ...prevState,
        isDoing: false,
        matchedPairs,
      });
    });
  }, []);

  const tryAgain = React.useCallback(() => {
    setCardsRight(JSON.parse(JSON.stringify(props.questionImage.ITEMSRIGHT)));
    setCardsLeft(JSON.parse(JSON.stringify(props.questionImage.ITEMSLEFT)));
    setState((preState) => ({
      ...preState,
      isDoing: true,
      matchedPairs: [],
      selectedLeft: null,
      selectedRight: null,
    }));
  }, []);

  const onStopRecording = React.useCallback((recordURL) => {
    setState((prevState) => ({ ...prevState, recordURL: recordURL.blobURL }));
  }, []);

  const onClickItem = React.useCallback((item, index, side) => () => {
    setState((prevState) => {
      const stateModel = { [`selected${side}`]: item };

      if ((side === 'Left' && prevState.selectedRight) || (side === 'Right' && prevState.selectedLeft)) {
        stateModel.matchedPairs = prevState.matchedPairs;
        const left = prevState.selectedLeft || stateModel.selectedLeft;
        const right = prevState.selectedRight || stateModel.selectedRight;
        const leftIndex = stateModel.matchedPairs.findIndex((x) => x.left.id === left.id);
        const rightIndex = stateModel.matchedPairs.findIndex((x) => x.right.id === right.id);

        if (leftIndex === -1 && rightIndex === -1) {
          stateModel.matchedPairs.push({ left, right });
        } else {
          if (leftIndex > -1) {
            stateModel.matchedPairs.splice(leftIndex, 1);
          }

          if (rightIndex > -1) {
            stateModel.matchedPairs.splice(rightIndex, 1);
          }

          stateModel.matchedPairs.push({ left, right });
        }


        stateModel.selectedLeft = null;
        stateModel.selectedRight = null;
      }

      return ({
        ...prevState,
        ...stateModel,
      });
    });
  }, []);

  const renderLine = React.useCallback((item, index) => {
    let lineColor = 'black';

    if (typeof item.isCorrect === 'boolean') {
      lineColor = item.isCorrect ? 'green' : undefined;
    }

    return (
      <LineTo
        key={index}
        from={`right-${item.right.id}`}
        to={`left-${item.left.id}`}
        zIndex={1100}
        borderWidth={2}
        fromAnchor="50% 80%"
        toAnchor="50% 30%"
        borderColor={lineColor}
      />
    );
  }, []);

  const renderRight = React.useCallback((item, index) => {
    let customStyles = {
      position: 'relative',
      display: 'inline-block',
    };

    if (item.id === state.selectedRight?.id) {
      customStyles = {
        borderWidth: 1,
        // borderRadius: 12,
        borderStyle: 'solid',
        // borderColor: 'black',
      };
    }

    const line = state.matchedPairs.find((x) => x.right.id === item.id);

    return (
      <span
        style={customStyles}
        className={`right-${item.id}`}
        onClick={onClickItem(item, index, 'Right')}
      >
        <Card
          key={item.id}
          id={`${item.id}`}
          imgUrl={item.imgUrl}
          moveCard={moveCardRight}
          findCard={findCardRight}
        />
        {(!state.isDoing && !!line) && (
          <i
            className={classNames({
              "fas fa-check": line.isCorrect,
              "fas fa-times": !line.isCorrect
            })}
            style={{
              bottom: 40,
              right: 20,
              fontSize: 17,
              position: 'absolute',
              color: line.isCorrect ? 'green' : 'red',
            }}
          />
        )}
      </span>
    )
  }, [state.selectedRight?.id, state.matchedPairs, state.isDoing, onClickItem, moveCardRight, findCardRight]);

  const renderLeft = React.useCallback((item, index) => {
    let customStyles = {};

    if (item.id === state.selectedLeft?.id) {
      customStyles = {
        borderWidth: 1,
        borderColor: '',
      };
    }

    return (
      <span
        style={{
          ...customStyles,
          display: 'inline-block',
        }}
        className={`left-${item.id}`}
        onClick={onClickItem(item, index, 'Left')}
      >
        <Card
          key={item.id}
          id={`${item.id}`}
          imgUrl={item.imgUrl}
          moveCard={moveCardLeft}
          findCard={findCardLeft}
        />
      </span>
    )
  }, [onClickItem, state.selectedLeft, findCardLeft, moveCardLeft]);

  return (
    <Container id="gfx_holder" className="fluid">
      <Row className="d-flex justify-content-start ml-8">
        <img
          style={{width:'70%'}}
          src={props.titleImage}
          alt="..."
        />

      </Row>
      <Row className="d-flex align-items-center flex-column" style={{ minWidth: 1000 }}>
        <div ref={dropRight}>
          {cardsRight.map(renderRight)}
        </div>
        <div style={{ marginLeft: 10 }} ref={dropLeft}>
          {cardsLeft.map(renderLeft)}
        </div>
  
        {state.matchedPairs.map(renderLine)}

      </Row>

      <Row className="d-flex justify-content-center mt-2">
        {/* <Button
          disabled={!state.isDoing || state.matchedPairs.length !== cardsRight.length}
          onClick={checkAnswer}
          color="success"
        >
          Check
        </Button>
        <Button
          color="success"
          disabled={state.isDoing}
          onClick={tryAgain}
        >
          Try again
        </Button> */}

        {!state.isDoing && (
          <Recorder
            // onRecording={onRecording}
            onStop={onStopRecording}
          />
        )}
        {state.recordURL && (
          <Listen
            custom
            audioURL={state.recordURL}
            style={{ padding: 0, borderWidth: 0 }}
          >
            <Button color="primary" id="tooltipRepeat" type="button">
              <i style={{ fontSize: 15 }} className="fas fa-volume-up" />
            </Button>
          </Listen>
        )}
      </Row>
      <FooterModal
        // audioUrl={state.audioUrl}
        isDisabledSubmit={!state.isDoing || state.matchedPairs.length !== cardsRight.length}
        exerciseKey={props.exerciseKey}
        isDisabledRetry={state.isDoing}
        onRetry={tryAgain}
        onSubmit={checkAnswer}
      />
    </Container>
  );
};
export default LT3;
