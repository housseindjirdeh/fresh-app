import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { fetchHomeInfo } from 'home';
import { getHomeTitle, getHomeDetails } from '../home.selectors';

// const mapStateToProps = state => ({
//   homeTitle: state.home.homeTitle,
//   homeDetails: state.home.homeDetails
// });

const mapStateToProps = createStructuredSelector({
  homeTitle: getHomeTitle,
  homeDetails: getHomeDetails
});

const mapDispatchToProps = dispatch => ({
  fetchHomeInfoByDispatch: () => dispatch(fetchHomeInfo())
});

class HomeDetails extends Component {
  componentDidMount() {
    const { fetchHomeInfoByDispatch } = this.props;

    fetchHomeInfoByDispatch();
  }

  render() {
    const { homeTitle, homeDetails, navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{homeTitle}</Text>
        <Text style={styles.welcomeDetails}>{homeDetails}</Text>
        <Text onPress={() => navigation.goBack()}>GO BACK</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  welcome: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export const HomeDetailsScreen = connect(mapStateToProps, mapDispatchToProps)(
  HomeDetails
);
