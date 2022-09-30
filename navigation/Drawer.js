import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Index from '../screens/Index'
import CitiesScreen from '../screens/CitiesScreen'
import DetailsScreen from '../screens/DetailsScreen'
<<<<<<< HEAD
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
=======
import SignUp from '../screens/SignUp';

const DrawerNavigator = createDrawerNavigator()
const Drawer = () => {
    return (
        <DrawerNavigator.Navigator initialRouteName="Home">
            <DrawerNavigator.Screen name="SignUp" component={SignUp} />
            <DrawerNavigator.Screen name="Home" component={Index} />
            <DrawerNavigator.Screen name="Cities" component={CitiesScreen} />
            <DrawerNavigator.Screen name="Details" component={DetailsScreen} />
        </DrawerNavigator.Navigator>
    )
>>>>>>> 82ce35119307dd18b5aa0695200f6295c5639e77
}

export default Drawer