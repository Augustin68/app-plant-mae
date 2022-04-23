import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import GreenBox from '../components/GreenBox';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY GARDEN</Text>
      <GreenBox></GreenBox>
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
