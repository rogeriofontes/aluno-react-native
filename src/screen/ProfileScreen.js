import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';

const width = Dimensions.get('screen').width;

export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      mensagem: '',
    }
  }

  cadastrarAluno() {
    const uri="http://172.21.35.113:9081/api/v1/alunos";
    const requestInfo = {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.nome,
        }),
        headers: new Headers({
            'Content-type': 'application/json'
        })
    }

    fetch(uri, requestInfo)
      .then(response => { 
          console.warn('pp' + response);
          if(response.ok)
           return response.text();

          throw new Error("Não foi possível cadastrar aluno");
      })
      .catch(e => this.setState({ mensagem: e.message }))

  }

  render() {
    return (
      <View>
        <Text style= {styles.titulo}>Aluno</Text>
            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Digite o nome:"
                    onChangeText={texto => this.setState({nome: texto})}
                    autoCapitalize="none" />

              <Button title="cadastrar" onPress={this.cadastrarAluno.bind(this)} />

            </View>
            <Text style={styles.mensagem}>
                  {this.state.mensagem}
            </Text>
            <View style={styles.bottomView} >
              <Text>This is the ProfileScreen screen</Text>
              <Button onPress={() => this.props.navigation.navigate('Home')} title="Home"/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  titulo: {
      fontWeight: 'bold',
      fontSize: 26,
  },
  form: {
      width: width * 0.8
  },
  input: {
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd'
  },
  mensagem: {
      marginTop: 15,
      color: '#e74c3c'
  },
});