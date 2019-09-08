/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  ListView,
  ScrollView,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';
var {height, width} = Dimensions.get('window');
var p = -1;
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import feed from '../mock/feed'
import story1 from "../images/story1.jpg"
import story2 from "../images/story2.jpg"
import story3 from "../images/story3.jpg"
import story4 from "../images/story4.jpg"
import story5 from "../images/story5.jpg"
import story6 from "../images/story6.jpg"
import story7 from "../images/story7.jpg"

import mypost1 from "../images/mypost1.jpg"
import mypost2 from "../images/mypost2.jpg"
import mypost3 from "../images/mypost3.jpg"
import mypost4 from "../images/mypost4.jpg"
import mypost5 from "../images/mypost5.jpg"
import mypost6 from "../images/mypost6.jpg"
import mypost7 from "../images/mypost7.jpg"
import mypost8 from "../images/mypost8.jpg"
import mypost9 from "../images/mypost9.jpg"

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


var myposts = [mypost9,mypost2,mypost3,mypost4,mypost5,mypost6,mypost7,mypost8,mypost9]

var stories = [story1,story2,story3,story4,story5,story6, story7,]

export default class home extends Component {
  constructor(props){
    super(props)
    this.state = {
      stories: ds.cloneWithRows(stories),
      posts: ds.cloneWithRows(feed)
    }
  }
  eachStory(x){
    return(<View style={{paddingTop:0, margin:10, height:85, justifyContent:'center', alignItems:'center'}}>
      <Image source ={x} style={{width:52, height:52, marginBottom:8, borderRadius:26}} resizeMode = "contain" />
      <Text style={{fontSize:10}}>Username</Text>
      </View>)
  }
  nav(){return(<View style={styles.nav1}>
      <TouchableOpacity>
      <Image source ={require('../images/topcam.png')} resizeMode="contain" style={{height:20, width:20}} />
      </TouchableOpacity>
      <View style={{width:130, alignItems:'center', justifyContent:"center", height:40, borderBottomWidth:2, borderBottomColor:'#333'}}>
      <Image source ={require('../images/logo.png')} resizeMode="contain" style={{height:50, width:110}} />
      </View>
      <TouchableOpacity>
      <Image source ={require('../images/toparrow.png')} resizeMode="contain" style={{height:25, width:25}} />
      </TouchableOpacity>
      </View>)
}
comments(x){
  return(<View style={{}}>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Icon name="favorite" size={10} style={{marginLeft:15, marginRight:5}} color="#222" />
    <Text style={{fontSize:12, fontWeight:'600', color:'#333'}}>93 Likes</Text>
    </View>
    <View style={{ flexDirection:'row', padding:15, paddingBottom:5, paddingTop:4}}>
    <Text style={{fontSize:12, fontWeight:'600'}}>{x.user}</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:11, fontWeight:'400', marginLeft:5}}>{x.content}</Text>
    <Text style={{fontSize:12, fontWeight:'200', color:'#677fbe',}}>#Winning </Text>
    </View>
    </View>
    <Text style={{color:'#777', fontSize:11, marginLeft:15}}>View all 141 comments</Text>
    <Text style={{color:'#777', fontSize:8, margin:10, marginLeft:15,}}>4 DAYS AGO</Text>
    </View>)
}
eachPost(x){
  if(p != 8){
    p++
  }else{
    p = 0
  }
  return(
    <View style={styles.eachPost}>
      <View style={styles.userSection}>
        <View style={{flex:1,flexDirection:'row'}}>
          <Image source = {{uri: x.avatar}} resizeMode="contain" style={{height:30, borderRadius:15, backgroundColor:'#f3f3f3', width:30}} />
          <View style={styles.userDetails}>
            <Text style={{fontSize:13, fontWeight:'700'}}>{x.user}</Text>
            <Text style={{fontSize:11}}>San Diego, CA</Text>
          </View>
        </View>
        <View style={{flex:1, alignItems:'flex-end'}}>
          <Icon name="more-horiz" size={20} color="#888" />
        </View>
      </View>
      <Image source = {myposts[p]} resizeMode="contain" style={{width:width, height:width}} />
      <View style={styles.likes}>
      <View style={{flexDirection:'row', alignItems:"center", flex:1}}>
      <Iconz name = "ios-heart-outline" color="#222" size={22} style={{margin:3,}} />
      <Iconz name = "ios-chatbubbles-outline" color="#222" size={22} style={{margin:5}} />
      <Iconz name = "ios-paper-plane-outline" color="#222" size={22} style={{margin:5}} />
      </View>
            <Iconz name = "ios-bookmark-outline" size={22} style={{margin:0}} />
      </View>
      <View style={styles.comments}>
      {this.comments(x.comment)}
      </View>
    </View>)
}
stories(){
  return( <ListView
        horizontal = {true}
        style={{backgroundColor:'#f3f3f3'}}
        showsHorizontalScrollIndicator = {false}
        renderRow = {(rowData) => this.eachStory(rowData)}
        dataSource = {this.state.stories}
        />)
}

  render() {
    return (
    <View style={styles.container}>
     {this.nav()}
      <ScrollView style={styles.container}>
     
       {this.stories()}
       <ListView
        style={{backgroundColor:'#f9f9f9'}}
        showsHorizontalScrollIndicator = {false}
        renderRow = {(rowData) => this.eachPost(rowData)}
        dataSource = {this.state.posts}
        />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },userSection:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
  },userDetails:{
    flex:1,
    margin:2,
    marginLeft:8,
    alignSelf:'center',
    justifyContent:'center',
  },nav1:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#e7e7e7',
 

    padding:15,
    marginTop:5,
    justifyContent:'space-between',
    alignItems:'center',
    height:50,
    paddingBottom:5,
  },
  likes:{
    height:40,
    margin:10,
    marginTop:2,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    flexDirection:"row",
    alignItems:'center'
  },
  comments:{
    flex:3
  }
});

