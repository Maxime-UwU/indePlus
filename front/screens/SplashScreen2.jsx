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

const SplashScreen2 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.formAuth}>
        <Text style={styles.title}>Quel genre de jeu vous intéresse?</Text>
        <TextInput></TextInput>
        <Pressable onPress={() => navigation.navigate('Accueil')}><Text style={styles.beigeButton}>Commencer</Text></Pressable>
      </View>
    </SafeAreaView>
    
  )
};

export default SplashScreen2;