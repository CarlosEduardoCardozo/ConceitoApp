import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.link}>
                <Text>Promo</Text>
            </TouchableOpacity>
            
            <Image source={{ uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/464/778/themes/common/logo-868878082-1638638494-3a1796a954d3b24c1c03753cb754947e1638638494.png?0' }} style={{ width: 100, height: 50 }} />

            <TouchableOpacity style={styles.link}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 120,
        marginTop: 50,
        // backgroundColor: '#f0f0f0',
    },
    link: {
        marginHorizontal: 10,
    },
});

export default Navbar;
