import { ScrollView, ImageBackground, StyleSheet, Button, View, Text, Image } from 'react-native';
import React from 'react'
import SignInForm from '../components/SignInForm'

export default function SignIn() {
    return (
        <ScrollView style={styles.logs}>
            <Text style={styles.inputSign}>Sign In with:</Text>
            <SignInForm/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logs: {
        backgroundColor: "wheat"
    },
    inputSign: {
        color: "black",
        fontSize: 20,
        paddingHorizontal: 15,
        textAlign: "center",
        margin: 15,
    },
    tinyLogo: {
        marginLeft: 30,
        width: 300,
        height: "10%"
    }
})
