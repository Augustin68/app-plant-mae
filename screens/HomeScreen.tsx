import { Image, ScrollView, ScrollViewBase, StyleSheet } from 'react-native';
import GreenBox from '../components/GreenBox';
import PlantPreview from '../components/Plants/PlantPreview';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY GARDEN</Text>
      <GreenBox></GreenBox>
      <PlantPreview></PlantPreview>
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
});
