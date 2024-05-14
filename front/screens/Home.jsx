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
  const [latestGames, setLatestGames] = useState(null);
  const [games, setGames] = useState(null);


  const getStudioData = async () => {
    try {
      const response = await axios.get('http://10.57.33.155:8000/studio');
      setStudios(response.data.studiosData);
    } catch (error) {
        console.error('Error:', error.message);
    }
  };

  const getLatestGameData = async () => {
    try {
      const response = await axios.get('http://10.57.33.155:8000/latestGame');
      setLatestGames(response.data.latestGamesData);
    } catch (error) {
        console.error('Error:', error.message);
    }
  };

  const getGameData = async () => {
    try {
      const response = await axios.get('http://10.57.33.155:8000/game');
      setGames(response.data.gamesData);
    } catch (error) {
        console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    getLatestGameData();
    getGameData();
    getStudioData();
  }, []);


  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        style={styles.backgroundStyle} nestedScrollEnabled>
        <View  style={styles.fullPage}>
          <GameCarrousel games={latestGames} title="Les nouveaux jeux →" />
          <StudioCarrousel studios={studios} title="Des studios partenaires →" />
          <GameCarrousel games={games} title="Vous aimerez peut-être →" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;