import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

class Logo extends Component<{}> {
    render() {
      return (
         <View style = {styles.container}>
           <Image
             style={styles.stretch}
             source={require('../images/logo.png')}
           />
           <Text style = {styles.logoText}>LocApp</Text>
         </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    stretch: {
      width: 80,
      height: 80,
      resizeMode: 'stretch',
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    }
  });

  export default Logo;