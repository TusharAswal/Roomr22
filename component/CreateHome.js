import React, { Component } from 'react';
import { Image, View, StyleSheet,ImageBackground,Text,FlatList,TouchableOpacity,AsyncStorage,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './commonstyles';
import Commonheader from './Commonheader';
import ok_png from './checkmark.png'
import add_more_png from './icons-plus.png'
import page3 from './page3.png'
import roomerjson from './roomrJSON';
import { width, height, totalSize } from 'react-native-dimension';
class CreateHome extends Component {
  constructor(props){
    super(props);
   this.state = {
     list : [
       {
       onclick:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfHQscMOymQ5qNWrM7Ky27w1hlci3y2p3WxCPv3Yg8mbU2Rjp',
        title:'',
       },{
        onclick:0,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
        title:''
       },{
        onclick:0,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
        title:''
       },{
        onclick:0,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
        title:''
       },{
        onclick:0,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
        title:''
       },{
        onclick:0,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
        title:''
       }
     ],
  }
}
FlatListItemSeparator = () => {
  return (
    <View
      style={{
        width: "100%",
        margin: 10,
      }}
    />
  );
}
  async componentDidMount() {
    const data = await AsyncStorage.getItem('personselected');
        if(data){
          let ar = JSON.parse(data);
           ar.push({
            onclick:1,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfHQscMOymQ5qNWrM7Ky27w1hlci3y2p3WxCPv3Yg8mbU2Rjp',
            title:''
           },{
            onclick:0,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NytqLGF_8gV0jBAD867dFnDhDhrb0NeBcdRNHZaru3P2ouIWEg',
            title:''
           });
            this.setState({list: ar});
        }else{
            // this.setState({list:list});
        }
        console.log(this.state.list);
  }

  render() {
    return (
      <View style={{flex:1}}>
      {/* <ScrollView> */}

        <View style={[{flex:0.3}]}>
            <View>
             <Image source={page3} style={{height:height(25),width:null}}/>
            </View>
            <View style={{flexDirection:'row',flex:0.5}}>
            <View style={[{flex:0.5,alignItems:'flex-end',marginLeft:180}]}>
            </View>
            <View style={[{flex:0.5,alignItems:'flex-end',justifyContent:'flex-end'}]}>
            <TouchableOpacity onPress={(e)=>{Actions.persons()}}>
              <Image source={add_more_png} style={{width:50,height:50,marginTop:1200,borderRadius:50,marginRight:10}}/>
              </TouchableOpacity>
              </View>
              </View>
        </View>
        <View style={[{flex:0.5,backgroundColor:'floralwhite'}]}>
        <ScrollView>
        <FlatList
         horizontal={false}
         contentContainerStyle={{flex: 1,alignItems: 'center',justifyContent:'center',marginTop:10}}
         numColumns={3}
          data={ this.state.list }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) =>{
            let action='';
            // if(item.onclick==1)
            //    action = Actions.searchroomer();
            // else
            //    action='';
            return(
              <View style={{marginLeft:10,marginRight:10,marginBottom:0,marginTop:10}}>
                <View>         
                <TouchableOpacity onPress={(e)=>{(item.onclick==1)?Actions.searchroomer():''}}>   
                  <Image source={{uri:item.image}} style={{width:120,height:120,borderRadius:240}}  />
                </TouchableOpacity>
                </View>
                <View style={{backgroundcolor:'rgb(117,192,232)',alignItems: 'center'}}>
                  <Text style={{fontWeight:'bold'}}> {item.title} </Text>
                </View>
             </View>
            )
          } 
          }
        />
        </ScrollView>
        </View>
        <View style={{alignItems:'flex-end',marginRight:15,flex:0.1}}>
        <TouchableOpacity>
          <Image source={require('./ok.png')} style={{width:70,height:70,marginTop:15}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styless = StyleSheet.create({
  page3:{
    

  },
});
export default CreateHome; 
