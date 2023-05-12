import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function TelaC() {
  const navigate = useNavigate();

  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
        
      <View style={styles.header}>
        <Text style={styles.paragraph}>
          Nome da Turma
        </Text>
      </View>
      <View style={styles.container2}>
      <Text style={styles.paragraph2}>
              <Image
        source={{ uri: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg' }}
        style={{ width: 40, height:40, borderRadius: 100, marginRight: 15, }}
      />
Compartilhe com sua turma
      </Text>
    </View>
      <TouchableOpacity style={styles.button} onPress={() => navigate('/')}>
        <Text style={styles.buttonText}>Voltar para a Tela A</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => navigate('/tela-b')}><Text style={styles.footerContent}><Icon name="file" size={20} color="#4e5259" />Mural</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate('/tela-d')}><Text style={styles.footerContent}><Icon name="bars" size={20} color="#4e5259" />Atividades</Text> </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate('/')}> <Text style={styles.footerContent}><Icon name="paperclip" size={20} color="#4e5259" />Pessoas</Text></TouchableOpacity>
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'left',
    width: 400,
    height: 90,
    backgroundColor: '#462ca3',
    marginBottom: 10,
    borderRadius: 5,
    marginTop: '3%',
    top: -400,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 150,
    color: '#FFFFFF'
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: 400,
    height: '8%',
    backgroundColor: '#f7f7f7',
    borderTopWidth: 1,
    borderColor: '#4e5259',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  
    footerContent:{
      display: 'flex',
      alignItems: 'center',
      color: '#4e5259',
      fontWeight: 700,
      flexDirection: 'column',
      cursor: 'pointer',
    },
    container2: {
      justifyContent: 'center',
      height: 70,
      shadowColor: '#000000', // Cor da sombra
      shadowOffset: { width: 0, height: 5 }, 
      shadowOpacity: 0.20, 
      shadowRadius: 5, 
      elevation: 5,
      borderRadius: 10,
      width: 320,
      top: -370,
  
    },
    paragraph2: {
      display: 'flex',
      fontSize: 11,
      textAlign: 'left',
      alignItems: 'center',
      marginLeft: '8%',
      cursor: 'pointer',
    },
    logo2: {
      height: 0,
      width: 0,
    }

});
