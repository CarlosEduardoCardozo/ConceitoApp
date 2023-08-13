import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './comp/Navbar';
import ProductCarousel from './comp/ProductCarousel';
import BrandCarousel from './comp/BrandCarousel';

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ProductCarousel />
      <BrandCarousel/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;