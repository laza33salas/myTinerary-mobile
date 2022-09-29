import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState, useRef } from 'react'
import { useGetAllCitiesQuery } from '../redux/actions/citiesApi'
const CitiesScreen = () => {

  const [inputValue, setInputValue] = useState("")

  const {
    data: cities,
    error,
    isLoading,
    isSuccess,
    isFailed
  } = useGetAllCitiesQuery(inputValue)


  let filter = []
  if (isLoading) {
    console.log("IS LOADING")
    filter = []
  } else if (isSuccess) {
    console.log("IS SUCCES")
    filter = cities.response
    if (filter === []) {
      filter = []
    }
  } else if (isFailed) {
    console.log("IS FAILED")
    filter = undefined
    console.log(error)
  }

  const styles = StyleSheet.create({
    photito: {
      width: 150,
      height: 150
    }
  })

  function createCard(item) {
    return (
      <View>
        <Text>{item.city}</Text>
        <Image source={{ uri: item.photo }} style={styles.photito} />
      </View>
    )

  }

  return (
    filter?.map(createCard)
  )
}

export default CitiesScreen