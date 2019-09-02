/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {MediaProvider} from './contexts/MediaContext';
import List from './components/List';


const App = () => {
  return (
    <MediaProvider>
      <SafeAreaView style={styles.container}>
        <List />
      </SafeAreaView>
    </MediaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default App;
