import { View, Text } from 'react-native'
import React from 'react'
import Activities from './Activities'

const Itinerary = (props) => {

    const cardItinerary = (data) => (
        <View key={data._id}>
            <Text >Itinerary</Text>
            <View >
                <Text >{data.name}</Text>
                <Text >Price: ${data.price}</Text>
                <Text>Likes</Text>
                <Text >{data.tags}</Text>
                <Text >Duration: {data.duration}</Text>
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