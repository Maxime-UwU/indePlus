import styles from './../components/styles/style';
import StudioCarrousel from '../components/templates/StudioCarrousel';
import GameCarrousel from '../components/templates/GameCarrousel';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import spellSwapThumbnail from './../components/images/spellswapthumbnail.jpg';
import LimanascentThumbnail from './../components/images/Liminascentthumbnail.png';
import teagherStudio from './../components/images/teagherStudio.jpg';
import windowsIcon from './../components/images/windows-icon.png';
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

  const getImageSource = (imageName) => {
    switch(imageName) {
      case './../components/images/spellswapthumbnail.jpg':
        return spellSwapThumbnail;
      case './../components/images/Liminascentthumbnail.png':
        return LimanascentThumbnail;
      case './../components/images/teagherStudio.jpg':
        return teagherStudio;
      default:
        return spellSwapThumbnail;
    }
  };

  const getPlateformSource = (plateformName) => {
    switch(plateformName) {
      case 'windows':
        return windowsIcon;
      default:
        return windowsIcon;
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        style={styles.backgroundStyle} nestedScrollEnabled>
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