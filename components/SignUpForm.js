import { ScrollView, ImageBackground, StyleSheet, Button, View, Text } from 'react-native';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function SignUpForm() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [userPhoto, setUserPhoto] = useState("")
    const [country, setCountry] = useState("")

    async function changeValue(event) {
        event.preventDefault();
        const data = {
            name: name,
            lastName: lastName,
            mail: mail,
            password: pass,
            photo: userPhoto,
            country: country,
            from: 'form',
            role: "user"
        }
        console.log(data)
        try {
            await axios?.post('https://my-tinerary-back-salas-medici.herokuapp.com/users/signup', data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView style={styles.inputSignUp}>
            <View style={styles.inputStyle}>
                <Text>First Name:</Text>
                <TextInput placeholder="Name" value={name} onChangeText={text => text === "" ? setName("") : setName(text)} required />
            </View>
            <View style={styles.inputStyle}>
                <Text>Last Name:</Text>
                <TextInput placeholder="LastName" value={lastName} onChangeText={text => text === "" ? setLastName("") : setLastName(text)} required />
            </View>
            <View style={styles.inputStyle}>
                <Text>Email:</Text>
                <TextInput placeholder="Email" value={mail} onChangeText={text => text === "" ? setMail("") : setMail(text)} required />
            </View>
            <View style={styles.inputStyle}>
                <Text>Password:</Text>
                <TextInput placeholder="Password" value={pass} onChangeText={text => text === "" ? setPass("") : setPass(text)} required />
            </View>
            <View style={styles.inputStyle}>
                <Text>Photo:</Text>
                <TextInput placeholder="Photo" value={userPhoto} onChangeText={text => text === "" ? setUserPhoto("") : setUserPhoto(text)} required />
            </View>
            <View style={styles.inputStyle}>
                <Text>Country:</Text>
                <TextInput placeholder="Country" value={country} onChangeText={text => text === "" ? setCountry("") : setCountry(text)} required />
            </View>
            <Pressable style={styles.buttonSU} onPress={changeValue}><Text style={styles.buttonSU}>Send</Text></Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputSignUp: {
        width: "70%",
        marginLeft: 50,
    },
    buttonSU: {
        backgroundColor: "orange",
        textAlign: 'center'
    },
    inputStyle: {
        backgroundColor: "white",
        marginBottom: 5,
        borderRadius: 8
    }
})
