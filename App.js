import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  testAlert(){
    alert('enviou')
  }
  render() {
    return (
      <View style={styles.viewContent}>
        <View style={styles.viewInput} >
          <Text style={styles.textStyle} >Digite seu nome: </Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Nome"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.testAlert}
            title="Enviar"
            color="#031A3D"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 22,
  },
  textInputStyle: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewContent:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInput:{
    width:'100%',
    backgroundColor:'#ccc',
  },
  buttonContainer:{
    padding:10,
    width: '100%',
  },
});
