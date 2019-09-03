import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

const Single = (props) => {
    const { navigation } = props;
    const image = navigation.getParam('image');
    const title = navigation.getParam('title');
    const desc = navigation.getParam('desc');
        return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + image}}></Image>
            <Text>{title}</Text>
            <Text>{desc}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        
    },
    image: {
        flex: 1,
        borderRadius: 16,
        height: vh(50),
        width: vw(100),
        margin: 10,
      },
});

export default Single;