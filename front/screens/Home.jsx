import styles from './../components/styles/style'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
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
        style={styles.backgroundStyle} nestedScrollEnabled>
        <View  style={styles.fullPage}>
          <View>
            <Text style={styles.title}>Les nouveaux jeux →</Text> 
            <View>
              <FlatList
                horizontal
                data={games}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={""} style={styles.gameCard}>
                    <Image style={styles.imageCard} source={require('./../components/images/teagherStudio.jpg')}/>
                    <Text style={styles.titleCard}>{item.name}</Text>
                    <Text style={styles.textCard} numberOfLines={2}>{item.description}</Text>
                    <View style={styles.line}>
                      <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')}></Image>
                      <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')}></Image>
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
                    <Image style={styles.imageCard} source={require('./../components/images/teagherStudio.jpg')}></Image>
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
                data={[
                  { id: 1, title: "Spell Swap", studio: "Teagher Studio", image: require('./../components/images/spellswapthumbnail.jpg') },
                  { id: 2, title: "Nom du jeu 2", studio: "Studio 2", image: require('./../components/images/spellswapthumbnail.jpg') },
                  { id: 3, title: "Nom du jeu 3", studio: "Studio 3", image: require('./../components/images/spellswapthumbnail.jpg') }
                ]}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={""} style={styles.gameCard}>
                    <Image style={styles.imageCard} source={item.image}></Image>
                    <Text style={styles.titleCard}>{item.title}</Text>
                    <Text style={styles.textCard}>{item.studio}</Text>
                    <View style={styles.line}>
                      <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')}></Image>
                      <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')}></Image>
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

export default Home;