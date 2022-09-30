import { View, Text, Image, StyleSheet } from 'react-native'
import { useGetAllIActivitiesQuery } from '../redux/actions/activitiesApi'

const Activities = (props) => {


    const {
        data: activities
    } = useGetAllIActivitiesQuery(props.id)

    const styles = StyleSheet.create({
        photito: {
            width: 250,
            height: 200,
            alignContent: "center",
            alignSelf: "center",
            margin: 0
        },
        container: {
            height: 300,
        },
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

    const cardsActivities = (item) => (
        <View style={styles.container} key={item._id}>
            <Text style={styles.texts}>{item.name} </Text>
            <View>
                <Image source={{ uri: item.photo }} style={styles.photito} />
            </View>
        </View>
    )
    return (
        <View>
            <Text style={styles.tittle}>Activities</Text>
            <View>
                {activities?.response.map(cardsActivities)}
            </View>
        </View>
    )


}

export default Activities