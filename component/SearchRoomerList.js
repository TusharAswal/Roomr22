import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image,AsyncStorage } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {Actions} from 'react-native-router-flux';
import styles from './commonstyles';
const KEYS_TO_FILTERS = ['id', 'name'];


export default class SearchRoomerList extends Component {
 constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      image:'',
      title:'', 
      emails:[],
      personselected:[
        {
         image:'https://static.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg',
         title:'Paul'
        },
        {
         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfHQscMOymQ5qNWrM7Ky27w1hlci3y2p3WxCPv3Yg8mbU2Rjp',
         title:''
        },{
         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
         title:''
        },{
         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
         title:''
        },{
         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
         title:''
        },{
         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
         title:'Paul'
        }
      ] 
    }
  }
  async componentDidMount(){
      let response = await AsyncStorage.getItem('personselected');
      let persondetails = await JSON.parse(response) || [];
      this.setState({personselected:persondetails});
      const data = await AsyncStorage.getItem('users');
        if(data){
          this.setState({emails: JSON.parse(data)});
        }else{
          
        }
  }
  async searchperson(image='',title=''){
    const personselected = [...this.state.personselected,
    {
        image:image,
        title:title,
    }];
    await AsyncStorage.setItem('personselected',JSON.stringify(personselected));
    Actions.createhome();
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEmails = this.state.emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    console.log("This",filteredEmails.length);
    let html = '';
    if(filteredEmails.length>0){
    if(this.state.emails.length>0){
        html = ( <ScrollView>
              {filteredEmails.map(email => {
                  return (
                  <TouchableOpacity key={'ksj'} onPress={() => this.searchperson(email.path,email.name)}>
                      <View>
                          <View style = {{flex:1, flexDirection:'row', margin:5, paddingLeft:10,justifyContent:'center'}}>
                                  <View style={{flex: 0.3,justifyContent:'center'}}>
                                      <Image source={{uri: email.path}}
                                       style={{width:70, height:70, borderRadius:35}}/>
                                  </View>
                                  
                                  <View style = {{flex:0.7, justifyContent:'center',}}>
                                      <Text style={{fontSize:15}}>{email.name}</Text>
                                  </View>
                          
                          </View>
                          
                          
                      
                      </View>
                  </TouchableOpacity>
                  )
              })}
          </ScrollView>);}
          
       else{
             html = (<View style={{alignItems:'center',justifyContent:'center'}}><Text>No Person Added</Text></View>)
          }
        }
        else{html = (<View style={{alignItems:'center',justifyContent:'center'}}><Text>No match</Text></View>)}
    return (
        <ScrollView>
      <View style={stylecss.container}>

         <View style={[styles.Searchinputstyle,{flex:0.1,flexDirection:'row'}]}>

            
            <SearchInput 
                onChangeText={(term) => { this.searchUpdated(term) }} 
                style={{width:300}}
                placeholder="Search for a Person"
            />
            <Image source={require('./search.png')} style={[styles.ImageStyle,{}]}/>
          
        </View>

        <View style={{flex:0.8}}> 
            <View style={{marginTop:10}}></View>
            {html}
        </View>
      </View>
                </ScrollView>
    );
  }
}

const stylecss = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    
    // padding:10,
    // paddingLeft:10,
    fontSize:15,
    width:300,
    
  }
});
