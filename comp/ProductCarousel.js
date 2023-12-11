import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";

import camisetaService from "../src/services/camisetas.js";

function ProductCarousel({ navigation }) {
  const [camisetas, setCamisetas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://conceito-street.1.us-1.fl0.io/api/camisetas/"
        );
        setCamisetas(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        data={camisetas}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <TouchableOpacity
              style={styles.brandItem}
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  id: item.id,
                  title: item.nome,
                  price: item.valor,
                  image: item.image,
                  descricao: item.descricao,
                  tamanho: item.tamanho,
                  capa: item.capa.url,
                })
              }
            >
              <Image source={{ uri: item.capa.url }} style={styles.productImage}/>
              <View style={styles.titlegeral}>
                <Text style={styles.productTitle}>{item.nome}</Text>
                <Text style={styles.productPrice}>{item.valor}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={220}
        loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 280,
  },
  productCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 280,
  },
  productImage: {
    width: 210,
    height: 210,
  },
  coverImage: {
    width: 210, // You can adjust the width and height as needed
    height: 180, // to fit the cover image size
  },
  titlegeral: {
    alignItems: "center",
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
});

export default ProductCarousel;
