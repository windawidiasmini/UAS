import React from 'react';
import {StyleSheet,Text, View ,TouchableHighlight, TextInput, Image } from 'react-native';
import Header from './Header';
import Logo from './components/Logo';
import Form from './components/Form';

export default class Login extends React.Component {
  static navigationOptions = {
    Props1: null,
  };
  constructor (props){
    super(props)
    this.state = {
    nama: '',
    }
}
  render(){
    return(
      <View style ={styles.containerMain}>
      <Header/>
      <Logo/>
      <Form/>
        <View style = {styles.box3}>
          <View style = {styles.tombol}>
            <TouchableHighlight
                onPressIn={() => this.props.navigation.navigate('Hitung', {nama: this.state.nama})}
                accessibilityLabel="BMI"
                style={styles.vItemMenu}>
                <Text style={styles.text}>Login</Text>
            </TouchableHighlight>
          
          </View>
        </View>

          <View style = {styles.box5}></View>
        </View>

    );
  }
}
const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: 'white',
      flex:1,
    },

    vItemMenu:{
        flex:1,
        backgroundColor:'pink',
        flexDirection:'column',
        margin:10,
        alignItems:'center',
        justifyContent:'center'

    },
    box3:{
      flex:0.5,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection : 'row',
    },

    txtInput: {
      width: 300,
      backgroundColor:'#fff',
      borderColor: 'green',
      alignItems: 'center',
      borderWidth: 2,
  },
    box5:{
        flex: 0.2,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection : 'row',
      },
    text:{
      fontSize:20,
      color:'white',
    },
    tombol:{
      backgroundColor:'pink',
      justifyContent:'space-around',
      padding:5,
      width: 325,
      height:70,
      borderRadius:10,
    },
});
