import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useGetOneCityQuery } from '../redux/actions/citiesApi'
import Itinerary from '../components/Itinerary'
import { useGetItinerariesQuery } from '../redux/actions/itinerariesApi'


const DetailsScreen = ({ route }) => {

  const {
    data: cities,
  } = useGetOneCityQuery(route.params.id)

  const {
    data: itinerarios
  } = useGetItinerariesQuery(route.params.id)

  const styles = StyleSheet.create({
    photito: {
      width: 250,
      height: 200
    },
    container: {
      flex: 1,

      height: "100%",
      alignItems: "center",

    },
    cards: {
      flex: 1,
      margin: 10,
      alignItems: "center"
    },

    cardContainer: {
      margin: 0
    },

    tittle: {
      textAlign: "center",
      fontSize: 25,


    }
  })

  return (
    <View>
      <ScrollView key={cities?.response._id}>
        <Text style={styles.tittle}>{cities?.response.city}</Text>
        <Image source={{ uri: cities?.response.photo }} style={styles.photito} />
        <Text>{cities?.response.description}</Text>
        <Text>Foundation: {cities?.response.foundation}</Text>
        <Text>Population: {cities?.response.population}</Text>

        <View>
          <Itinerary itinerarios={itinerarios} />
        </View>

      </ScrollView>
    </View>
  )
}

export default DetailsScreen