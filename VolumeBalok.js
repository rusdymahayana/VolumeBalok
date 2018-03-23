import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class VolumeBalok extends Component {
  constructor(props){
    super(props)
    this.state={
      panjang:0,
      tinggi:0,
      lebar:0,
      volume:0
    };
  }

  render(){
    return (
      <View style = {styles.main}>

        <View style={{backgroundColor:'#001298'}}>
          <Text style = {styles.header}>
            Menghitung Volume Balok
          </Text>
        </View>

        <View style={styles.view}>
          <TextInput style = {{height: 50}}
            placeholder="Masukkan panjang"
            onChangeText={(panjang)=>this.setState({panjang})}
            keyboardType = 'numeric'
          />
          <TextInput style = {{height: 50}}
            placeholder="Masukkan Lebar"
            onChangeText={(lebar)=>this.setState({lebar})}
            keyboardType = 'numeric'
          />
          <TextInput style = {{height: 50}}
            placeholder="Masukkan Tinggi"
            onChangeText={(tinggi)=>this.setState({tinggi})}
            keyboardType = 'numeric'
          />

          <Button
            onPress={()=>this.setState({
              volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
            })}
            title="Hitung"
            accessibilitylabel="Klik untuk menghitung"
          />
        </View>

        <View style={{margin:20, backgroundColor:'#2130a6'}}>
          <Text style = {styles.hasil}>
            Panjang = {this.state.panjang} {"\n"}
            Lebar = {this.state.lebar} {"\n"}
            Tinggi = {this.state.tinggi} {"\n"}
            Volume = {this.state.volume}
          </Text>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
hasil: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
  padding : 10,
},
header: {
  padding : 10,
  fontSize : 20,
  textAlign : "center",
  color: 'white',
},
view: {
  margin:20,
  padding: 10,
  backgroundColor:'#e3f2fd',
},
main: {
  flex:1,
  backgroundColor:'#90caf9'
},
});
