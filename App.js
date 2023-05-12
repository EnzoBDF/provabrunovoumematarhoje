
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

import TelaB from './screens/TelaB.js';
import TelaC from './screens/TelaC.js';


export default function App() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaA />} />
        <Route path="/tela-b" element={<TelaB />} />
        <Route path="/tela-c" element={<TelaC />} />
      </Routes>
    </Router>
  );
}

function PaginaA() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' }} 
        style={styles.image}
        resizeMode="contain" 
      />
            <View style={styles.email}>
      <Text style={styles.paragraph}>
        <Image
        source={{ uri: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg' }} 
        style={styles.imageCachorro}
        resizeMode="contain" 
      />SeuEmail.com
      </Text>
      </View>
      <View>
        <TextInput placeholder='E-mail ou telefone'  style={styles.Input}></TextInput>
        <TextInput placeholder='Senha' secureTextEntry style={styles.Input}></TextInput>
      </View>
      <View style={styles.complete}>
      <Text style={styles.forgot}>Esqueceu a Senha?</Text>
      <Link to="/tela-b">
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
      </Link>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgot:{
    color: '#4287f5',
    fontWeight: 700,
  },
  imageCachorro:{
    width: 20,
    height: 20,
    borderRadius: 300,
  },
  paragraph: {
    margin: 15,
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
    padding: 2,
    width: 150,
    borderRadius: 15,
    backgroundColor: '#e0e0dc',
  },
  email:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 100,
  },
  complete:{
    display: 'flex',
    flexDirection:'row',
    marginTop: 120,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  Input:{
    height: 50,
    width: 250,
    borderWidth: 2,
    borderColor: '#4287f5',
    marginBottom: 10,
    borderRadius: 5,
    placeholderTextColor: '#999',
    paddingHorizontal: 10,
  },
  button:{
    paddingHorizontal: 20,
    height: 45,
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 50,
  
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

});
