import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../views/Home';
import Profile from '../views/Profiles';
import Single from '../views/Single';
import AuthLoading from '../views/AuthLoading';
import Login from '../views/Login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home',
            },
        },

        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profile',
            },
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const StackNavigator = createStackNavigator(
    {
        Home: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            },
        },
        Single: {
            screen: Single,
        },
        Logout: {
            screen: Login,
        },
    },
);

const Navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: StackNavigator,
        Auth: Login,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

const Nav = createAppContainer(Navigator);

export default Nav;