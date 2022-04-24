import { Text, View } from "./Themed";
import { Image, StyleSheet } from 'react-native';

export function AvatarComponent() {
    return (
        <>
            {/* <Text>AVATAR</Text> */}
            <View style={styles.plantPreviewImageWrapper}>
                <Image style={styles.plantPreviewImage} source={require('../assets/images/grandma.webp')}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    plantPreviewImageWrapper: {
      borderRadius: 50,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: 'black',
      marginRight: 20
    },
    plantPreviewImage: {
      height: 50,
      width: 50,
      resizeMode: 'cover',
    },
    });