import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
// import ProductDetailsScreen from './ProductDetailsScreen';

import camisetaService from "../src/services/camisetas.js";

function ProductCarousel({ navigation }) {
  const [camisetas, setCamisetas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = axios
        .get("https://projetos-projeto-pi-x10k-dev.fl0.io/api/camisetas/")
        .then((res) => {
          console.log(res.data);
          setCamisetas(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return (
    <View  style={styles.container}>

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
                tamanho: item.tamanho
              })
            }
            >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.productImage}
              />
            <Image
              source={{
                uri: "https://cdn.vnda.com.br/matrizskate/2023/04/13/21_4_4_425_Tee_Kidz_Black_NightGreen.jpg?v=1681431274",
              }}
              style={styles.productImage}
              />
            <View style={styles.titlegeral}>
              <Text style={styles.productTitle}>{item.nome}</Text>
              <Text style={styles.productPrice}>{item.valor}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      sliderWidth={Dimensions.get("window").width}
      itemWidth={220}
      // loop={true}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    height: 280,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 110,
  },
  productImage: {
    width: 210,
    height: 180,
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
  carouselTitle: {
    fontSize: 20,
    fontWeight: "900",
    padding: 15,
  },
});

export default ProductCarousel;
