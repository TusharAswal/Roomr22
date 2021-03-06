import {Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert } from 'react-native';
import React, { Component } from 'react'; 
import users from './demodata.json'
export default class MyProject extends Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = {
 
      isLoading: true,
      text: '',
    
    }
 
    this.arrayholder = [] ;
  }
 
  componentDidMount() {
        console.log(users);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(users),
        }, function() {
 
          // In this block you can do something with new state.
          this.arrayholder = users ;
 
        });
      
  }
 
  GetListViewItem (name) {
    
   Alert.alert(name);
  
  }
  
   SearchFilterFunction(text){
      console.log(this.arrayholder);
     const newData = this.arrayholder.filter(function(item){
         const itemData = item.name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: this.state.dataSource.cloneWithRows(newData),
         text: text
     })
 }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
 
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 
      <View style={styles.MainContainer}>
 
      <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={(text) => this.SearchFilterFunction(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Search Here"
        />
 
        <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
 
          onPress={this.GetListViewItem.bind(this, rowData.name)} >{rowData.name}</Text>}
 
          enableEmptySections={true}
 
          style={{marginTop: 10}}
 
        />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
 MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  margin: 7,
 
  },
 
 rowViewContainer: {
   fontSize: 17,
   padding: 10,
   fontSize:20,
  },
 
  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   }
 
});