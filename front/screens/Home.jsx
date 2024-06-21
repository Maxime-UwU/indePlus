import styles from './../components/styles/style';
import StudioCarrousel from '../components/templates/StudioCarrousel';
import GameCarrousel from '../components/templates/GameCarrousel';
import ip from '../Ip';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';
import Navbar from '../components/navbar/Navbar'; 


const Home = () => {
  const [studios, setStudios] = useState(null);
  const [latestGames, setLatestGames] = useState(null);
  const [games, setGames] = useState(null);

  // Fonction pour récupérer les données des studios
  const getStudioData = async () => {
    try {
      const response = await axios.get(ip + '/studio');
      setStudios(response.data.studiosData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // Fonction pour récupérer les données des derniers jeux
  const getLatestGameData = async () => {
    try {
      const response = await axios.get(ip + '/latestGame');
      setLatestGames(response.data.latestGamesData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // Fonction pour récupérer les données des jeux
  const getGameData = async () => {
    try {
      const response = await axios.get(ip + '/game');
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
        style={styles.addMargin} nestedScrollEnabled>
        <View  style={styles.fullPage}>
          <GameCarrousel games={latestGames} title="Les nouveaux jeux →" />
          <StudioCarrousel studios={studios} title="Des studios partenaires →" />
          <GameCarrousel games={games} title="Vous aimerez peut-être →" />
        </View>
      </ScrollView>
      {/* <Navbar /> */}
    </SafeAreaView>
  );
}

export default Home;
