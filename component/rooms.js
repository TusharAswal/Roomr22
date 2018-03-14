import { Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert, Image , TouchableOpacity} from 'react-native';
import React, { Component } from 'react'; 
import { width, height, totalSize } from 'react-native-dimension';

export default class rooms extends Component {
    render() {
        return(
            <View style={styles.parent}>
                <View style={styles.child1}>
                    <Image source={require('./room.png')} style={styles.room}/>
                    <TouchableOpacity onPress={()=>Actions.x()} style={styles.touch}><Image source={require('./plus.png')}/></TouchableOpacity>
                </View>
                
                <View style={styles.child2}><TouchableOpacity onPress={()=>Actions.x()} style={styles.touch1}><Image source={require('./noroom.png')}/></TouchableOpacity></View>
                
                <View style={styles.child3}>
                    <View style={styles.child31}><TouchableOpacity onPress={()=>Actions.x()} style={styles.touch2}><Image source={require('./back.png')}/></TouchableOpacity></View>
                    <View style={styles.child32}><TouchableOpacity onPress={()=>Actions.x()} style={styles.touch3}><Image source={require('./okk.png')}/></TouchableOpacity></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
 parent:{ flex:1, },
 child1:{ flex:0.3,  backgroundColor:'#f7f6f6', position:'relative' },
 room:{  width: null},
 touch:{position:'absolute',alignSelf:'flex-end' , marginTop:120},
 child2:{ backgroundColor:'white', position:'relative', flex:0.5} ,

 touch1:{  alignItems: 'center', margin:55, marginRight:5},
 touch2:{  alignSelf:'flex-start', marginLeft:20},
 touch3:{  alignSelf:'flex-end', marginRight:20},
 child3:{ flex:0.2,  backgroundColor:'white', position:'relative', flexDirection:'row'},
 child31:{ flex:0.5 },
 child32:{ flex:0.5 },
});