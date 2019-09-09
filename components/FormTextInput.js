import React from 'react';
import {  TextInput } from 'react-native';
import PropTypes from 'prop-types';


const FormTextInput = (props) => {
  const { style, ...otherProps } = props;
  return (
    <TextInput
      style={[style]}
      {...otherProps}
    />
  );
};



FormTextInput.propTypes = {
  style: PropTypes.object,
};

export default FormTextInput;