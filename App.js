/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ProfileScreen from './src/screen/ProfileScreen';
import Home from './src/components/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TabNavigator = createBottomTabNavigator({
  Home: {screen: Home,
    navigationOptions: {
        tabBarLabel: 'High Scores',
        tabBarIcon: ({tintColor}) =>
          <Icon name="home" size={25} color={tintColor} />
    }
  },
  Profile: {screen: ProfileScreen,
    navigationOptions: {
        tabBarLabel: 'High Scores',
        tabBarIcon: ({tintColor}) =>
          <Icon name="chart-bar" size={25} color={tintColor} />
    }
  },
},
{
   tabBarOptions: {
     activeTintColor: '#42f44b',
     inactiveTintColor: 'gray',
   }
});

const RootStack = createAppContainer(TabNavigator);
export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}