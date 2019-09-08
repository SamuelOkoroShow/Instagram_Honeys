/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import mypost1 from "../images/mypost1.jpg"
import mypost2 from "../images/mypost2.jpg"
import mypost3 from "../images/mypost3.jpg"
import mypost4 from "../images/mypost4.jpg"
import mypost5 from "../images/mypost5.jpg"
import mypost6 from "../images/mypost6.jpg"
import mypost7 from "../images/mypost7.jpg"
import mypost8 from "../images/mypost8.jpg"
import mypost9 from "../images/mypost9.jpg"
import myphotos from "../mock/myphotos"
var {height, width} = Dimensions.get('window');

var myposts = [mypost9,mypost2,mypost3,mypost4,mypost5,mypost6,mypost7,mypost8,mypost9]

var p = -1;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var imageSize = (width/4) - 1


export default class camera extends Component {
    constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(myposts)
    }
  }

  video(){
    return(<View style={{flex:1}}></View>)
  }
  nav(){
    return(<View style={{height:60, padding:5, backgroundColor:'#fff', paddingTop:15, justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
    <Text>Cancel</Text>
    <Text>Camera row</Text>
    <Text>Next</Text>
    </View>)
  }

  //This should really use an image picker instad. I'm just keeping this simple for now
 
  image(){
return(<Image source={require('../images/video.jpg')} resizeMode="cover" style={{flex:2, width:null, height:null, justifyContent:'flex-end'}}></Image>)
  }
   myPhotos(x){
    return(<Image source={x} resizeMode="cover" style={{width:imageSize, marginLeft:1, marginTop:1, height:imageSize}} />)
  }
  cameraRow(){
    return(<ListView 
        style={{flex:1}}
        contentContainerStyle = {{flexDirection: 'row',
        flexWrap: 'wrap'}}
        dataSource = {this.state.dataSource}
        renderRow = {(rowData) => this.myPhotos(rowData)}
        />)
  }
  render() {
    return (
      <View style={styles.container}>
        {this.nav()}
        {this.image()}
        {this.cameraRow()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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

