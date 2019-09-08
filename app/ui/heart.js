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
import ScrollableTabView from 'react-native-scrollable-tab-view'
import You from './widgets/you'
import Following from './widgets/following'

export default class Heart extends Component {
  eachHeart(x){
    return(<View style={{height:250}}></View>)
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView tabBarTextStyle={{fontWeight:'600', fontSize:13}} tabBarInactiveTextColor="#999" tabBarActiveTextColor="#444" tabBarUnderlineStyle={{height:2, backgroundColor:'#333'}}>
        <Following tabLabel="FOLLOWING" />
        <You tabLabel="YOU" />
      
      </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingTop:17
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

