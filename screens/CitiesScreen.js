import { ScrollView, View, Text, Image, StyleSheet, TextInput, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { useGetAllCitiesQuery } from '../redux/actions/citiesApi'
import { useNavigation } from '@react-navigation/native';

const CitiesScreen = () => {

  const [inputValue, setinputValue] = useState("")
  const navigation = useNavigation()

  const {
    data: cities,
    error,
    isLoading,
    isSuccess,
    isFailed
  } = useGetAllCitiesQuery(inputValue)

  let filter = []
  if (isLoading) {
    filter = []
  } else if (isSuccess) {
    filter = cities.response
    if (filter === []) {
      filter = []
    }
  } else if (isFailed) {
    filter = undefined
    console.log(error)
  }

  function createCard(item) {
    return (

      <View style={styles.cards} key={item._id}>
        <Text style={styles.tittle}>{item.city}</Text>
        <Image source={{ uri: item.photo }} style={styles.photito} />
        <Button style={styles.cityButton} title="Details" accessibilityLabel="View More" onPress={() => navigation.navigate('Details', { id: item._id })}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput onChangeText={text => text === "" ? setinputValue("") : setinputValue(text)}></TextInput>
      </SafeAreaView>

      <ScrollView>
        {filter?.map(createCard)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  photito: {
    width: 250,
    height: 200,
    borderRadius: 8
  },
  container: {
    flex: 1,

    height: "100%",
    alignItems: "center",
    backgroundColor: "wheat"
  },
  cards: {
    margin: 10
  },
  cardContainer: {
    width: "100%",
  },
  tittle: {
    textAlign: "center",
    fontSize: 25,
  }
})

export default CitiesScreen