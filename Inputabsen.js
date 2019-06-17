import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';
import Props2 from './Header';

export default class Inputabsen extends React.Component {
    static navigationOptions = {
        Props1: null,
      };
    render() {
        const {navigation} = this.props;
        const itemId = navigation.getParam('nama', '');
        return (
        <View style={styles.container}>
            <Props2/>
            <View style={styles.boxAtas}>
        <Image source={{uri: 'http://mhs.rey1024.com/uts/gambar.png'}}
       style={{width: 100, height: 100}} />
        </View>

        <View style = {styles.box31}>
          <Text style = {styles.text1}>NAMA :</Text>
          <TextInput style={styles.txtInput} onChangeText={TextInputText =>
          this.setState({nama : TextInputText})}> </TextInput>
        </View>
        <View style = {styles.box31}>
          <Text style = {styles.text1}>NIM :</Text>
          <TextInput style={styles.txtInput} onChangeText={TextInputText =>
          this.setState({nama : TextInputText})}> </TextInput>
        </View>
        <View style = {styles.box31}>
          <Text style = {styles.text1}>KELAS :</Text>
          <TextInput style={styles.txtInput} onChangeText={TextInputText =>
          this.setState({nama : TextInputText})}> </TextInput>
        </View>

            <View style={styles.footer}>
                   <View style={styles.vbox1}>
                   <TouchableHighlight
                        onPressIn={() => this.props.navigation.navigate('Hitungkurs')}
                        accessibilityLabel="CekKurs"
                        style={styles.tombol}>
                        <Text style={styles.text}>ABSEN</Text>
                    </TouchableHighlight>
                   </View>
                   <View style={styles.vbox1}>
                   <TouchableHighlight
                        onPressIn={() => this.props.navigation.navigate('Home')}
                        accessibilityLabel="Menu Utama"
                        style={styles.tombol}>
                        <Text style={styles.text}>Back</Text>
                    </TouchableHighlight>
                   </View>
            </View>
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
    boxAtas: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
      },
      box31:{
        flex: 0.6,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection : 'column',
      },
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
      text1:{
        fontSize:15,
        color:'black',
      },
      txtInput: {
        width: 300,
        backgroundColor:'#fff',
        borderColor: 'pink',
        alignItems: 'center',
        borderWidth: 1,
    },

});
