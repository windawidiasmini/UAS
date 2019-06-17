import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight,FlatList, TextInput} from 'react-native';

const Header = (props) => {
  return (
    <View style={{height:100, justifyContent:'center' ,alignItems:'center',backgroundColor: "pink"}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>
          UAS PROGRES Aplikasi Mobile
        </Text>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>
               Absen Mahasiswa
            </Text>
        <Text style={{fontSize:16, fontWeight:'bold', color:'#fff'}}>
            NI KADEK WINDA WIDIASMINI 1715051118
        </Text>
    </View>
  );
}

export default Header;
