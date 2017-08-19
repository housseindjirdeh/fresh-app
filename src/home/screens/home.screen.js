import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home Screen</Text>
        <Text onPress={() => navigation.navigate('HomeDetails')}>
          GO TO HOME DETAILS
        </Text>
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
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
