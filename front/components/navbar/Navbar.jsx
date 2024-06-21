import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './../styles/style';

const Navbar = () => {
  const navigation = useNavigation();

  const redirect = (route) => {
    navigation.navigate(route);
  }

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => {navigation.navigate('Profil');}}>
        <Image style={styles.navbarIcon} source={require('./../images/profil.png')}></Image>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Liste Jeux');}}>
        <Image style={styles.navbarIcon} source={require('./../images/game.png')}></Image>
        <Text style={styles.buttonText}>Games</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Accueil');}}>
        <Image style={styles.navbarIcon} source={require('./../images/studio.png')}></Image>
        <Text style={styles.buttonText}>Studios</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Accueil');}}>
        <Image style={styles.navbarIcon} source={require('./../images/home.png')}></Image>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Navbar;
