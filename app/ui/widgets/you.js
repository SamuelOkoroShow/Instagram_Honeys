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
  ScrollView,
  ListView,
  Text,
  Image,
  View
} from 'react-native';
var users = [{
  "id": 1,
  "name": "fcarter0",
  "time": 100
}, {
  "id": 2,
  "name": "jhudson1",
  "time": 98
}, {
  "id": 3,
  "name": "khill2",
  "time": 54
}, {
  "id": 4,
  "name": "larmstrong3",
  "time": 71
}, {
  "id": 5,
  "name": "nblack4",
  "time": 90
}, {
  "id": 6,
  "name": "shughes5",
  "time": 28
}, {
  "id": 7,
  "name": "brussell6",
  "time": 31
}, {
  "id": 8,
  "name": "pmoreno7",
  "time": 93
}, {
  "id": 9,
  "name": "rking8",
  "time": 67
}, {
  "id": 10,
  "name": "jcarpenter9",
  "time": 60
}, {
  "id": 11,
  "name": "tstewarta",
  "time": 44
}, {
  "id": 12,
  "name": "tbakerb",
  "time": 47
}, {
  "id": 13,
  "name": "tporterc",
  "time": 74
}, {
  "id": 14,
  "name": "sbrooksd",
  "time": 40
}, {
  "id": 15,
  "name": "mmillere",
  "time": 43
}]

var name = "MosaicSam";
var detail = "liked your photo"
var time = "23h"
import subject from "../../images/notif4.jpg"
import image from "../../images/notif1.jpg"
import random from "../../images/notif3.jpg"
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class You extends Component {
  constructor(props){
    super(props)

    this.state = {
      users: ds.cloneWithRows(users)
    }
  }

  likesPhoto(x){
    return(<View style={styles.container}>

      <View style={{flexDirection:'row', alignItems:'center'}}>
       <Image source={image} resizeMode="contain" style={{width:40, height:40, borderRadius:20}} />
       <View>
       <View style={{flexDirection:'row', alignItems:'center'}}>
       <Text style={{fontWeight:'600', fontSize:12, marginLeft:10}}>{name}</Text>
       <Text style={{marginLeft:2, fontSize:12,}}>{detail}</Text>
       </View>
       <Text style={{color:'#999', fontSize:11, marginLeft:10}}>{x.time}h</Text>
       </View>
      </View>

      <Image source={subject} resizeMode="contain" style={{width:40, height:40,}} />
      </View>)
  }
  followsYou(x){
    return(<View style={styles.container}>

      <View style={{flexDirection:'row', alignItems:'center'}}>
       <Image source={image} resizeMode="contain" style={{width:40, height:40, borderRadius:20}} />
       <View>
       <View style={{flexDirection:'row', alignItems:'center'}}>
       <Text style={{fontWeight:'600', fontSize:12, marginLeft:10}}>{name}</Text>
       <Text style={{marginLeft:2, fontSize:12,}}>started following you</Text>
       </View>
       <Text style={{color:'#999', fontSize:11, marginLeft:10}}>{x.time}h</Text>
       </View>
      </View>

      <TouchableOpacity style={{alignItems:'center', backgroundColor:'#33a1ff', padding:4, borderRadius:4, width:80, justifyContent:'center'}}>
      <Text style={{color:'#fff', fontWeight:'500'}}>Follow</Text>
      </TouchableOpacity>
      </View>)
  }
  following(x){
    return(<View style={styles.container}>

      <View style={{flexDirection:'row', alignItems:'center'}}>
       <Image source={image} resizeMode="contain" style={{width:40, height:40, borderRadius:20}} />
       <View>
       <View style={{flexDirection:'row', alignItems:'center'}}>
       <Text style={{fontWeight:'600', fontSize:12, marginLeft:10}}>{name}</Text>
       <Text style={{marginLeft:2, fontSize:12,}}>started following you</Text>
       </View>
       <Text style={{color:'#999', fontSize:11, marginLeft:10}}>{x.time}h</Text>
       </View>
      </View>

      <TouchableOpacity style={{alignItems:'center', backgroundColor:'#fff', borderColor:'#e7e7e7', borderWidth:1, padding:4, borderRadius:4, width:80, justifyContent:'center'}}>
      <Text style={{color:'#333', fontWeight:'500'}}>Following</Text>
      </TouchableOpacity>
      </View>)
  }


  render() {
    return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        {this.followsYou(users[0])}
        {this.following(users[1])}
        {this.following(users[2])}
        {this.likesPhoto(users[3])}
        {this.likesPhoto(users[3])}
        {this.likesPhoto(users[3])}
        {this.followsYou(users[0])}
        {this.following(users[1])}
        {this.following(users[2])}
        {this.likesPhoto(users[3])}
        {this.likesPhoto(users[3])}
        {this.likesPhoto(users[3])}
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:70,
    width:350,
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:'#e7e7e7',
    flexDirection:'row',
    margin:3,
    padding:10,
    alignItems:'center',
    justifyContent:'space-between'
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

