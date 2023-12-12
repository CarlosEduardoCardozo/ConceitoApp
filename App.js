// App.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './comp/Navbar';
import ProductCarousel from './comp/ProductCarousel';
import BrandCarousel from './comp/BrandCarousel';
import ProductDetailsScreen from './comp/ProductDetailsScreen';
import CardProduct from './comp/CardProduct';
import CardImgPromo from './comp/CardImgPromo';
import LoginComp from './comp/LoginComp';
import PerfilComp from './comp/PerfilComp';
import LoadingScreen from './comp/LoadingScreen'; // Importe a tela de carregamento

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <ScrollView>
        <CardImgPromo />
        <ProductCarousel navigation={navigation} />
        <BrandCarousel />
        <CardProduct navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginComp"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="LoginComp" component={LoginComp} />
        <Stack.Screen name="PerfilComp" component={PerfilComp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
