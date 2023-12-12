import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';    
const Dashboard = ({ navigation }) => {
    const storeName = 'Olá, Francisco';
    const backgroundImageUri = 'https://i.pinimg.com/originals/34/68/4e/34684e44d2a8c9ca2edcbb8994696c78.jpg'; // Substitua pelo URL real da imagem
    const profileImageUri = 'https://www.infoescola.com/wp-content/uploads/2014/02/fernando-pessoa.jpg'; // Substitua pelo URL real da imagem
  
    const navigateToHistory = () => navigation.navigate('HistoricoCompras');
    const navigateToEditProfile = () => navigation.navigate('EditarPerfil');
    const navigateToFAQ = () => navigation.navigate('PerguntasFrequentes');
  
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: backgroundImageUri }} style={styles.header}>
          <View style={styles.overlay}>
            <View style={styles.profileContainer}>
              <Image source={{ uri: profileImageUri }} style={styles.profileImage} />
              <View style={styles.profileText}>
                <Text style={styles.profileName}>{storeName}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.buttons}>    
        <TouchableOpacity style={styles.actionButton} onPress={navigateToHistory}>
          <Text style={styles.actionButtonText}>Histórico de Compras</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.actionButton} onPress={navigateToEditProfile}>
          <Text style={styles.actionButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.actionButton} onPress={navigateToFAQ}>
          <Text style={styles.actionButtonText}>Perguntas Frequentes</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      width: '100%', // Cobrir toda a largura da tela
      aspectRatio: 6 / 3, // Proporção 16:9
      resizeMode: 'cover',
      justifyContent: 'flex-end',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      flex: 1,
      padding: 20,
      paddingBottom: 40,
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 120,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40, // Metade da largura ou altura para torná-la circular
      overflow: 'hidden', // Garante que a imagem seja cortada corretamente
    },
    profileText: {
      marginLeft: 20,
    },
    profileName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    buttons: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    },
    actionButton: {
      backgroundColor: '#3c3c3c',
      paddingVertical: 15,
      marginTop: 10,
      borderRadius: 5,
      width: "90%",
    },
    actionButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
    },
  });
  
  export default Dashboard;
  