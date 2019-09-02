import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../views/Home';
import Profile from '../views/Profiles';
import { createAppContainer } from 'react-navigation';

const Navigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigatorOptions: {
                title: 'Home',
            },
        },

        Profile: {
            screen: Profile,
            navigatorOptions: {
                title: 'Profile',
            },
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const Nav = createAppContainer(Navigator);

export default Nav;