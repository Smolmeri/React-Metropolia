import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../views/Home';
import Profile from '../views/Profiles';
import Single from '../views/Single';
import { createAppContainer } from 'react-navigation';
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

const Navigator = createStackNavigator(
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
    },
);

const Nav = createAppContainer(Navigator);

export default Nav;