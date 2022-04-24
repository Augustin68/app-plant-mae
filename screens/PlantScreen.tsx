import { Text, View } from '../components/Themed';
import { Plant } from '../models/Plant';

export default function PlantScreen(props: {
    plant: Plant,
}) {
    return (
        <View style={{flex: 1}}>
            <Text>coucou je suis une plante</Text>
            <Text>{props.plant.name}</Text>
            <Text></Text>
        </View>
    )
}