import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Link } from 'react-router-dom';

export default function TelaB() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
       <Image
        source={{ uri: 'https://assets.stickpng.com/images/588a64e7d06f6719692a2d11.png' }} 
        style={styles.image}
        resizeMode="contain" 
      />
      <Text style={styles.title}>Google Classroom</Text>
           <Image
        source={{ uri: 'https://icones.pro/wp-content/uploads/2021/04/nouvelle-icone-grise.png' }} 
        style={styles.image}
        resizeMode="contain" 
      />
    </View>
      <Text style={styles.paragraph}>
      </Text>
      <View style={styles.estilo}>
      </View>
      <Link to="/tela-c">
      <View style={styles.Card}>
        <Text style={styles.TextDecoration1}>Sala de Aula</Text>
        <Text style={styles.TextDecoration2}>Materia</Text>
        <Text style={styles.TextDecoration3}>Professor</Text>
      </View>
      </Link>
      <Link to="/tela-c">
      <View style={styles.Card}>
        <Text style={styles.TextDecoration1}>Sala de Aula</Text>
        <Text style={styles.TextDecoration2}>Materia</Text>
        <Text style={styles.TextDecoration3}>Professor</Text>
      </View>
      </Link>
      <Link to="/tela-c">
      <View style={styles.Card}>
        <Text style={styles.TextDecoration1}>Sala de Aula</Text>
        <Text style={styles.TextDecoration2}>Materia</Text>
        <Text style={styles.TextDecoration3}>Professor</Text>
      </View>
      </Link>
      <Link to="/tela-c">
      <View style={styles.Card}>
        <Text style={styles.TextDecoration1}>Sala de Aula</Text>
        <Text style={styles.TextDecoration2}>Materia</Text>
        <Text style={styles.TextDecoration3}>Professor</Text>
      </View>
      </Link>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 50,
    height: 30,
  },
  header: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#9fa6a1',
    width: 500,
    flexDirection: 'row',
    alignContent: 'left',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  Card:{
    backgroundColor: '#3264ba',
    resizeMode: 'contain',
    flex: 1,
    display: 'flex',
    height:170,
    width: 310,
    borderRadius: 15,
    marginBottom: 15,
  },
  TextDecoration1:{
    marginLeft: 15,
    color: 'white',
    fontWeight: 500,
    fontSize: 18,
  },
  TextDecoration2:{
    fontWeight: 450,
    marginLeft: 15,
    color: 'white',
    fontSize: 14,
  },
  TextDecoration3:{
    position: 'relative',
    marginLeft: 15,
    color: 'white',
    top: '43%',
    zIndex: 2,
    fontSize: 12,
  },
});

console.log()