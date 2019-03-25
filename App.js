/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';




export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      msg:'loading'
    }
  }



  componentDidMount(){
   
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{'Hello \u0000 World'}</Text>
        <Text style={styles.welcome}>Hello \u0000 World</Text>
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
