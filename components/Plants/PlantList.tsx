import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Plant } from "../../models/Plant";
import { Text, View } from '../Themed';
import PlantPreview from "./PlantPreview";

export default function PlantList(props: {
  plantList: Plant[]
}) {
  return (
    <ScrollView
      style={styles.plantListWrapper}
      horizontal={true}
    >
      {
        props.plantList.map((plant, idx) => 
          <PlantPreview
            key={plant.name+idx}
            plant={plant}
          />
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