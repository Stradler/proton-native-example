import React, { Component } from 'react';
import { Box, StyledText } from 'proton-native';
import PropTypes from 'prop-types';

class Animation extends Component {
  state = {
    currentFrame: '',
  };

  componentDidMount() {
    this.animationLoop.call(this);
  }

  componentWillUnmount() {
    clearInterval(this.intervalCode);
  }

  animationLoop = () => {
    const { frames } = this.props;
    const framesLength = frames.length;
    this.intervalCode = setInterval(() => this.setState({
      currentFrame: frames[Math.floor((Date.now() / 100) % framesLength)],
    }));
  };

  render() {
    const { label } = this.props;
    const { currentFrame } = this.state;
    return (
      <Box label={label}>
        <StyledText style={{ fontSize: 40, textAlign: 'center' }}>{currentFrame}</StyledText>
      </Box>
    );
  }
}

Animation.propTypes = {
  label: PropTypes.string.isRequired,
  frames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Animation;
