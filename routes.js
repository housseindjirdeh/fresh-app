import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HomeScreen, HomeDetailsScreen } from 'home';
import { SettingsScreen } from 'settings';

export const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  HomeDetails: {
    screen: HomeDetailsScreen,
    navigationOptions: {
      headerTitle: 'Home Details',
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: 'Settings',
    },
  },
});

export const AppNavigator = TabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="home" size={26} style={{ color: tintColor }} />,
      },
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="settings" size={26} style={{ color: tintColor }} />,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);
