import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,Button,Picker,ScrollView
} from 'react-native';


export default class screen1 extends Component<{}> {
  constructor(){
    super();
    this.state={
      PickerValue:''
      
    }
    
  };
  
  pr = () => {
   alert('this'); 
   this.props.navigation.navigate("tscreen");
  }
componentDidMount(){
  alert('WELLCOME TO MY RESUME')
}
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.welcome}>
         ZULFAN REZA
        </Text>
        <Text style={styles.welcome}>
         ZULFANREZA28@gmail.com
        </Text>
        <Text style={styles.welcome}>
         +62 823 6834 4544
        </Text>
        <Text style={styles.welcome}>
         Address
        </Text>
        <Text style={styles.welcome}>
         JALAN NISAM 07 JUSUN II DESA
TAMBON TUNONG KEC.
DEWANTARA POSCODE 24354
        </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
