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
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ListView,
  View
} from 'react-native';
var {height, width} = Dimensions.get('window');
import story1 from "../images/story1.jpg"
import story2 from "../images/story2.jpg"
import story3 from "../images/story3.jpg"
import story4 from "../images/story4.jpg"
import story5 from "../images/story5.jpg"
import story6 from "../images/story6.jpg"
import story7 from "../images/story7.jpg"
import videos from "../images/video.jpg"

import mypost1 from "../images/mypost1.jpg"
import mypost2 from "../images/mypost2.jpg"
import mypost3 from "../images/mypost3.jpg"
import mypost4 from "../images/mypost4.jpg"
import mypost5 from "../images/mypost5.jpg"
import mypost6 from "../images/mypost6.jpg"
import mypost7 from "../images/mypost7.jpg"
import mypost8 from "../images/mypost8.jpg"
import mypost9 from "../images/mypost9.jpg"
var p = -1;

var myposts = [mypost9,mypost2,mypost3,mypost4,mypost5,mypost6,mypost7,mypost8,mypost9]
var imageSize = (width/3) - 1

import Icon from 'react-native-vector-icons/MaterialIcons';


var stories = [story1,story2,story3,story4,story5,story6, story7,]
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class search extends Component {
  constructor(props){
    super(props)

    this.state = {
      stories: ds.cloneWithRows(stories),
      posts: ds.cloneWithRows(myposts),

          }
  }
  eachBox(){
    return(<Image style={{width:100, height:100}}></Image>)
  }
  searchArea(){
    return(<TextInput style={{height:30, margin:5, marginTop:25, padding:10, fontSize:13, borderRadius:5, backgroundColor:'#e5e5e5', textAlign:'center'}} placeholder="Search" />)
  }

  recomendations(){
    return(<View style={{flex:1}}></View>)
  }
   eachStory(x){
    return(<View style={{paddingTop:0, margin:10, height:65, alignItems:'center'}}>
      <Image source ={x} style={{width:54, height:54, marginBottom:8, borderWidth:1, borderColor:'#444', padding:1, borderRadius:27}} resizeMode = "contain" />
      <Text style={{fontSize:10}}>Username</Text>
      </View>)
  }
   myPhotos(x){
     if(p != 8){
    p++
  }else{
    p = 0
  }
    return(<TouchableOpacity style={{width:imageSize,  marginLeft:1, marginTop:1, height:imageSize}}><Image source={myposts[p]} resizeMode="cover" style={{width:null, flex:1, height:null}} /></TouchableOpacity>)
  }
  saved(){
    <View ></View>
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
        {this.searchArea()}
        <ListView
        horizontal = {true}
        style={{}}
        showsHorizontalScrollIndicator = {false}
        renderRow = {(rowData) => this.eachStory(rowData)}
        dataSource = {this.state.stories}
        />
        </View>
        <Image source={videos} resizeMode="cover" style={{flex:1, backgroundColor:'rgba(0,0,0,0)', width:width, height:null, alignItems:'flex-end', flexDirection:'row'}}>
        <Icon name="play-circle-outline" style={{margin:10}} color="#fff" size={30} />
        <View>
        <Text style={{color:'#fff'}}>WATCH</Text>
        <Text style={{color:'#fff', marginBottom:10, fontWeight:'700'}}>Videos You Might Like</Text>
        </View>
        </Image>
        <View style={{flex:2}}>
        <ListView 

        contentContainerStyle = {{flexDirection: 'row',
        flexWrap: 'wrap'}}
        dataSource = {this.state.posts}
        renderRow = {(rowData) => this.myPhotos(rowData)}
        />
        </View>
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

