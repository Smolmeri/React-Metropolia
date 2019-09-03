/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import List from '../components/List';


const Home = (props) => {
  const {navigation} = props;
  return (
      <SafeAreaView style={styles.container}>
        <List navigation={navigation}/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default Home;
