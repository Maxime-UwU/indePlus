import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Image, SafeAreaView, FlatList, TouchableOpacity, View, Text, Share, Platform } from 'react-native';
import NotifService from './../NotifService';
import styles from './../components/styles/style';
import teagherStudioThumbnail from '../components/images/teagherStudio.jpg';
import LimanascentThumbnail from '../components/images/Liminascentthumbnail.png';
import RunetrailLogo from '../components/images/RunetrailGamesLogo.png';
import CommentSection from '../components/templates/CommentSection';
import Navbar from '../components/navbar/Navbar';
import ip from '../Ip';

const DetailsStudio = ({ route }) => {
  const [games, setGames] = useState(null);
  const studio = route.params.studio;
  const notifServiceRef = useRef(null);
  const message = "Pour le moment, je suis un texte statique mais ça fait déjà le café";

  const getStudioData = async () => {
    try {
      const response = await axios.get(ip + '/sameStudioGame');
      setGames(response.data.gamesData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    getStudioData();
    notifServiceRef.current = new NotifService(
      (token) => console.log('Device Token:', token),
      (notification) => console.log('Notification:', notification)
    );

    notifServiceRef.current.createDefaultChannels();
  }, []);

  const getImageSource = (imageName) => {
    switch (imageName) {
      case './../images/teagherStudio.jpg':
        return teagherStudioThumbnail;
      case './../images/Liminascentthumbnail.png':
        return LimanascentThumbnail;
      case './../images/RunetrailGamesLogo.png':
        return RunetrailLogo;
      default:
        return teagherStudioThumbnail;
    }
  };

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

  const sendNotification = () => {
    if (Platform.OS === 'android') {
      notifServiceRef.current.localNotif(message);
    }
  };

  const renderGameItem = ({ item }) => (
    <TouchableOpacity style={styles.gameListCard}>
      <Image style={styles.imageListCard} source={getImageSource(item.image)} />
      <View>
        <Text style={styles.titleCard}>{item.name}</Text>
        {item.studio.map(studio => (
          <Text key={studio.id} style={styles.textCard} numberOfLines={2}>{studio.name}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <FlatList
        ListHeaderComponent={
          <>
            <Image source={getImageSource(studio.image)} style={styles.detGameImg} />
            <Text style={styles.detGameDescription}>{studio.description}</Text>
            <View style={styles.socialLinks}>
              <TouchableOpacity onPress={shareStudio} style={styles.socialText}>
                <Image style={styles.socialLink} source={require("./../components/images/share.png")} />
                <Text style={styles.detGameText}>Partager</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        data={games}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <>
            <CommentSection />
            <Navbar />
          </>
        }
      />
    </SafeAreaView>
  );
};

export default DetailsStudio;
