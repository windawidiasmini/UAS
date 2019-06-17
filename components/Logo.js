import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image
} from 'react-native';

export default class Logo extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:120, height: 120}}
          			source={require('../images/logo.png')}/>
          		<Text style={styles.logoText}>ABSEN MAHASISWA</Text>
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 0.1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 5,
  	fontSize:30,
  	color:'black'
  }
});
