import { ScrollView, ImageBackground, StyleSheet, Button, View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useUserSignInMutation } from '../redux/actions/usersApi'
import { TextInput } from 'react-native-gesture-handler';
import { getUser } from '../redux/User/userSlice'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignInForm() {

    function alertt(){ Alert.alert('You have signed in', 'Welcome! c: ', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ])};

    const [userSignIn, { data, error }] = useUserSignInMutation()

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    const dispatch = useDispatch()

    function changeValue(event) {
        event.preventDefault();

        const dataUser = {
            mail: mail,
            password: pass,
            from: 'form'
        }
        userSignIn(dataUser)
        alertt()
    }

    useEffect(() => {
        if (data) {
            AsyncStorage.setItem('token', JSON.stringify(data.response.token))
            dispatch(getUser(data.response.user))
        }
    }, [data])

    return (
        <ScrollView style={styles.inputSignUp}>
            <View style={styles.inputStyle}>
                <Text>Email:</Text>
                <TextInput placeholder="Email" value={mail} onChangeText={text => text === "" ? setMail("") : setMail(text)} required />
            </View>
            <View style={styles.inputStyle}>
                <Text>Password:</Text>
                <TextInput placeholder="Password" value={pass} onChangeText={text => text === "" ? setPass("") : setPass(text)} required />
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
