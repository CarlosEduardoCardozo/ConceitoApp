// LoadingScreen.js
import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simule um tempo de carregamento antes de navegar para a HomeScreen
    const timer = setTimeout(() => {
      navigation.replace("HomeScreen"); // Use replace para evitar que o usuário volte para a tela de carregamento
    }, 10000000); // Tempo de simulação: 2 segundos

    return () => clearTimeout(timer); // Limpeza do temporizador ao desmontar o componente
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3498db" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default LoadingScreen;
