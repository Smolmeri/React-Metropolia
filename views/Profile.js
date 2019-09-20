import React, {useState, useContext } from 'react';
import {
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import { Content, Card, CardItem, Left, Icon, Body, Image, Structure, Text, Button } from 'native-base';
import { MediaContext } from '../contexts/MediaContext';
import mediaAPI from '../hooks/ApiHooks';

const Profile = (props) => {
  
  const { user } = useContext(MediaContext).user;
  const [avatar, setAvatar] = useState(undefined);
  console.log('avataari', avatar);
  const { getAvatar } = mediaAPI();
  getAvatar().then((result) => {
    setAvatar(result);
  })

  console.log('ret user', user);
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <Structure>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Icon name='ios-person' />
              <Body>
                <Text>{user.username}</Text>
                <Text note>{user.email}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            {avatar &&
              <Image source={{uri: avatar}} style={{height: 200, width: null, flex: 1}} />
            }
          </CardItem>

          <CardItem>
            <Button transparent onPress={signOutAsync}>
              <Icon name='ios-log-out' />
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Structure>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
