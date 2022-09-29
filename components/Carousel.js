import React from 'react'
import { ScrollView, ImageBackground, StyleSheet, Button, View, Text } from 'react-native';

export default function Carousel({ }) {

    const cardCarousel = (data) => (
        <View>
            <ImageBackground style={styles.carouselImage} source={require('../assets/HongKong.jpeg')}>
                <Text style={styles.cityNemeIndex}>Hong Kong</Text>
            </ImageBackground>
        </View>
    )

    return (
        <View>
            <ImageBackground style={styles.carouselImage} source={require('../assets/HongKong.jpeg')}>
                <Text style={styles.cityNemeIndex}>Hong Kong</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    carouselImage: {
        flex: 1,
        width: "100%",
        height: 298,
        marginTop: 15
    },
    cityNemeIndex: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        marginTop: 20
    }
})

