import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export class SettingsScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to SETTINGS FAM</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'Roboto',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
