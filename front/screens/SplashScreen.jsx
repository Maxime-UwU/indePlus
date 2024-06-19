import React from 'react';
import styles from './../components/styles/style';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.formAuth}>
            <Image source={require('./../components/images/logo-transparent-png.png')} style={styles.logo} />
            <Text style={styles.infoApp}>Toute l’actu des jeux vidéo indépendants sur votre mobile</Text>
            <Pressable onPress={() => navigation.navigate('Vos Tags')}>
                <Text style={styles.bigBeigeButton}>Go!</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
}

export default SplashScreen;