import React, { Component } from 'react';
import { Box, Button, StyledText } from 'proton-native';
import PropTypes from 'prop-types';

class GeneralTab extends Component {
  state = {};

  setAnswer = (property, value) => () => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    const {
      property, value, btnDescription, label,
    } = this.props;

    const { [property]: text } = this.state || '';
    return (
      <Box label={label}>
        <Button onClick={this.setAnswer(property, value)}>{btnDescription}</Button>
        <StyledText style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>{text}</StyledText>
      </Box>
    );
  }
}

GeneralTab.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  btnDescription: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default GeneralTab;
