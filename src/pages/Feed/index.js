import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


export default class Feed extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data,
        }
    }

  render() {
    return (
        <View style={styles.areaFeed}>

            <View style={styles.viewPerfil}>
            <Image

            source={{uri: this.state.feed.imgperfil}}
            style = {styles.fotoPerfil}/>

            <Text style = {styles.nameUser}>{this.state.feed.nome}</Text>


            </View>
            <Image
            style = {styles.fotoPublicacao}
            source = {{uri: this.state.feed.imgPublicacao}}
            resizeMode='cover'
            />
        </View>

        
    
    
    );
  }
}

const styles =StyleSheet.create({
    areaFeed:{

    },
    nameUser:{
        fontSize: 22,
        textAlign: 'left',
        color: '#000000',
    },

    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,

    },

    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,

    },

    fotoPublicacao:{
        flex: 1,
        height: 400,
        alignItems: 'center',
    }
})