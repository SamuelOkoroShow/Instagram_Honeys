/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Image,
  ListView,
  Dimensions,
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
var p = -1;

var myposts = [mypost9,mypost2,mypost3,mypost4,mypost5,mypost6,mypost7,mypost8,mypost9]

import myInfo from "../mock/myProfile"
import myphotos from "../mock/myphotos"
var image = "https://scontent.fgdl1-1.fna.fbcdn.net/v/t1.0-9/15894831_10211899836556181_2833448584105931100_n.jpg?oh=e5d8c27be5e6da171ee3996abeb2c484&oe=594B626D"
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var {height, width} = Dimensions.get('window');
var imageSize = (width/3) - 1
export default class profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(myphotos)
    }
  }
  metrics(){
    return(<View style={{flex:2, margin:15, marginBottom:5, flexDirection:'row', justifyContent:'space-around'}}>
      <View style={{alignItems:"center", margin:15, justifyContent:'center'}}>
      <Text style={{fontWeight:'400', fontSize:18}}>{myInfo.metrics.posts}</Text>
      <Text style={{color:"#888", fontSize:13}}>posts</Text>
      </View>
      <View style={{alignItems:"center", margin:15, justifyContent:'center'}}>
      <Text style={{fontWeight:'400', fontSize:18}}>{myInfo.metrics.followers}</Text>
      <Text style={{color:"#888", fontSize:13}}>followers</Text>
      </View>
      <View style={{alignItems:"center", margin:15, justifyContent:'center'}}>
      <Text style={{fontWeight:'400', fontSize:18}}>{myInfo.metrics.following}</Text>
      <Text style={{color:"#888", fontSize:13}}>following</Text>
      </View>
      </View>)
  }
  info(){
    return(<View style={{flex:2, padding:10, paddingTop:0}}>
      <View style={{flex:3, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Image source ={{uri : image}} resizeMode = "cover" style={{width:80, height:80, borderRadius:40}} />
      <View style={{flex:3}}>{this.metrics()}<View style={{flex:2, alignItems:'center'}}><View style={{width:240, height:30, margin:5, borderColor:'#ddd', borderRadius:4, borderWidth:1, alignItems:"center", justifyContent:'center'}}><Text style={{fontWeight:'600', color:'#333'}}>Edit Profile</Text></View>
</View></View>
      </View>
      <View style={{flex:2}}>
      <Text style={{fontWeight:'700', fontSize:14}}>Samuel Okoro</Text>
      <Text style={{fontWeight:'400', fontSize:14}}>Sky Captain of the Galaxy</Text>
      <Text style={{fontWeight:'400', fontSize:14, color:'#2f89bd'}}>vctrysam.co/</Text>
      </View>
      </View>)
  }
  myPhotos(x){
     if(p != 8){
    p++
  }else{
    p = 0
  }
    return(<Image source={myposts[p]} resizeMode="contain" style={{width:imageSize, marginLeft:1, marginTop:1, height:imageSize}} />)
  }
  saved(){
    <View ></View>
  }
  nav(){
    return(<View style={{height:60, flexDirection:'row', paddingLeft:10, paddingRight:10, paddingTop:10, alignItems:'center',justifyContent:'space-between', borderBottomWidth:1, borderBottomColor:'#e7e7e7'}}>
      <Icon name="ios-person-add" size={20} />
      <Text style={{fontWeight:'600', fontSize:16}}>mosaicsam</Text>
      <Icon name="ios-cog" size={20} />
      </View>)
  }
  render() {
    return (
      <View style={styles.container}>
      {this.nav()}
      <ScrollView style={{flex:1,}}>
      {this.info()}
        <View style={{flex:5}}>
            <View style={{height:70, borderBottomWidth:1, borderTopWidth:1, borderColor:'#f7f7f7', alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
              <Icon name="ios-grid-outline" size={25} color='#888' />
              <Icon name="ios-list" size={25} color='#888' />
              <Icon name="ios-pin" size={25} color='#888' />
              <Icon name="ios-bookmark-outline" size={25} color='#888' />
            </View>
        <View>
        <ListView 

        contentContainerStyle = {{flexDirection: 'row',
        flexWrap: 'wrap'}}
        dataSource = {this.state.dataSource}
        renderRow = {(rowData) => this.myPhotos(rowData)}
        />

        </View>
      </View>
      </ScrollView>
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

