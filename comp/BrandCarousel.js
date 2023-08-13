import React, { useRef, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const brands = [
    { id: 1, image: 'https://cdn.awsli.com.br/1605/1605630/arquivos/sufgangdesktop.png' },
    { id: 2, image: 'https://eac2-s3-files.s3-sa-east-1.amazonaws.com/logo-baw-clothing-cupom.png' },
    { id: 3, image: 'https://i.pinimg.com/originals/18/e6/21/18e6212ec63042ea3adf655b0c1c6dbd.png' },
    { id: 4, image: 'https://i0.wp.com/attitudecrew.com.br/wp-content/uploads/2022/10/chronic.png?fit=1000%2C1000&ssl=1' },
    { id: 5, image: 'https://cdn.shopify.com/s/files/1/0594/7847/4931/files/LOGO-OC-002_480x480.png?v=1663585312' },
];

const BrandCarousel = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderItem = ({ item }) => (
        <View style={styles.brandItem}>
            <Image source={{ uri: item.image }} style={styles.brandImage} />
        </View>
    );

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < brands.length - 2) {
                carouselRef.current.snapToNext();
            } else {
                carouselRef.current.snapToItem(0);
            }
        }, 2000); // Move to the next brand every 3 seconds

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={brands}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={80} // Adjust the width of each brand item
                onSnapToItem={(index) => setCurrentIndex(index)}
                loop={true}
                autoplay={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80, // Adjust the height of the carousel
        paddingHorizontal: 10,
    },
    brandItem: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    brandImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
});

export default BrandCarousel;
