import { ScrollView, ImageBackground, StyleSheet, Button, View, Text } from 'react-native';
import React from 'react'
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
    return (
        <ScrollView style={styles.logs}>
            <Text style={styles.inputSign}>Sign Up with:</Text>
            <SignUpForm/>
            <Text style={styles.inputSign}>Or Sign Up with:</Text>
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
    }
})
