import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import Navbar from "./Navbar";

const ProductDetailsScreen = ({ route }) => {
  const { title, price, descricao, capa } = route.params;
  const [selectedSize, setSelectedSize] = useState(null);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleBuyPress = () => {
    // Mostrar o modal de pagamento ao clicar em "Comprar"
    if (selectedSize) {
      setPaymentModalVisible(true);
    } else {
      alert("Por favor, selecione um tamanho antes de comprar.");
    }
  };

  const handlePaymentCreditCard = () => {
    // Lógica fictícia para pagamento com cartão de crédito
    alert("Pagamento com Cartão de Crédito processado com sucesso!");
    setPaymentModalVisible(false);
  };

  const handlePaymentBoleto = () => {
    // Lógica fictícia para pagamento com boleto bancário
    alert("Boleto Bancário gerado. Por favor, realize o pagamento.");
    setPaymentModalVisible(false);
  };

  const handlePaymentPIX = () => {
    // Lógica fictícia para pagamento com PIX
    alert("Chave PIX gerada. Por favor, realize o pagamento via PIX.");
    setPaymentModalVisible(false);
  };

  return (
    <ScrollView>
      <View>
        <Navbar />
        <View style={styles.container}>
          <Image source={{ uri: capa }} style={styles.image} />

          <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.details}>{price}</Text>

            {/* Adicionar botões para selecionar o tamanho */}
            <View style={styles.sizeButtons}>
              <TouchableOpacity
                style={[
                  styles.sizeButton,
                  selectedSize === "P" && styles.selectedSize,
                ]}
                onPress={() => handleSizeSelection("P")}
              >
                <Text style={styles.sizeButtonText}>P</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sizeButton,
                  selectedSize === "M" && styles.selectedSize,
                ]}
                onPress={() => handleSizeSelection("M")}
              >
                <Text style={styles.sizeButtonText}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sizeButton,
                  selectedSize === "G" && styles.selectedSize,
                ]}
                onPress={() => handleSizeSelection("G")}
              >
                <Text style={styles.sizeButtonText}>G</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sizeButton,
                  selectedSize === "GG" && styles.selectedSize,
                ]}
                onPress={() => handleSizeSelection("GG")}
              >
                <Text style={styles.sizeButtonText}>GG</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.descricaoimg}>{descricao}</Text>

            <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
              <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Avaliações Fictícias */}
        <View style={styles.reviewsSection}>
          <Text style={styles.sectionTitle}>Avaliações</Text>

          {/* Avaliação de Exemplo 1 */}
          <View style={styles.review}>
            <Text style={styles.reviewAuthor}>Professor Eduardo</Text>
            <Text style={styles.reviewText}>
              Produto de excelente qualidade. Estou muito satisfeito!
            </Text>
            <Image
              source={{
                uri: "https://img.freepik.com/vetores-premium/icone-de-classificacao-de-cinco-estrelas-estrelas-de-avaliacao-vetor-estrelas-planas-isoladas_118339-1270.jpg?w=2000",
              }}
              style={styles.starsImage}
            />
          </View>

          <View style={styles.review}>
            <Text style={styles.reviewAuthor}>Francisco</Text>
            <Text style={styles.reviewText}>
              Ótimo produto, entrega rápida. Recomendo!
            </Text>
            {/* Adicionando as estrelas */}
            <Image
              source={{
                uri: "https://img.freepik.com/vetores-premium/icone-de-classificacao-de-cinco-estrelas-estrelas-de-avaliacao-vetor-estrelas-planas-isoladas_118339-1270.jpg?w=2000",
              }}
              style={styles.starsImage}
            />
          </View>

          {/* Adicione mais avaliações de exemplo conforme necessário */}
        </View>

        {/* Modal para área de pagamento */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isPaymentModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.paymentModalContent}>
              <Text style={styles.modalTitle}>
                Escolha a Forma de Pagamento
              </Text>
              <TouchableOpacity
                style={styles.paymentOptionButton}
                onPress={handlePaymentCreditCard}
              >
                <Text style={styles.buttonText}>Cartão de Crédito</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.paymentOptionButton}
                onPress={handlePaymentBoleto}
              >
                <Text style={styles.buttonText}>Boleto Bancário</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.paymentOptionButton}
                onPress={handlePaymentPIX}
              >
                <Text style={styles.buttonText}>PIX</Text>
              </TouchableOpacity>
              <Button
                title="Fechar"
                onPress={() => setPaymentModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  details: {
    fontSize: 18,
    color: "#888",
    marginTop: 10,
  },
  descricaoimg: {
    fontSize: 16,
    color: "#999",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  // Estilos para os botões de tamanho
  sizeButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  sizeButton: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  selectedSize: {
    backgroundColor: "#3498db",
    color: "#fff",
  },
  sizeButtonText: {
    fontSize: 16,
    color: "#333", // Cor do texto dentro do botão de tamanho
  },
  // Estilos para o botão de compra
  buyButton: {
    backgroundColor: "#3498db",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  // Estilos para a seção de Avaliações Fictícias
  reviewsSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  review: {
    marginBottom: 15,
  },
  reviewAuthor: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 14,
    marginBottom: 5,
  },
  // Estilos para as estrelas nas avaliações
  starsImage: {
    width: 100, // Defina o tamanho desejado
    height: 20, // Defina o tamanho desejado
    marginBottom: 5,
  },
  // Estilos para o modal de pagamento
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  paymentModalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  paymentOptionButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
});

export default ProductDetailsScreen;
