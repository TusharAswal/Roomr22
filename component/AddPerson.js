import React, { Component } from 'react';
import { Image, View, StyleSheet,Text,TouchableOpacity,TextInput,ScrollView,Platform,AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Commonheader from './Commonheader';
import styles from './commonstyles';
import camera_png from './camera.png'
import add_more_png from './plus.png'
import TagInput from 'react-native-tag-input';
import { width, height, totalSize } from 'react-native-dimension';

const inputProps = {
  keyboardType: 'default',
  placeholder: 'Add More',
  autoFocus: true,
  style: {
    fontSize: 14,
    marginVertical: Platform.OS == 'ios' ? 10 : -2,
  },
};
class AddPerson extends Component {
    constructor(props){
      super(props);
      // asyncusers = 
     this.state = {
       tags:['Cooking','Music','Weekends','Coffee','Running'],
       text: "",
       cameraon:false,
       path:'https://png.icons8.com/android/1600/user.png',
       name:'',
       age:'',
      //  users:asyncusers
    }
  }
  setresetcamera(){
    this.setState({'cameraon':true});
  }
  onChangeTags = (tags) => {
    this.setState({ tags });
  }

  onChangeText = (text) => {
    this.setState({ text });

    const lastTyped = text.charAt(text.length - 1);
    const parseWhen = [',', ' ', ';', '\n'];

    if (parseWhen.indexOf(lastTyped) > -1) {
      this.setState({
        tags: [...this.state.tags, this.state.text],
        text: "",
      });
    }
  }

  labelExtractor = (tag) => tag;

  async componentDidMount(){

    let response = await AsyncStorage.getItem('users'); 
    let listOfUsers = await JSON.parse(response) || [];
    this.setState({users:listOfUsers});
  }
  async _addPerson () {
    
    const users = [...this.state.users,
      {
       name:this.state.name,
       age:this.state.age,
       path:this.state.path
      } ]; 
      if(this.state.name == '')
      {
        alert('Please Enter Name');
      }
      else
      {
         console.log(users);
      await AsyncStorage.setItem('users', 
        JSON.stringify(users)); 
        alert('Added');
      }
   
    }
  
    render() {
      return (
        <View style={{flex:1}}>
          
          <View style={[{flex:0.9}]}>

          <ScrollView>
          <View style={{flex:0.4,alignItems:'center',backgroundColor:'rgb(247,246,246)'}}>
                <View style={{flex:0.8,margin:20,}}>
                <TouchableOpacity>
                  <Image source={{uri:this.state.path}} style={{width:100,height:100,borderColor:'gray',borderRadius:80}}/>
                </TouchableOpacity>
                </View>
                <View style={{flex:0.2,flexDirection:'row'}}>
                    <View style={{flex:0.5,marginLeft:40}}><Text style={{color:'black',fontSize:20}}>Name</Text></View>
                    <View style={{flex:0.5}}><Text style={{color:'black',fontSize:20}}>Age</Text></View>
                </View>
          </View>
          <View style={{flex:0.1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:0.5,marginLeft:35}}>
                <TextInput  
                  style={{fontSize:20}}
                  placeholder="Anand"
                  underlineColorAndroid="transparent"
                  onChangeText={(value)=>{this.setState({name:value})}}
                  />
                  </View>
                <View style={{flex:0.5}}>
                <TextInput  
                 style={{fontSize:20}}
                  placeholder="26"
                  underlineColorAndroid="transparent"
                  onChangeText={(value)=>{this.setState({age:value})}}
                  />
                  </View>
            </View>
          <View style={{flex:0.1,flexDirection:'row',alignItems:'center',backgroundColor:'rgb(247,246,246)'}}>
                <View style={{flex:0.5,marginLeft:40}}><Text style={{color:'black',fontSize:20}}>Tags</Text></View>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',flex:0.4,margin:20,height:height(35)}}>

    
          <TagInput
            style={{fontSize:20}}
            value={this.state.tags}
            onChange={this.onChangeTags}
            labelExtractor={this.labelExtractor}
            text={this.state.text}
            tagContainerStyle={{height:50,borderRadius:20}}
            onChangeText={this.onChangeText}
            tagColor="#412277"
            tagTextColor="white"
            inputProps={inputProps}
            maxHeight={75}
           
          />
            </View>

          </ScrollView>
          </View>

          <View style={[{flex:0.1,margin:15,backgroundColor:'rgb(68,179,228)'},styles.flexcontentmiddle]}>
            <TouchableOpacity onPress={(e)=>{this._addPerson();}}>
                <Text style={[{fontSize:20,margin:10,backgroundColor:'rgb(68,179,228)'}]}>Add</Text>
            </TouchableOpacity>
            </View>
         
        </View>
      );
    
    }
  }
  
  export default AddPerson; 
  const stylecss = StyleSheet.create({
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    },
    fullwidth: {
      flex: 1,
      flexDirection:'column',
      backgroundColor:'rgb(213,144,189)'
    },
    highlighttext: {
        fontWeight: 'bold',
        fontSize:30,
        color:'rgb(0,101,150)',
    },
    roundedimage: {
        width:200,
        height:500,
        flex:1,
        borderRadius: 100
    }
  });