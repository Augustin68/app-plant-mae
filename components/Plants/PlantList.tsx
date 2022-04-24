import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Plant } from "../../models/Plant";
import { Text, View } from '../Themed';
import PlantPreview from "./PlantPreview";

export default function PlantList(props: {
  plantList: Plant[]
}) {
  
  const navigation = useNavigation()
  const plantPressed = (plant: Plant) => {
    console.log("COUCOU TA APPUYER SUR PLANTE " + plant.name)
    navigation.navigate('Plant', {params: plant});
  }
  return ( 
    <ScrollView
      style={styles.plantListWrapper}
      horizontal={true}
    >
      {
        props.plantList.map((plant, idx) => 
        <Pressable key={plant.name+idx} onPress={() => plantPressed(plant)}>
          <PlantPreview
            plant={plant}
          />
        </Pressable>
        )
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  plantListWrapper: {
    margin: 10
  },
});