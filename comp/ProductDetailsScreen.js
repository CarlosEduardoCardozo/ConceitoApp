import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Navbar from "./Navbar";


const ProductDetailsScreen = ({ route }) => {
  const { title, price, image, descricao } = route.params;

  return (
  <View>
    <Navbar/>
      <View style={styles.container}>
        <Image source={{ uri: 'https://cdn.awsli.com.br/600x700/1347/1347698/produto/216661678/csioandreasi-45-6pwqfmdwp4.png' }} style={styles.image} />
        <View style={styles.descricao}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>{price}</Text>
        <Text style={styles.descricaoimg}>{descricao}</Text>
        
        </View>
      </View>
  </View>    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      descricao: {
        alignItems: 'center',
      },
      
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 80,
        height: 50,
      },
      details: {
        fontSize: 16,
        color: '#999',
        marginTop: -25,
        width: 80,
        height: 50,
      },
      image: {
        width: 400,
        height: 400,
        resizeMode: 'cover',
        marginBottom: 10,
      },
});

export default ProductDetailsScreen;
