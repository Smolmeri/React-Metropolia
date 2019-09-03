import React from 'react';
import { StyleSheet, View, Text, AsyncStorage, Button } from 'react-native';

const Profile = (props) => {
    const signOutAsync = async () => {
        await AsyncStorage.clear();
        props.navigation.navigate('Auth');
    }
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button title="Logout" onPress={signOutAsync} />
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

export default Profile;