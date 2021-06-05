import React, { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacit, StatusBar } from 'react-native';

import Routes from './components/Routes';
import {connect} from "react-redux";

class Main extends Component<{}> {
    render() {
      return (
        <View style = {styles.container}>
          <StatusBar 
          backgroundColor = "#0064b7"
          barStyle = 'light-content'
          />
         <Routes/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
   });

  export default connect(null, null)(Main);