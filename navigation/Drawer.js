import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import CitiesScreen from '../screens/CitiesScreen'
import DetailsScreen from '../screens/DetailsScreen'

const DrawerNavigator = createDrawerNavigator()
const Drawer = () => {
  return (
    <DrawerNavigator.Navigator initialRouteName="Home">
    <DrawerNavigator.Screen name="Cities" component={CitiesScreen} />
    <DrawerNavigator.Screen name="Details" component={DetailsScreen} />
  </DrawerNavigator.Navigator>
  )
}

export default Drawer