import React from "react";
import { View, Image, StyleSheet, Dimensions  } from "react-native";
import Carousel from "react-native-snap-carousel";

function PromotionCarousel() {
  const promoImages = [
    // Coloque aqui as URLs das imagens de promoção
    { url: "https://cdn.discordapp.com/attachments/976322101818560562/1158910006285058058/imagem-promo-inverno.png?ex=651df68d&is=651ca50d&hm=e525722e4f55cc3ab52a5bfd192aaa6ee424e956f58089187d451c31383857f3&" },
    { url: "https://cdn.discordapp.com/attachments/976322101818560562/1158910006893224028/asminanaconceito.png?ex=651df68d&is=651ca50d&hm=0e4e6d49f3f2ac642812972e06129576757c74b420d9feb6f0ad4f2637fcd65f&" },
    { url: "https://cdn.discordapp.com/attachments/976322101818560562/1158910007262330931/imagem-promo.png?ex=651df68d&is=651ca50d&hm=ef8bd10b1ec90527b031f609f768778e83b2a6d9ae7fdc284c1112a593bc862b&" },
    // Adicione quantas imagens de promoção desejar
  ];

  return (
    <View style={styles.container}>
      <Carousel
        data={promoImages}
        renderItem={({ item }) => (
          <Image source={{ uri: item.url }} style={styles.promoImage} />
        )}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        loop={true}
        autoplay={true}
        autoplayDelay={2000} // Tempo de exibição de cada imagem (2 segundos)
        autoplayInterval={5000} // Intervalo entre imagens (5 segundos)
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130, // Altura de 300 pixels
    width: 300,
    marginBottom: 24
  },
  promoImage: {
    width: "100%", // Largura de 100%
    height: "100%", // Altura de 100%
  },
});

export default PromotionCarousel;
