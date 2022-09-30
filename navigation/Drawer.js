import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Index from '../screens/Index'
import CitiesScreen from '../screens/CitiesScreen'
import DetailsScreen from '../screens/DetailsScreen'
import SignUp from '../screens/SignUp'

const DrawerNavigator = createDrawerNavigator()
const Drawer = () => {
  return (
    <DrawerNavigator.Navigator initialRouteName="Home">
    <DrawerNavigator.Screen name="Home" component={Index} />
    <DrawerNavigator.Screen name="Cities" component={CitiesScreen} />
    <DrawerNavigator.Screen name="Details" component={DetailsScreen} />
    <DrawerNavigator.Screen name="Sign Up" component={SignUp} />
  </DrawerNavigator.Navigator>
  )
}

export default Drawer