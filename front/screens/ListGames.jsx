import React, { useState, useEffect } from 'react';
import styles from './../components/styles/style';
import {
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import ip from '../Ip';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import spellSwapThumbnail from '../components/images/spellswapthumbnail.jpg';
import LimanascentThumbnail from '../components/images/Liminascentthumbnail.png';
import RunetrailLogo from '../components/images/RunetrailGamesLogo.png';
import Navbar from '../components/navbar/Navbar';

const ListGames = () => {
  const navigation = useNavigation();

  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [tags, setTags] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterArea, setFilterArea] = useState(styles.hiddenFilterArea);
  const [name, setName] = useState("")
  const [games, setGames] = useState(null);

  // Tableau pour stocker les années allant de 2024 à 1980
  const years = [];
  for (let year = 2024; year >= 1980; year--) {
    years.push({ name: year.toString(), id: year });
  }

  // Liste des genres de jeux (à remplacer par une récupération dynamique)
  const genres = [
    { name: 'Action', idGenre: 1 },
    { name: 'Adventure', idGenre: 2 },
    { name: 'RPG', idGenre: 3 },
    { name: 'Simulation', idGenre: 4 },
    { name: 'Strategy', idGenre: 5 },
    { name: 'Sports', idGenre: 6 },
    { name: 'Racing', idGenre: 7 },
    { name: 'Puzzle', idGenre: 8 },
    { name: 'Shooter', idGenre: 9 },
    { name: 'Fighting', idGenre: 10 },
    { name: 'Platformer', idGenre: 11 },
    { name: 'Survival', idGenre: 12 },
    { name: 'Horror', idGenre: 13 },
    { name: 'Stealth', idGenre: 14 },
    { name: 'MMORPG', idGenre: 15 },
    { name: 'MOBA', idGenre: 16 },
    { name: 'Idle', idGenre: 17 },
    { name: 'Sandbox', idGenre: 18 },
    { name: 'Music', idGenre: 19 },
    { name: 'Trivia', idGenre: 20 }
  ];

  const getGameData = async () => {
    try {
      const response = await axios.get(ip + '/game');
      setGames(response.data.gamesData);
    } catch (error) {
        console.error('Error:', error.message);
    }
  };

  const getTags = async () => {
    try {
      const response = await axios.get(ip + '/tag');
      setTags(response.data.tagsData);
    } catch (error) {
        console.error('Error:', error.message);
    }
  };

  const searchGameData = async () => {
    try {
      const response = await axios.post(ip + '/searchGame', {
        name
      });
      setGames(response.data.gamesData);
    } catch (error) {
        console.error('Error:', error.message);
    }
  };

  const getImageSource = (imageName) => {
    switch(imageName) {
      case './../images/spellswapthumbnail.jpg':
        return spellSwapThumbnail;
      case './../images/Liminascentthumbnail.png':
        return LimanascentThumbnail;
      case './../images/RunetrailGamesLogo.png':
        return RunetrailLogo
    }
  };

  // Fonction pour afficher ou cacher les filtres
  const displayFilter = () => {
    if(filterOpen == true) {
      setFilterOpen(false);
      setFilterArea(styles.hiddenFilterArea)
    } else {
      setFilterOpen(true);
      setFilterArea(styles.filterArea)
    }
  }

  useEffect(() => {
    getGameData();
    getTags();
  }, []);

  return (
    <>
    <ScrollView nestedScrollEnabled style={[styles.fullPage, styles.backgroundStyle]} keyboardShouldPersistTaps='handled'>
      <View style={styles.searchArea}>
        <View style={styles.searchBarArea}>
          <TouchableOpacity style={styles.filterOpenButton} onPress={displayFilter} testID="filterButton">
            <Image style={styles.icon} source={require("./../components/images/filters.png")} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchBar}
            placeholder="Recherche par nom de jeu"
            placeholderTextColor="#4D2672"
            value={name}
            onChangeText={name => setName(name)}
          />
          <TouchableOpacity style={styles.searchButton} onPress={searchGameData}>
            <Image style={styles.icon} source={require("./../components/images/search.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={filterArea} testID="filterArea">
      <SectionedMultiSelect
          items={years}
          IconRenderer={Icon}
          uniqueKey="id"
          selectText="Filtre par dates"
          selectedText="choisie(s)"
          hideSearch={true}
          modalAnimationType="slide"
          confirmText="Ajouter les filtres"
          onSelectedItemsChange={setSelectedYears}
          selectedItems={selectedYears}
          colors={{ primary: '#4D2672' }}
          styles={{
            selectToggle: styles.selectToggle,
            chipContainer: styles.multiSelectChipContainer,
            chipText: styles.multiSelectChipText,
          }}
          showDropDowns={true}
          expandDropDowns={true}
          alwaysShowSelectText={true}
        />
        <SectionedMultiSelect
          items={tags}
          IconRenderer={Icon}
          uniqueKey="id"
          selectText="Filtre par genres"
          selectedText="choisie(s)"
          searchPlaceholderText="Chercher un genre"
          modalAnimationType="slide"
          confirmText="Ajouter les filtres"
          onSelectedItemsChange={setSelectedGenres}
          selectedItems={selectedGenres}
          colors={{ primary: '#4D2672' }}
          styles={{
            selectToggle: styles.selectToggle,
            chipContainer: styles.multiSelectChipContainer,
            chipText: styles.multiSelectChipText,
          }}
          showDropDowns={true}
          expandDropDowns={true}
          alwaysShowSelectText={true}
        />
      </View>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => { navigation.navigate('Details Jeu', { game: item }); }} style={styles.gameListCard}>
            <Image style={styles.imageListCard} source={getImageSource(item.image)} />

            <View>
              <Text style={styles.titleCard}>{item.name}</Text>
              {item.studio.map(studio => (
                <Text key={studio.id} style={styles.textCard} numberOfLines={2}>{studio.name}</Text>
              ))}
              <View style={styles.line}>
                {/* <Image style={styles.logoCard} source={item.plateform} /> */}
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
    </ScrollView>
    <Navbar/>
    </>
  );
};

export default ListGames;