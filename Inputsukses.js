import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import Header from './Header';
import Upto from './components/Upto';

export default class About extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Upto/>

        <View style={styles.biodata}>
            <View style={styles.biodatanama}>
                <Text style={styles.textbio}>
                    Nama : NI KADEK WINDA WIDIASMINI{"\n"}
                    Nim    : 1715051118{"\n"}
                    Kelas  : 4C 
                 </Text>
            </View>
        </View>

        <View style={styles.vbox1}>
                   <TouchableHighlight
                        onPressIn={() => this.props.navigation.navigate('Home')}
                        accessibilityLabel="Menu Utama"
                        style={styles.tombol}>
                        <Text style={styles.text}>EXIT</Text>
                    </TouchableHighlight>
                   </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  biodata: {
    flex: 2,
    flexDirection: 'row'
  },
  biodatafoto: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  biodatanama: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  foto:{
      width: 100,
      height: 100,
      borderRadius: 5,
  },
  textbio:{
  fontSize: 16,
  color:'black',
  alignItems: 'center',
  },
  vbox1: {
    flex:2,
    margin: 10,
    borderRadius: 10,
},
tombol:{
  backgroundColor:'pink',
  margin:15,
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 20,
},

});
