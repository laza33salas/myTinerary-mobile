import { View, Text } from 'react-native'
import React from 'react'

const Itinerary = (props) => {

    const cardItinerary = (data) => (
        <View className='container-itineraries' key={data._id}>
            <Text className='tittle-itinerary'>Itinerary</Text>
            <Text className='itinerary-data'>
                <Text className=''>{data.name}</Text>
                <Text className=''>Price: ${data.price}</Text>
                <Text>Likes</Text>
                <Text className=''>{data.tags}</Text>
                <Text className=''>Duration: {data.duration}</Text>

            </Text>
        </View>
    )

    return (
        <View>
            {props.itinerarios?.map(cardItinerary)}
        </View>
    )
}

export default Itinerary