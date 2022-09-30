import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Activities from './Activities'

const Itinerary = (props) => {

    const styles = StyleSheet.create({
        tittle: {
            fontSize: 25,
            textAlign: "center",
            marginTop: 20
        },
        texts: {
            textAlign: "center",
            margin: 5
        }
    })

    const cardItinerary = (data) => (
        <View key={data._id}>
            <Text style={styles.tittle}>Itinerary</Text>
            <View >
                <Text style={styles.texts}>{data.name}</Text>
                <Text style={styles.texts}>Price: ${data.price}</Text>
                <Text style={styles.texts}>Likes</Text>
                <Text style={styles.texts}>{data.tags}</Text>
                <Text style={styles.texts}>Duration: {data.duration}</Text>
            </View>

            <Activities id={data._id} />
        </View>
    )

    return (
        <View>
            {props.itinerarios?.map(cardItinerary)}
        </View>
    )
}

export default Itinerary