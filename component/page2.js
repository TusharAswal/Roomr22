import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import {
  Actions,
} from 'react-native-router-flux';

export default class page2 extends Component {
    render(){
        return(
            <View style={styles.parent} >
                    <View style={styles.child1}>
                        <TouchableOpacity onPress={()=>Actions.createhome()} >
                        <Image source={require('./page2.1.png')}  style={styles.page2} />
                        </TouchableOpacity>
                    </View>
                        <View style={styles.child2}>
                        <TouchableOpacity onPress={()=>Actions.createhome()} >
                        <Image source={require('./page2.2.png')} style={styles.page2}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.child3}>
                        <Text style={styles.bottom}>Skip & Browse</Text>
                    </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    parent:{
        flex:1,
        
       
    },
    child1:{
        flex:0.45,
        marginLeft:25,
        marginRight:25,
        
        marginTop:25,
        borderRadius:15,
        overflow: 'hidden',
        
        
    },
    child2:{
        flex:0.45,
        margin:25,
        borderRadius:15,
        overflow: 'hidden',
        
        
    },
    child3:{
        flex:0.1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    page2:{

        width:null,
        resizeMode:'stretch',

       
        alignSelf: 'stretch',
        width: null,

        height:height(32),
    },
    bottom:{
        color:'#949494',
        fontSize:25,
        textAlign:'center',
    },
    
    
});