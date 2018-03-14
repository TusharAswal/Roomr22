import Row from './Row';
import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import data from './demodata';
import Header from './header'; 
import Footer from './footer';
import {Actions} from 'react-native-router-flux';
class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource: ds.cloneWithRows(data),
    };
}
  render() {
    return (
      <ListView
        style={styles.container}
        renderHeader={() => <Header />}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
        renderFooter={() => <Footer />}
      />
    );
  }
}
const styles= StyleSheet.create({
  container:{

  },
});
export default ListViewDemo;
