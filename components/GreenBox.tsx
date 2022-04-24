import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function GreenBox() {
return (
    <LinearGradient style={styles.greenBox} colors={['#467A67', '#7FAFA4']}>
        <Image 
          source={require('../assets/images/monstera-outline.png')}
          style={styles.greenBoxImage}
        />
        <Text style={styles.greenBoxLabel}>Scan it if you want to know it!</Text>
        <Pressable style={({pressed}) => [
            styles.addPlantBtn,
            pressed ? styles.addPlantBtnPressed : styles.addPlantBtnUnpressed
        ]
        }>
          <Text style={styles.addPlantBtnTxt}>add plant</Text>
        </Pressable>
      </LinearGradient>
)
}

const styles = StyleSheet.create({
    greenBox: {
      width: '90%',
      height: '50%',
      paddingHorizontal: 15,
      alignItems: 'center',
      borderRadius: 15
    },
    greenBoxLabel: {
      color: 'white',
      fontSize: 20,
      paddingBottom: 20,
    },
    addPlantBtn: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      fontFamily: 'Futura Medium BT'
    },
    addPlantBtnUnpressed: {
        backgroundColor: '#2C675E',
    },
    addPlantBtnPressed: {
        backgroundColor: '#4A7B74',
    },
    addPlantBtnTxt: {
      fontSize: 23,
      color: 'white',
    },
    greenBoxImage: {
      resizeMode: 'contain',
      height: 250,
      width: 250,
    }
  });