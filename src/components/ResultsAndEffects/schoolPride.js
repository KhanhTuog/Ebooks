import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

export default class SchoolPride extends React.Component {
  constructor(props) {
    super(props);
    this.isAnimationEnabled = false;
    this.animationInstance = null;
    this.nextTickAnimation = this.nextTickAnimation.bind(this);
  }

  componentDidMount = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.handlerClickStart();
  }

  makeShot = (angle, originX) => {
    this.animationInstance && this.animationInstance({
      particleCount: 3,
      angle,
      spread: 55,
      origin: { x: originX },
      //   colors: ['#bb0000', '#ffffff'],
      colors: ['#cc3333', '#4CAF50', '#74b9ff', '#ffeaa7', '#ffffff', '#a29bfe', '#fab1a0', '#81ecec'],

    });
  }

  nextTickAnimation = () => {
    this.makeShot(60, 0);
    this.makeShot(120, 1);
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  }

  startAnimation = () => {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.nextTickAnimation();
    }
  }

  pauseAnimation = () => {
    this.isAnimationEnabled = false;
  }

  stopAnimation = () => {
    this.isAnimationEnabled = false;
    this.animationInstance && this.animationInstance.reset();
  }

  handlerClickStart = () => {
    this.startAnimation();
  };

  handlerClickPause = () => {
    this.pauseAnimation();
  };

  handlerClickStop = () => {
    this.stopAnimation();
  };

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    return (
      <div style={{backgroundColor: 'white'}}>
        <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles} />
      </div>
    );
  }
}