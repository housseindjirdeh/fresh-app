import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export const AvatarListItem = () => (
  <View style={styles.avatarItem}>
    <Text style={styles.instructions}>Avatar: Image</Text>
    <Text style={styles.instructions}>Name: Houssein</Text>
  </View>
);

const styles = StyleSheet.create({
  avatarItem: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  instructions: {
    color: 'white'
  }
});

AppRegistry.registerComponent('FreshApp', () => FreshApp);
