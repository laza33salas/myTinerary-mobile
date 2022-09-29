import React from 'react'
import { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

export default function Carousel({ }) {

    const range = 1 
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()

    const citiesData = [
        {
            photo: require('../assets/HongKong.jpeg'),
            city: 'Hong Kong',
            alt: 'hongkong'
        },
        {
            photo: require('../assets/Bangkok.jpeg'),
            city: 'Bangkok',
            alt: 'bangkokab'
        },
        {
            photo: require('../assets/Bangkok.jpeg'),
            city: 'BangkokKOKOKOKOK',
            alt: 'bangkokab'
        },
    ]

    const cardCarousel = (data) => (
        <View key={data.alt}>
            <ImageBackground style={styles.carouselImage} source={data.photo}>
                <Text style={styles.cityNemeIndex}>{data.city}</Text>
            </ImageBackground>
        </View>
    )

    function next() {
        if (end < citiesData.length) {
            setEnd(end + range)
            setStart(start + range)
        } else {
            setStart(0)
            setEnd(range)
        }
    }

    useEffect(() => {
        let id = setInterval(function () {
            next()
        }, 4000)
        setIntervalId(id)
        return () => clearInterval(intervalId)
    }, [start])

    return (
        citiesData.slice(start,end).map(cardCarousel)
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

