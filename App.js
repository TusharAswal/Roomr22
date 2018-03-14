/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  
} from 'react-native-router-flux';
import frontpage from './component/frontpage';
import page2 from './component/page2';
import { width, height, totalSize } from 'react-native-dimension';
import list from './component/list';
import SearchRoomer from './component/SearchRoomerList';
import CreateHome from './component/CreateHome';
import FlatListDemo from './component/listsearch';
import newperson from './component/newperson';
import rooms from './component/rooms';
import CreateRoom from './component/CreateRoom';
import Persons from './component/Persons';
import AddPerson from './component/AddPerson';
const App = () => {
  return(
    <Router navigationBarStyle={styles.root} titleStyle={styles.title} rightButtonTextStyle={styles.right}>
        <Scene key='root'>
            <Scene 
            key='frontpage'
            component={frontpage}
            hideNavBar={true}
            initial
            />

            <Scene key="addperson"
            component={AddPerson}
            title="Add Person"
            titleStyle={styles.adda}
            />
        
            <Scene key="createhome"
            component={CreateHome}
            title="Create Home"
            titleStyle={styles.createhome}
            />

            <Scene key="persons"
            component={Persons}
            title="Add a Person"
            titleStyle={styles.addaperson}
            />
            <Scene key="page2" component={page2} title="Create a Profile"  titleStyle={styles.title1}/>

            <Scene
            key='page2'
            component={page2}
            title='Create your Profile'
            titleStyle={styles.title1}
            />

            <Scene
            key='FlatListDemo'
            component={FlatListDemo}
            title='Add a Person'
            titleStyle={styles.title3}
             />

             <Scene

             key='list'
             component={list}
            />
             <Scene
             key='listsearch'
             component={FlatListDemo}
            />
            <Scene
            key='newperson'
            component={newperson}
            title='Add a new Person'
            titleStyle={styles.title4}
             />
             
             
             <Scene
             key='rooms'
             component={rooms}
             title='Create a New Home'
             titleStyle={styles.title3}
              />
            <Scene key="searchroomer"
              component={SearchRoomer}
              title="Search"
              titleStyle={styles.searching}
              />

               <Scene key="Createroom"
               component={CreateRoom}
                title="CreateRoom"
                />
        </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  root:{
    backgroundColor:'#44237c',
    
    
  },

  title:{

    

    color:'white',
    
    justifyContent: 'space-between',

  },
  createhome:{
    width:width(35),
    color:"white",
    alignSelf:"center",
  },
  right:{
    color: 'white',
    
  },
  searching:{
    alignSelf:"center",
    color:'white',
    width:width(23),
  }
  ,
  title1:{
    
    color:'white',
    width:10,
    
  },
  addaperson:{
    width:width(35),
    color:"white",
    alignSelf:"center",
  },
  title2:{
    
    color:'white',
    width:200,
    alignSelf:'center',
  },
  


  title1:{
    width:180,
    alignSelf: 'center',
    color:'white'
  },

  title2:{
    width:200,
    alignSelf: 'center',
    color:'white'
  },

  title3:{
    width:130,
    alignSelf: 'center',
    color:'white'
  },
  title4:{
    width:180,
    alignSelf: 'center',
    color:'white'
  },
  adda:{
    width:width(27),
    color:"white",
    alignSelf:"center",
  },
});

export default App;