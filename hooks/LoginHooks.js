import {useState} from 'react';
import validate from 'validate.js';
import mediaAPI from './ApiHooks';

const {checkAvailable} = mediaAPI();

// Pre validated in validate.js -- use in own documentation in project
const constraints = {
  username: {
    presence: {
      message: 'cannot be blank.',
    },
    length: {
      minimum: 3,
      message: 'needs to be at least 3 characters.',
    },
  },
  password: {
    presence: {
      message: 'cannot be blank.',
    },
    length: {
      minimum: 5,
      message: 'must be at least 5 characters',
    },
  },
  email: {
    presence: {
      message: 'cannot be blank.',
    },
    email: {
      message: 'not valid',
    },
  },
  confirmPassword: {
    equality: {
      attribute: 'password',
    },
  },
};

const validator = (field, value) => { //value is string or object
  // Creates an object based on the field name and field value
  // e.g. let object = {email: 'email@example.com'}
  let object = {};
  if (typeof value === 'string') {
    object[field] = value;
  } else {
    object = value; // if value is object like with confirmPassword
  }

  const constraint = constraints[field];
  console.log(object, constraint);
  console.log('field', {[field]: constraint});

  // Validate against the constraint and hold the error messages
  const result = validate(object, {[field]: constraint});
  console.log('validator log', object, constraint, result);

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[field][0];
  }

  return null;
};

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  // login form event handlers
  const handleLoginUsernameChange = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      username: text,
    }));
  };
  const handleLoginPasswordChange = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      password: text,
    }));
  };
  // register form event handlers
  const handleUsernameChange = (text) => {
    const usernameError = validator('username', text);
    console.log('usernameError', usernameError);
    setErrors((errors) => ({
      ...errors,
      username: usernameError,
    }));
    setInputs((inputs) => ({
      ...inputs,
      username: text,
    }));
  };
  const handlePasswordChange = (text) => {
    const passwordError = validator('password', text);
    setErrors((errors) => ({
      ...errors,
      password: passwordError,
    }));
    setInputs((inputs) => ({
      ...inputs,
      password: text,
    }));
  };
  const handleConfirmChange = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      confirm: text,
    }));
  };
  const handleEmailChange = (text) => {
    const emailError = validator('email', text);
    setErrors((errors) => ({
      ...errors,
      email: emailError,
    }));
    setInputs((inputs) => ({
      ...inputs,
      email: text,
    }));
  };
  const handleFullnameChange = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      full_name: text,
    }));
  };
  const validateOnSend = () => {
    const usernameError = validator('username', inputs.username);
    const passwordError = validator('password', inputs.password);
    const emailError = validator('email', inputs.email);
    const confirmError = validator('confirmPassword', {password: inputs.password, confirmPassword: inputs.confirm});
    setErrors((errors) => ({
      ...errors,
      username: usernameError,
      password: passwordError,
      email: emailError,
      confirm: confirmError,
    }));
  };

  const checkUserAvailable = (event) => {
    console.log('chek user', event.nativeEvent.text);
    checkAvailable(event.nativeEvent.text).then((resp) => {
      setErrors((errors) => ({
        ...errors,
        username: resp,
      }));
    });
  };

  return {
    handleLoginUsernameChange,
    handleLoginPasswordChange,
    handleUsernameChange,
    handlePasswordChange,
    handleConfirmChange,
    handleEmailChange,
    handleFullnameChange,
    validateOnSend,
    checkUserAvailable,
    inputs,
    errors,
  };
};

export default useSignUpForm;
