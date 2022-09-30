import { View, Text, Image, StyleSheet } from 'react-native'
import { useGetAllIActivitiesQuery } from '../redux/actions/activitiesApi'

const Activities = (props) => {


    const {
        data: activities
    } = useGetAllIActivitiesQuery(props.id)

    const styles = StyleSheet.create({
        photito: {
            width: 250,
            height: 200
        },
        container: {
            height: 900,
        }
    })

    const cardsActivities = (item) => (
        <View style={styles.container}>
            <Text >{item.name} </Text>
            <View>
                <Image source={{ uri: item.photo }} style={styles.photito} />
            </View>
        </View>
    )
    return (
        <View>
            <Text>Activities</Text>
            <View >
                {activities?.response.map(cardsActivities)}
            </View>
        </View>
    )


}

export default Activities