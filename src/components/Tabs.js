import { TabNavigator, TabBarBottom } from 'react-navigation';
import English from './English';
import Spanish from './Spanish';

const tabs = TabNavigator({
    English:{
        screen: English,
        title: 'Hola',
    },
    Spanish: {
        screen: Spanish,
    }
}, 
{
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        upperCaseLabel: false,
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
});

export default tabs;