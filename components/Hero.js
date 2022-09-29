import React from 'react'
import { View, Text, StyleSheet } from "react-native"

const Hero = () => {
  return (
    <View>
      <Text style={styles.title}>MyTinerary</Text>
      <Text style={styles.slogan}>Find your perfect trip, designed by insiders who know and love their citties!</Text>
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({
  title: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 45,
  },
  slogan: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 15,
    textAlign: "center",
    margin: 15,
  }
})