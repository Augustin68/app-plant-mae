import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet } from 'react-native';
import { Plant } from "../../models/Plant";
import { Text, View } from '../Themed';

export default function PlantPreview(props: {
  plant: Plant
}) {
  return (
    <View style={styles.plantPreview}>
    <View style={styles.plantPreviewImageWrapper}>
      <Image style={styles.plantPreviewImage} source={props.plant.imageSrc}/>
    </View>
    <Text>{props.plant.name}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  plantPreview: {
    display: 'flex',
    alignItems: 'center',
  },
  plantPreviewImageWrapper: {
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
  },
  plantPreviewImage: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  }
  });