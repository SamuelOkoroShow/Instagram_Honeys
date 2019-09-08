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
  ListView,
  Image,
  Text,
  View
} from 'react-native';
import story1 from "../../images/story1.jpg"
import story2 from "../../images/story2.jpg"
import story3 from "../../images/story3.jpg"
import story4 from "../../images/story4.jpg"
import story5 from "../../images/story5.jpg"
import story6 from "../../images/story6.jpg"
import story7 from "../../images/story7.jpg"

import notif1 from "../../images/notif1.jpg"
import notif2 from "../../images/notif2.jpg"
import notif3 from "../../images/notif3.jpg"
import notif4 from "../../images/notif4.jpg"
import notif5 from "../../images/notif5.jpg"
import notif6 from "../../images/notif6.jpg"
var photos = [notif1,notif2,notif3,notif4,notif5,notif6]
var user ={
  name:'Lorem ipsum',
  photos : photos,
  text: ' liked ' + (photos.length + 1) + " photos.",
  time:' 4s'

}
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class Following extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos: ds.cloneWithRows(photos),
    }
  }
  eachRow(x){
    return(<Image source={x} resizeMode="cover" style={{height:45, width:45, margin:2,}} />)
  }
  likes(){
    return(<View style={{flexDirection:'row', flex:1, justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', height:155}}>
        <Image resizeMode="contain" source={story4} style={{width:40, height:40, borderRadius:20, margin:5, borderWidth:1, borderColor:'#999' }}/>
          <View style={{height:145, margin:10, borderBottomWidth:1, borderColor:'#e3e3e3', width:280}}>
              <View style={{flexDirection:'row', alignItems:'center', height:30}}>
              <Text style={{fontWeight:'600', color:'#444', fontSize:13}}>{user.name}</Text>
              <Text style={{fontSize:12}}>{user.text}</Text>
              <Text style={{fontSize:12, color:'#999'}}>{user.time}</Text>
            </View>
            <ListView 
            dataSource = {this.state.photos}
            style={{flex:1, width:230, marginTop:8}}
            contentContainerStyle = {{flexDirection:'row', flex:1, flexWrap:'wrap' }}
            renderRow = {(rowData) => this.eachRow(rowData)}
          />
          </View>
         
        </View>

      </View>)
  }
  following(){
    return(<View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', height:100}}>
        <Image resizeMode="contain" source={story3} style={{width:46, height:46, marginTop:15, borderRadius:23, margin:5, borderWidth:1, borderColor:'#999' }}/>
          <View style={{height:85, width:230, margin:10, padding:10, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
              <View style={{flexDirection:'row', width:220,}}>
              <Text style={{fontSize:12}}>
              <Text style={{fontWeight:'600', color:'#444', fontSize:13}}>{user.name}</Text>
              Started Following 
              <Text style={{fontSize:12, fontWeight:'600'}}>mosaicsam, </Text>
              <Text style={{fontSize:12, fontWeight:'600'}}>brigittetohm, </Text>
              <Text style={{fontSize:12, fontWeight:'600'}}>jakobowens, </Text>
              <Text style={{fontSize:12, }}>and 5 others.</Text>
              <Text style={{fontSize:12, color:'#999'}}> 16s </Text></Text>
            </View>
          </View>
         
        </View>

      </View>)
  }
  render() {
    return (
      <ScrollView style={styles.container}>
      {this.likes()}
      {this.likes()}
      {this.following()}
      {this.likes()}
      {this.following()}
      {this.following()}
      {this.likes()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
 
});

