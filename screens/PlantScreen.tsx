import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { titlesColor } from '../constants/Colors';
import { Plant } from '../models/Plant';

export default function PlantScreen(props: any) {
    const plant: Plant = props.route.params.plant;
    // let descCheck = true;
    // let healthCheck = false;
    const [desc, descChange] = useState(true);
    const [health, healthChange] = useState(false);

    const goDesc = () => {
        descChange(true);
        healthChange(false);
        console.log("go desc")
    }
    
    const goHealth = () => {
        descChange(false);
        healthChange(true);
        console.log("go health")
    }

    return (
        <View style={{flex: 1}}>
            <Image style={styles.image} source={plant.imageSrc}/>
            {/* <View style={styles.imageWrapper}> */}
            {/* </View> */}
            <Text style={styles.plantName}>{plant.name}</Text>
            <View style={styles.switchWrapper}>
                <Pressable onPress={() => goDesc()}><Text style={[desc ? styles.switchBtnSelected : {}, styles.switchBtn]}>Description</Text></Pressable>
                <Pressable onPress={() => goHealth()} ><Text style={[ health ? styles.switchBtnSelected : {}, styles.switchBtn]}> Health</Text></Pressable>
            </View>
            {
                health && 
                <View style={styles.imageWrapper}>
                    <Image 
                    style={styles.imageMax}
                            source={require('../assets/images/plant-infos.png')}
                        />
                </View>
            }
            {
                desc && <ScrollView>
                    <Text style={styles.plantDescription}>{plant.description}</Text>
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    // justifyContent: 'center'
    },
    imageWrapper: {
        // height: '100%',
        // width: '100%',
    },
    image: {
        height: '35%',
        width: '100%',
    },
    imageMax: {
        height: 450,
        width: 400,
        resizeMode: 'contain'
    },
    plantName: {
        fontSize: 30,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 10,
    },
    plantDescription: {
        fontSize: 18,
        textAlign: 'justify',
        marginHorizontal: 25
    },
    switchWrapper: {
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        padding: 5,
        marginBottom: 5
    },
    switchBtn: {
        padding: 5
    },
    switchBtnSelected: {
        backgroundColor: titlesColor,
        borderRadius: 25,
        color: 'white',
        padding: 6
    }
  });
  