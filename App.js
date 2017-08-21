import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import { AppNavigator } from './routes';

import { store } from './root.store';

export default class FreshApp extends React.Component {
  componentDidMount() {
    persistStore(store, { storage: AsyncStorage, blacklist: ['settings'] });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('FreshApp', () => FreshApp);
