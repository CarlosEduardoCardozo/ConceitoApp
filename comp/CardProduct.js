import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";

function shuffleArray(array) {
  // Algoritmo de Fisher-Yates para embaralhar a matriz
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function ProductCard({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.productCard}
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
      <Image source={{ uri: item.capa.url }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.nome}</Text>
    </TouchableOpacity>
  );
}

function ProductCarousel({ navigation }) {
  const [camisetas, setCamisetas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://projetos-projeto-pi-x10k-dev.fl0.io/api/camisetas/"
        );
        const shuffledCamisetas = [...res.data];
        shuffleArray(shuffledCamisetas);
        setCamisetas(shuffledCamisetas);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <View>
      <Text style={styles.TitleProd}>Confira as Peita mais braba</Text>
    <View style={styles.container}>
      <FlatList
        data={camisetas}
        renderItem={({ item }) => (
          <ProductCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    margin: "2.5%",
  },
  productImage: {
    width: "100%",
    height: 150,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  TitleProd: {
    color: '#b52e24',
    padding: 24,
    fontSize: 24,
    fontWeight: "600",
    marginTop: 5,
    textAlign: "left",
  },
});

export default ProductCarousel;
