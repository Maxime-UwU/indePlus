import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View, Text, Share, Platform } from 'react-native';
import NotifService from './../NotifService';
import styles from './../components/styles/style';
import GameCarrousel from '../components/templates/GameCarrousel';
import ip from '../Ip';
import spellSwapThumbnail from '../components/images/spellswapthumbnail.jpg';
import LimanascentThumbnail from '../components/images/Liminascentthumbnail.png';
import RunetrailLogo from '../components/images/RunetrailGamesLogo.png';
import CommentSection from '../components/templates/CommentSection';
import Navbar from '../components/navbar/Navbar';

const DetailsJeu = ({ route }) => {
  const [games, setGames] = useState(null);
  // const { game } = route.params;
  const game = {name: "", studio : [{name: ""}]}
  const notifServiceRef = useRef(null);
  const message = "Pour le moment, je suis un texte statique mais ca fait déja le café"

  const getGameData = async () => {
    try {
      const response = await axios.get(ip + '/sameStudioGame');
      setGames(response.data.gamesData);
    } catch (error) {
        console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    getGameData();
    notifServiceRef.current = new NotifService( 
      (token) => console.log('Device Token:', token),
      (notification) => console.log('Notification:', notification)
    );

    notifServiceRef.current.createDefaultChannels();
  }, []);

  const getImageSource = (imageName) => {
    switch (imageName) {
      case './../images/spellswapthumbnail.jpg':
        return spellSwapThumbnail;
      case './../images/Liminascentthumbnail.png':
        return LimanascentThumbnail;
      case './../images/RunetrailGamesLogo.png':
        return RunetrailLogo;
      default:
        return spellSwapThumbnail;
    }
  };
  

  const shareGame = useCallback(async () => {
    try {
      const result = await Share.share({
        message: `Le jeu ${game.title} a attisé ma curiosité, je pense que cela mérite plus d'attention.`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [game]);

  // Envoie une notification à l'utilisateur si son appareil est un Android (IOS pas encore pris en charge)
  const sendNotification = () => {
    if (Platform.OS === 'android') {
      notifServiceRef.current.localNotif(message);
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView style={[styles.addMargin, styles.fullPage]} nestedScrollEnabled>
        <Image source={getImageSource(game.image)} style={styles.detGameImg} />
        {Array.isArray(game.studio) ? (
          game.studio.map(studio => (
            <Text key={studio.id} style={styles.detGameText}>{studio.name}</Text>
          ))
        ) : (
          <Text style={styles.detGameText}>Studio : {game.studio.name}</Text>
        )}
        <View style={styles.detGameTagList}>
          <View style={styles.detGameTag}>
            <Text style={styles.detGameTagText}>Tag 1</Text>
          </View>
          <View style={styles.detGameTag}>
            <Text style={styles.detGameTagText}>Tag 2</Text>
          </View>
        </View>
        <Text style={styles.detGameText}>Sortie : {game.release_date}</Text>
        <Text style={styles.detGameDescription}>{game.description}</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity onPress={sendNotification} style={styles.socialText}>
          <Image style={styles.socialLink} source={require("./../components/images/download.png")} />
              <Text style={styles.detGameText}>Télécharger</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={shareGame} style={styles.socialText}>
              <Image style={styles.socialLink} source={require("./../components/images/share.png")} />
              <Text style={styles.detGameText}>Partager</Text>
            </TouchableOpacity>
        </View>
        <GameCarrousel 
          games={games}
          // games={[
          //   { id: 1, name: "Spell Swap", studio: [{id: 1, name: "Teagher Studio"}], image: './../components/images/spellswapthumbnail.jpg' },
          //   { id: 2, name: "Nom du jeu 2", studio: [{id: 2, name: "Studio 2"}], image: './../components/images/spellswapthumbnail.jpg' },
          //   { id: 3, name: "Nom du jeu 3", studio: [{id: 3, name: "Studio 3"}], image: './../components/images/spellswapthumbnail.jpg' }
          // ]} 
          title="Jeux du même studio →" 
        />
        <GameCarrousel 
          games={games}
          // games={[
          //   { id: 1, name: "Spell Swap", studio: [{id: 1, name: "Teagher Studio"}], image: './../components/images/spellswapthumbnail.jpg' },
          //   { id: 2, name: "Nom du jeu 2", studio: [{id: 2, name: "Studio 2"}], image: './../components/images/spellswapthumbnail.jpg' },
          //   { id: 3, name: "Nom du jeu 3", studio: [{id: 3, name: "Studio 3"}], image: './../components/images/spellswapthumbnail.jpg' }
          // ]} 
          title="Jeux du même genre →" 
        />
        <CommentSection/>
      </ScrollView>
      <Navbar/>
    </SafeAreaView>
  );
};

export default DetailsJeu;
