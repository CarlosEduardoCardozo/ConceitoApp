import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginComp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de autenticação (fictícia)
    if (username === "usuario" && password === "senha") {
      // Navegar para a tela de perfil do usuário após o login bem-sucedido
      navigation.navigate("HomeScreen");
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
       <Image
        source={{
          uri: 'https://cdn.discordapp.com/attachments/976322101818560562/1158913896795623505/logo.png?ex=651dfa2c&is=651ca8ac&hm=14a7268314f50c22520bfcf135d86bfa43f2a048cad5649b27d23dabb0c9d6c8&',
        }}
        style={styles.logo}
      />

<View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: "#3c3c3c",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LoginComp;


