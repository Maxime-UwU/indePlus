import React, { useCallback, useEffect, useRef } from 'react';
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View, Text, Share, Platform } from 'react-native';
import NotifService from './../NotifService';
import styles from './../components/styles/style';
import GameCarrousel from '../components/templates/GameCarrousel';

const DetailsJeu = ({ route }) => {
  const { game } = route.params;
  const notifServiceRef = useRef(null);
  const message = "Pour le moment, je suis un texte statique mais ca fait déja le café"

  useEffect(() => {
    notifServiceRef.current = new NotifService(
      (token) => console.log('Device Token:', token),
      (notification) => console.log('Notification:', notification)
    );

    notifServiceRef.current.createDefaultChannels();
  }, []);

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

  const sendNotification = () => {
    if (Platform.OS === 'android') {
      notifServiceRef.current.localNotif(message);
    }
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView style={styles.addMargin} nestedScrollEnabled>
        <Image source={game.image} style={styles.detGameImg} />
        <Text style={styles.detGameText}>Studio : {game.studio}</Text>
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
          games={[
            { id: 1, title: 'Spell Swap', studio: 'Teagher Studio', image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 2, title: 'Nom du jeu 2', studio: 'Studio 2', image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 3, title: 'Nom du jeu 3', studio: 'Studio 3', image: require('./../components/images/spellswapthumbnail.jpg') }
          ]}
          title="Jeux du même studio →"
        />
        <GameCarrousel
          games={[
            { id: 1, title: 'Spell Swap', studio: 'Teagher Studio', image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 2, title: 'Nom du jeu 2', studio: 'Studio 2', image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 3, title: 'Nom du jeu 3', studio: 'Studio 3', image: require('./../components/images/spellswapthumbnail.jpg') }
          ]}
          title="Jeux du même genre →"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsJeu;
