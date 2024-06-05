import React from 'react';
import styles from './../components/styles/style'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
import GameCarrousel from '../components/templates/GameCarrousel';

const Home = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView nestedScrollEnabled>
        <View style={styles.fullPage}>
          <View style={styles.searchArea}>
            <View style={styles.searchBarArea}>
              <TextInput style={styles.searchBar}></TextInput>
              <TouchableOpacity style={styles.searchButton}></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.filterOpenButton}></TouchableOpacity>
          </View>
          <View style={styles.filterArea}>
            
          </View>
          <GameCarrousel games={[
            { id: 1, title: "Spell Swap", studio: "Teagher Studio", image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 2, title: "Nom du jeu 2", studio: "Studio 2", image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 3, title: "Nom du jeu 3", studio: "Studio 3", image: require('./../components/images/spellswapthumbnail.jpg') }
          ]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;