import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';

const Profile = (props) => {
  console.log('profile props', props);
  const [user, setUser] = useState({});
  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    setUser(JSON.parse(user));
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log('ret user', user);
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };
  return (
    <SafeAreaView>
      {user &&
        <Text>{user.username}</Text>
      }
      <Button title="Logout!" onPress={signOutAsync}
      />
    </SafeAreaView>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
