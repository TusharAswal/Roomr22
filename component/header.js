
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-native-search-filter'; 

export default class Header extends Component {
    constructor(props){
        super(props);
            this.state={
                name:''
            }
    }

    searching(){
        this.props.goSearch(this.props.name);
    }
    render(){
        //console.log(this.state.name);
        return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={(text)=>this.setState({name:text})}
            />
            <Button title='Search' onPress={()=>this.searching()} style={styles.button}/>
            </View>
            
            );  
            
            
        }
    }
 const mapStateToProps=(state)=> {

 }

  

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#C1C1C1',
        },
        input: {
          
          flex: 0.9,
          
          fontSize: 15,
          backgroundColor: '#FFFFFF',
          
        },
        button:{
            flex:0.1
        },
      });
      