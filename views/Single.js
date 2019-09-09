import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import AImage from '../components/AsyncImage';

const Single = (props) => {
  const { navigation } = props;
  console.log('Single navi', navigation.state);
  const file = navigation.state.params.file;
  return (
    <SafeAreaView>
      <View>
        <Text>{file.title}</Text>
        <AImage
          source={{ uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + file.filename }}
          style={{
            borderRadius: 50,
            width: '100%',
            height: '90%',
          }}
          spinnerColor='#b3e5fc'
        />
        <Text>{file.description}</Text>
      </View>
    </SafeAreaView>
  );
};

Single.propTypes = {
  navigation: PropTypes.object,
  file: PropTypes.object,
};

export default Single;
