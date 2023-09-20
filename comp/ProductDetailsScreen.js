import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Navbar from "./Navbar";

const ProductDetailsScreen = ({ route }) => {
  const { title, price, image, descricao, tamanho } = route.params;

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn.awsli.com.br/600x700/1347/1347698/produto/216661678/csioandreasi-45-6pwqfmdwp4.png",
          }}
          style={styles.image}
        />
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
          <View style={{alignSelf: 'center'}}>
          </View>
          <View style={styles.infoprodutc}>
            <Text style={styles.details}>{price}</Text>
            <Text style={styles.tamanho}>{tamanho}</Text>
          </View>
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

  info: {
    flex: 1,
    minHeight:200,
    alignItems: "center",    
    // justifyContent: "center",
    // fontSize: 20,
    // fontWeight: "bold",
    // flexDirection: "column"
  },
  infoprodutc: {
    flexDirection: 'row',
    gap: 20
  },
  // descricao: {
  //   alignItems: "center",
  // },
  // descricaoimg: {
  //   fontSize: 16,
  //   color: "#999",
  //   marginTop: -5,
  //   width: 220,
  //   height: 90,
  // },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // details: {
  //   fontSize: 16,
  //   color: "#999",
  //   width: 50,
  //   height: 50,
  // },
  image: {
    width: 400,
    height: 400,
    resizeMode: "cover",
    // marginBottom: 10,
  },
});

export default ProductDetailsScreen;
