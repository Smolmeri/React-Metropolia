import React, { useState } from 'react';
// import { ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import { Container, Image, Spinner } from 'native-base';

const AImage = (props) => {
  console.log('Asimage props', props);
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    // This only exists so the transition can be seen
    // if loaded too quickly.
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };
  const {
    style,
    source,
  } = props;
  return (
    <Container>
      <Image
        source={source}
        resizeMode={'contain'}
        style={[
          style,
          {
            position: 'absolute',
            resizeMode: 'contain',
          },
        ]}
        onLoad={onLoad} />

      {!loaded &&
        <Container style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Spinner color='green' />
          {/* <ActivityIndicator size="large" color={spinnerColor}/> */}
        </Container>
      }
    </Container>
  );
};

AImage.propTypes = {
  style: PropTypes.object,
  source: PropTypes.object,
};

export default AImage;
