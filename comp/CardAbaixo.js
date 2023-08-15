import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CardAbaixo = ({ route }) => {
  const { id, title, price, image } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>Product ID: {id}</Text>
      <Text style={styles.details}>{price}</Text>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      details: {
        fontSize: 16,
        color: '#888',
      },
      image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
      },
});

export default CardAbaixo;
