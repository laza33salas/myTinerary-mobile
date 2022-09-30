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

  return (
    <View style={styles.detailsColor}>
      <ScrollView key={cities?.response._id}>
        <Text style={styles.tittle}>{cities?.response.city}</Text>
        <Image source={{ uri: cities?.response.photo }} style={styles.photito} />
        <Text style={styles.detailText}>{cities?.response.description}</Text>
        <Text style={styles.detailText}>Foundation: {cities?.response.foundation}</Text>
        <Text style={styles.detailText}>Population: {cities?.response.population}</Text>

        <View>
          <Itinerary itinerarios={itinerarios} />
        </View>

      </ScrollView>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  photito: {
    width: "100%",
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
    margin: 10
  },
  detailsColor: {
    backgroundColor: "wheat",
    flex: 1,
    alignContent: 'center'
  },
  detailText: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10
  }
})