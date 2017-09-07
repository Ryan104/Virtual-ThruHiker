/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DestinationCard from './src/components/DestinationCard';
import HeaderCard from './src/components/HeaderCard';

export default class virtualthruhiker extends Component {
  state = { miles:10 }
  render() {
    return (
      <View>
        <HeaderCard miles={this.state.miles} />
        <DestinationCard type="SHELTER" miles={this.state.miles} />
        <DestinationCard type="TOWN" miles={this.state.miles} />
        <DestinationCard type="FEATURE" miles={this.state.miles} />
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
  }
});

AppRegistry.registerComponent('virtualthruhiker', () => virtualthruhiker);
