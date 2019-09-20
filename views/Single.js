import React from 'react';
// import { SafeAreaView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import AImage from '../components/AsyncImage';
import { Container, Text, Thumbnail, Content } from 'native-base';

const Single = (props) => {
  const { navigation } = props;
  console.log('Single navi', navigation.state);
  const file = navigation.state.params.file;
  return (
    // <SafeAreaView>
    //   <View>
    //     <Text>{file.title}</Text>
    //     <AImage
    //       source={{ uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + file.filename }}
    //       style={{
    //         borderRadius: 50,
    //         width: '100%',
    //         height: '90%',
    //       }}
    //       spinnerColor='#b3e5fc'
    //     />
    //     <Text>{file.description}</Text>
    //   </View>
    // </SafeAreaView>

    <Container>
      <Text>{file.title}</Text>
      {/* <Thumbnail source={{ uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + file.filename }} style={{ borderRadius: 50, borderColor: 'black 1px solid', width: '100%', height: '90%', }} /> */}
      <AImage
        source={{ uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + file.filename }}
        style={{
          borderRadius: 50,
          width: '100%',
          height: '90%',
        }}
      />
      <Text>{file.description}</Text>
    </Container>
  );
};

Single.propTypes = {
  navigation: PropTypes.object,
  file: PropTypes.object,
};

export default Single;
