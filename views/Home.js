/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';
import mediaAPI from '../hooks/ApiHooks';
import { List as BaseList, Container, Header, Title, Button, Left, Icon, Body } from 'native-base';


const Home = (props) => {
  const { navigation } = props;
  const { getUserFromToken } = mediaAPI();
  getUserFromToken();
  const { userToContext } = mediaAPI();
  userToContext().then((user) => {
    console.log('usercontext', user);
  });

  return (
    <Container>
      <Header>
          <Title>Wastic</Title>
      </Header>
      <List navigation={navigation} />
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
