/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: []
    }
  };

  componentDidMount() {
    fetch('http://172.21.35.113:9081/api/v1/alunos')
    .then(resposta => resposta.json())
    .then(json => this.setState({alunos: json}));
  }

  GetItem(item) {
    Alert.alert(item); 
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>

      <FlatList style={styles.container}
            keyExtractor={item => item.id}
            data={this.state.alunos}
            ItemSeparatorComponent={this.separator}
            renderItem={ ({item}) =>
              <View>
                <View style={styles.cabecalho}>
                  <Text>{item.id} - {item.name}</Text>
                </View>
              </View>
            }
        />    
      
      <TouchableOpacity onPress={() => navigate('Profile', {name: 'Jane'})} style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {
    borderBottomColor: '#d1d0d4',
    borderBottomWidth: 10
  },
  fab: { 
    position: 'absolute', 
    width: 56, 
    height: 56, 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: 20, 
    bottom: 20, 
    backgroundColor: '#03A9F4', 
    borderRadius: 30, 
    elevation: 6 
    }, 
    fabIcon: { 
      fontSize: 40, 
      color: 'white' 
    }
});
