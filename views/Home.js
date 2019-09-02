/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import List from '../components/List';


const Home = () => {
  return (
      <SafeAreaView style={styles.container}>
        <List />
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
