import { ScrollView, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { Plant } from '../models/Plant';

export default function PlantScreen(props: any) {
    const plant: Plant = props.route.params.plant;
    return (
        <View style={{flex: 1}}>
            <Image style={styles.image} source={plant.imageSrc}/>
            {/* <View style={styles.imageWrapper}> */}
            {/* </View> */}
            <Text style={styles.plantName}>{plant.name}</Text>
            <ScrollView>
                <Text style={styles.plantDescription}>{plant.description}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    },
    imageWrapper: {
        // height: '50%',
    },
    image: {
        height: '35%',
        width: '100%',
    },
    plantName: {
        fontSize: 30,
        marginBottom: 20,
    },
    plantDescription: {
        fontSize: 15,
        textAlign: 'justify',
        marginHorizontal: 20
    }
  });
  