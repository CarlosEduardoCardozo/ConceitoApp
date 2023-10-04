import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.link}>
                <Text>Promo</Text>
            </TouchableOpacity>
            
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/976322101818560562/1158913896795623505/logo.png?ex=651dfa2c&is=651ca8ac&hm=14a7268314f50c22520bfcf135d86bfa43f2a048cad5649b27d23dabb0c9d6c8&' }} style={{ width: 130, height: 50 }} />

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
