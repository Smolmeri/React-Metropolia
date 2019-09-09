import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/LoginHooks';
import mediaAPI from '../hooks/ApiHooks';


const Login = (props) => {
  const {
    inputs,
    handleUsernameChange,
    handlePasswordChange,
    handleEmailChange,
    handleFullnameChange,
  } = useSignUpForm();
  const {signInAsync, registerAsync} = mediaAPI();
  return (
    <View>

      <View>
        <Text>Login</Text>
        <FormTextInput
          autoCapitalize='none'
          value={inputs.username}
          placeholder='username'
          onChangeText={handleUsernameChange}
        />
        <FormTextInput
          autoCapitalize='none'
          value={inputs.password}
          placeholder='password'
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        <Button title="Sign in!" onPress={
          () => {
            signInAsync(inputs, props);
          }
        } />
      </View>

      <View>
        <Text>Register</Text>
        <FormTextInput
          autoCapitalize='none'
          value={inputs.username}
          placeholder='username'
          onChangeText={handleUsernameChange}
        />
        <FormTextInput
          autoCapitalize='none'
          value={inputs.password}
          placeholder='password'
          onChangeText={handlePasswordChange}
        />
        <FormTextInput
          autoCapitalize='none'
          value={inputs.email}
          placeholder='email'
          onChangeText={handleEmailChange}
        />
        <FormTextInput
          value={inputs.fullname}
          placeholder='fullname'
          onChangeText={handleFullnameChange}
        />
        <Button title="Register!" onPress={
          () => {
            registerAsync(inputs, props);
          }
        } />
      </View>
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};


export default Login;
