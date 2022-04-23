import { Image, ImageBackgroundBase, ScrollView, ScrollViewBase, StyleSheet } from 'react-native';
import GreenBox from '../components/GreenBox';
import PlantList from '../components/Plants/PlantList';
import PlantPreview from '../components/Plants/PlantPreview';
import { Text, View } from '../components/Themed';
import { lastResearchesPlantList } from '../mock/last-researches-plant-list';
import { myGardenPlantList } from '../mock/my-garden-plant-list';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY GARDEN</Text>
      <GreenBox></GreenBox>
      <Text style={[styles.subTitle, {marginTop: 15}]}>My garden</Text>
      <PlantList plantList={myGardenPlantList}/>
      <Text style={styles.subTitle}>Last researches</Text>
      <PlantList plantList={lastResearchesPlantList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    alignSelf: 'flex-start',
    marginBottom: 15
  },
  subTitle: {
    alignSelf: 'flex-start',
    marginLeft: 15,
  }
});
