import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import { ScrollView, ImageBackground, StyleSheet, Button, View, Text } from 'react-native';

export default function Index({ navigation }){
  return (
    <ScrollView style={styles.main}>
      <ImageBackground source={require('../assets/heroBackground.jpeg')} style={styles.skyImage}>
        <Hero/>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button style={styles.buttonHero}
            onPress={() => navigation.navigate('Cities')}
            title="Go to Cities"/>
        </View>
        <Carousel/>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "wheat"
  },
  homeBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  buttonHero: {
    margin: 20,
  }
})

