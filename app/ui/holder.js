3/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Home from './home'
import Profile from './profile'
import Search from './search'
import Heart from './heart'
import Camera from './camera'
import Iconz from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Holder extends Component {
  constructor(props){
    super(props)
    this.state = {
      view: <Home />
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
           {this.state.view}
      <View style={{height:50, flexDirection:'row', backgroundColor:'#fff'}}>
      <TouchableOpacity onPress={() => this.setState({view:<Home />})} style={styles.eachOption}>
      <Iconz name ="ios-home-outline" size={23} color="#222" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.setState({view:<Search />})} style={styles.eachOption}>
      <Iconz name ="ios-ionic-outline" size={23} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.setState({view:<Camera />})} style={styles.eachOption}>
      <Icon name ="plus-square-o" size={23} color="#444" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.setState({view:<Heart />})} style={styles.eachOption}>
      <Iconz name ="ios-heart-outline" size={23} color="#222" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.setState({view:<Profile />})} style={styles.eachOption}>
      <Iconz name ="ios-person-outline" size={23} color="#222" />
      </TouchableOpacity>


      </View>
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end'
  },eachOption:{
    flex:1, alignItems:'center', 
    justifyContent:"center",
    borderTopWidth:1,
    borderColor:'#d7d7d7'
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

