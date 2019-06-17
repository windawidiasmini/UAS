import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image
} from 'react-native';

export default class Upto extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.logoText}>UPLOAD PHOTO</Text>
				<Image  style={{width:320, height: 280}}
          			source={require('../images/winda.png')}/>
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
	color:'white',
	backgroundColor:'pink',
    justifyContent: 'center',
	alignItems: 'center',
  },
  
});
