import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

export default class frontpage extends Component {
    render() {
        return(
            
                <TouchableOpacity onPress={()=>Actions.page2()}  style={styles.parent}>
                <Image source={require('./front.png')} style={styles.front}/>
                </TouchableOpacity>
            
        );
    }
}

const styles = StyleSheet.create ({
    parent:{
        width: null,
        height: null,
        flex:1,
    },

    front:{
        flex: 1,
    alignSelf: 'stretch',
    width: null,
    height:null,
        
    },
});