import React, { Component } from 'react';
import { Image, View, StyleSheet,Text,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Commonheader from './Commonheader';
import styles from './commonstyles';
import search_png from './search.png'
import gray_search_png from './gray_search.png'
import addNewPerson from './addNewPerson.png'
import add_more_png from './icons-plus.png'
import { width, height, totalSize } from 'react-native-dimension';
class Persons extends Component {
    constructor(props){
      super(props);
     this.state = {
    }
  }
    componentDidMount() {
    }
  
    render() {
      return (
        // <ScrollView>
        <View style={{flex:1}}>
            <View style={{flex:0.1,flexDirection:'row',margin:20,backgroundColor:'#fff',borderRadius:10}}>
            <Text style={{flex:1,fontSize:20,marginLeft:width(23),marginTop:(width(3))}} onPress={(e)=>{Actions.searchroomer()}}>Search for a Person</Text>
            <Image source={search_png} style={{margin:15,alignSelf:"center",justifyContent: 'center'}}/>
            </View>

            <View style={{flex:0.8,alignSelf:"center"}}>
            <View style={{flex:0.4}}>
                      <TouchableOpacity onPress={(e)=>{Actions.searchroomer()}}>
                        <Image source={gray_search_png} style={{borderRadius:10,marginTop:20}}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:0.2,justifyContent:'center',margin:10}}>
                      <Text style={{alignSelf:"center"}}> Or </Text>
                    </View>
                    <View style={{flex:0.4}}>
                      <TouchableOpacity onPress={(e)=>{Actions.addperson()}}>
                        <Image source={addNewPerson} style={{borderRadius:10}}/>
                      </TouchableOpacity>
                    </View>

            </View>

            <View style={{flex:0.1, alignItems:'flex-end'}}>
                <TouchableOpacity onPress={(e)=>{Actions.addperson()}}>
                  <Image source={add_more_png} style={{width:60,height:60}}/>
                </TouchableOpacity>
            </View>
          
        </View>
         
      );
    }
  }
  
  export default Persons; 
