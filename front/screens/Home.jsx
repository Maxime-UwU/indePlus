import styles from './../components/styles/style';
import StudioCarrousel from '../components/templates/StudioCarrousel';
import GameCarrousel from '../components/templates/GameCarrousel';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';


const Home = () => {
  const [studios, setStudios] = useState(null);
  const [games, setGames] = useState(null);

  const getStudios = async () => {
    try {
      const response = await axios.get('http://10.57.33.155:8000/studio');
      setStudios(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  const getGames = async () => {
    try {
      const response = await axios.get('http://10.57.33.155:8000/game');
      setGames(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  useEffect(() => {
    getStudios();
    getGames();
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        style={styles.addMargin} nestedScrollEnabled>
        <View  style={styles.fullPage}>
          <GameCarrousel games={games} title="Les nouveaux jeux →" />
          <StudioCarrousel studios={studios} title="Des studios partenaires →" />
          <GameCarrousel games={[
            { id: 1, title: "Spell Swap", studio: "Teagher Studio", image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 2, title: "Nom du jeu 2", studio: "Studio 2", image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 3, title: "Nom du jeu 3", studio: "Studio 3", image: require('./../components/images/spellswapthumbnail.jpg') }
          ]} title="Vous aimerez peut-être →" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;