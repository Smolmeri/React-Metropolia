/* eslint-disable max-len */
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';


const Home = (props) => {
  const { navigation } = props;
  const { getUserFromToken } = mediaAPI();
  getUserFromToken();
  return (
    <SafeAreaView>
      <List navigation={navigation}></List>
    </SafeAreaView>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
