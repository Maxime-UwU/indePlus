import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View, Text, Share, Platform, TextInput } from 'react-native';
import NotifService from './../NotifService';
import styles from './../components/styles/style';
import GameCarrousel from '../components/templates/GameCarrousel';
import teagherStudioThumbnail from '../components/images/teagherStudio.jpg';
import LimanascentThumbnail from '../components/images/Liminascentthumbnail.png';
import RunetrailLogo from '../components/images/RunetrailGamesLogo.png';
import CommentSection from '../components/templates/CommentSection';
import Navbar from '../components/navbar/Navbar';

const DetailsStudio = ({ route }) => {
  const [games, setGames] = useState(null);
//   const { studio } = route.params;
const studio = []
  const notifServiceRef = useRef(null);
  const message = "Pour le moment, je suis un texte statique mais ça fait déjà le café";

  // Fonction pour récupérer les données des jeux du même studio
  const getStudioData = async () => {
    try {
      const response = await axios.get(ip + '/sameStudioGame');
      setGames(response.data.gamesData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // useEffect pour appeler la fonction de récupération de données et initialiser le service de notifications lors du montage du composant
  useEffect(() => {
    getStudioData();
    notifServiceRef.current = new NotifService(
      (token) => console.log('Device Token:', token),
      (notification) => console.log('Notification:', notification)
    );

    notifServiceRef.current.createDefaultChannels();
  }, []);

  // Fonction pour obtenir la source de l'image en fonction du nom de l'image
  const getImageSource = (imageName) => {
    switch(imageName) {
      case './../images/teagherStudio.jpg':
        return teagherStudioThumbnail;
      case './../images/Liminascentthumbnail.png':
        return LimanascentThumbnail;
      case './../images/RunetrailGamesLogo.png':
        return RunetrailLogo;
      default:
        return null;
    }
  };

  // Fonction pour partager le studio actuel
  const shareStudio = useCallback(async () => {
    try {
      const result = await Share.share({
        message: `Le studio ${studio.title} a attisé ma curiosité, je pense que cela mérite plus d'attention.`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Partagé avec un type d'activité spécifique
        } else {
          // Partagé sans type d'activité spécifique
        }
      } else if (result.action === Share.dismissedAction) {
        // Partage annulé
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [studio]);

  // Fonction pour envoyer une notification locale
  const sendNotification = () => {
    if (Platform.OS === 'android') {
      notifServiceRef.current.localNotif(message);
    }
  };


  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView style={[styles.addMargin, styles.fullPage]} nestedScrollEnabled>
        <Image source={getImageSource(studio.image)} style={styles.detGameImg} />
        <Text style={styles.detGameDescription}>{studio.description}</Text>
        <View style={styles.socialLinks}>
            <TouchableOpacity onPress={shareStudio} style={styles.socialText}>
              <Image style={styles.socialLink} source={require("./../components/images/share.png")} />
              <Text style={styles.detGameText}>Partager</Text>
            </TouchableOpacity>
        </View>
        <GameCarrousel 
          // games={games}
          games={[
            { id: 1, name: "Spell Swap", studio: [{id: 1, name: "Teagher Studio"}], image: './../components/images/spellswapthumbnail.jpg' },
            { id: 2, name: "Nom du jeu 2", studio: [{id: 2, name: "Studio 2"}], image: './../components/images/spellswapthumbnail.jpg' },
            { id: 3, name: "Nom du jeu 3", studio: [{id: 3, name: "Studio 3"}], image: './../components/images/spellswapthumbnail.jpg' }
          ]} 
          title="Jeux de ce studio →" 
        />
        <CommentSection/>
      </ScrollView>
      <Navbar/>
    </SafeAreaView>
  );
};

export default DetailsStudio;