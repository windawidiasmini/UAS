import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import Props2 from './Header';
import Upto from './components/Upto';

export default class Uploadphoto extends React.Component {
    static navigationOptions = {
        Props1: null,
      };
    render() {
        const {navigation} = this.props;
        const itemId = navigation.getParam('nama', '');
        return (
        <View style={styles.container}>
            <Props2/>
            <Upto/>
            <View style = {styles.box4}>
          <View style = {styles.tombol}>
            <TouchableHighlight
                  onPressIn={() => this.props.navigation.navigate('About')}
                  accessibilityLabel="About Me"
                  style={styles.vItemMenu}>
                  <Text style={styles.text}>SAVE PHOTO</Text>
              </TouchableHighlight>
          </View>
        </View>

          <View style = {styles.box5}></View>
        </View>
         );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    vbox1: {
        flex:0.7,
        margin: 10,
        borderRadius: 10,
    },
     tombol:{
        backgroundColor:'pink',
        margin:15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
    },
    text:{
        fontSize:20,
        color:'white',
      },
      vItemMenu:{
        flex:1,
        backgroundColor:'pink',
        flexDirection:'column',
        margin:10,
        alignItems:'center',
        justifyContent:'center'
    },
    box5:{
      flex: 0.5,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection : 'row',
    },
    footer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
  },
  box4:{
    flex:5,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },


});
