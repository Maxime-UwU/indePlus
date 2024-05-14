import React, {useEffect, useState} from 'react';
import axios from 'axios';
import spellSwapThumbnail from './../components/images/spellswapthumbnail.jpg';
import LimanascentThumbnail from './../components/images/Liminascentthumbnail.png';
import teagherStudio from './../components/images/teagherStudio.jpg';
import windowsIcon from './../components/images/windows-icon.png';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
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
          <View>
            <Text style={styles.title}>Les nouveaux jeux →</Text> 
            <View>
              <FlatList
                horizontal
                data={latestGames}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={""} style={styles.gameCard}>
                    <Image style={styles.imageCard} source={getImageSource(item.image)}/>
                    <Text style={styles.titleCard}>{item.name}</Text>
                    <Text style={styles.textCard} numberOfLines={2}>{item.description}</Text>
                    <View style={styles.line}>
                      <Image style={styles.logoCard} source={getPlateformSource(item.plateform)}></Image>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={<View style={{ marginRight: 20 }} />}
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>Des studios partenaires →</Text> 
              <FlatList
                horizontal
                data={studios}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={""} style={styles.studioCard}>
                    <Image style={styles.imageCard} source={getImageSource(item.image)}></Image>
                    <Text style={styles.titleCard}>{item.name}</Text>
                    <Text numberOfLines={2} style={styles.textCard}>{item.description}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={<View style={{ marginRight: 20 }} />}
              />
          </View>
          <View>
            <Text style={styles.title}>Vous aimerez peut-être →</Text> 
            <View style={styles.line}>
              <FlatList
                horizontal
                data={games}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={""} style={styles.gameCard}>
                    <Image style={styles.imageCard} source={getImageSource(item.image)}></Image>
                    <Text style={styles.titleCard}>{item.name}</Text>
                    {item.studio.map(studio => (
                      <Text key={studio.id} style={styles.textCard}>{studio.name}</Text>
                    ))}
                      <View style={styles.line}>
                      <Image style={styles.logoCard} source={getPlateformSource(item.plateform)}></Image>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={<View style={{ marginRight: 20 }} />}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundStyle: {
    backgroundColor: "#4D2672"
  },
  line: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  fullPage: {
    paddingTop: 75,
    paddingBottom: 75
  },
  carrousel: {
    display: 'flex',
    flexDirection: 'row'
  },
  gameCard: {
    width: 150,
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20
  },
  imageCard: {
    width: 'auto',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10
  },
  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  textCard: {
    color: 'white'
  },
  logoCard: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    marginRight: 10,
    marginTop: 5,
    backgroundColor: '#4D2672',
  },
  studioCard: {
    width: 150,
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  }
});

export default Home;