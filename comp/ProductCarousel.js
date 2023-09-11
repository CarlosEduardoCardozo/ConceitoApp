import React from "react";
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

const products = [
  {
    id: 1,
    title: "Arabic",
    price: "R$49.99",
    image:
      "https://cdn.awsli.com.br/600x700/1347/1347698/produto/216661678/csioandreasi-45-6pwqfmdwp4.png",
  },
  {
    id: 2,
    title: "High",
    price: "R$49.99",
    image:
      "https://cdn.vnda.com.br/matrizskate/2023/04/13/21_4_4_425_Tee_Kidz_Black_NightGreen.jpg?v=1681431274",
  },
  {
    id: 3,
    title: "High",
    price: "R$54.99",
    image:
      "https://cdn.awsli.com.br/600x450/1792/1792584/produto/209866230/tee_kidz_navy_yellow-nacwagf5tr.jpg",
  },
];

const ProductCarousel = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <TouchableOpacity
        style={styles.brandItem}
        onPress={() =>
          navigation.navigate("ProductDetails", {
            id: item.id, title: item.title,price: item.price,image: item.image,})} >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.titlegeral}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.carouselTitle}>Novos Produtos</Text>
      <Carousel
        data={products}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={210}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 240,
  },
  productImage: {
    width: 300,
    width: 200,
    height: 180,
  },

  titlegeral: {
    alignItems: "center",
    justifyContent: "center"
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
