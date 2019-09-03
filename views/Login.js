import React from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage } from 'react-native';

const userData = {
    username: 'tomppa101',
    password: 'testi123',
}

const Login = (props) => {
    const signInAsync = async (url, data) => {
        console.log('data ', data);
        console.log('url ', url);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        console.log('response json ', json);
        await AsyncStorage.setItem('userToken', response.token);
        props.navigation.navigate('App');
    };
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="Sign in" onPress={
                () => {
                    signInAsync('http://media.mw.metropolia.fi/wbma/login', userData);
                }
            } />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
});

export default Login;