import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


export default class Header extends Component {
  render() {
    return (
    
       

        <View style = {styles.header}>
          <TouchableOpacity>
            <Image style = {styles.logo} source = {require('./../../assets/logo.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style = {styles.send} source = {require('./../../assets/send.png')} />
          </TouchableOpacity>
        </View>




 
    );
  }
}
const styles = StyleSheet.create({

  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },

  logo:{

  },
  send:{
    width: 23,
    height: 23
  }
})