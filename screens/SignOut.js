import { ScrollView, ImageBackground, StyleSheet, Button, View, Text, Image } from 'react-native';
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignOut() {

    function exit() {
       AsyncStorage.clear()
    }


    return (
        <ScrollView style={styles.logs}>
            <Text style={styles.inputSignLO}>Thank you for using MyItinerary:</Text>
            <View style={styles.buttonLOContainer}>
                <Pressable style={styles.buttonSU} onPress={exit}><Text style={styles.buttonSU}>LogOut</Text></Pressable>
            </View>
            <Text style={styles.inputSignLO}>Have a good travel!</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logs: {
        backgroundColor: "wheat"
    },
    inputSignLO: {
        color: "black",
        fontSize: 20,
        paddingHorizontal: 15,
        textAlign: "center",
        margin: 15,
    },
    buttonSU: {
        backgroundColor: "orange",
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 16,
        width: 100,
        height: 35,
    },
    buttonLOContainer: {
        marginLeft: 125,
        marginTop: 70,
        marginBottom: 70
    }
})
