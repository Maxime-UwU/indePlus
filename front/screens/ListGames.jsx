import React, { useState } from 'react';
import styles from './../components/styles/style'
import {
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ListGames = () => {
  const navigation = useNavigation();

  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterArea, setFilterArea] = useState(styles.hiddenFilterArea);
  const [name, setName] = useState("")

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

  // Données des jeux pour l'affichage (à remplacer par des données dynamiques récupérées)
  const data = [
    { id: 1, name: "Spell Swap", studio: [{ id: 1, name: "Teagher Studio" }], image: require('./../components/images/spellswapthumbnail.jpg'), plateform: require('./../components/images/windows-icon.png') },
    { id: 2, name: "Nom du jeu 2", studio: [{ id: 2, name: "Studio 2" }], image: require('./../components/images/spellswapthumbnail.jpg'), plateform: require('./../components/images/windows-icon.png') },
    { id: 3, name: "Nom du jeu 3", studio: [{ id: 3, name: "Studio 3" }], image: require('./../components/images/spellswapthumbnail.jpg'), plateform: require('./../components/images/windows-icon.png') },
    { id: 4, name: "Spell Swap", studio: [{ id: 1, name: "Teagher Studio" }], image: require('./../components/images/spellswapthumbnail.jpg'), plateform: require('./../components/images/windows-icon.png') },
    { id: 5, name: "Nom du jeu 2", studio: [{ id: 2, name: "Studio 2" }], image: require('./../components/images/spellswapthumbnail.jpg'), plateform: require('./../components/images/windows-icon.png') },
    { id: 6, name: "Nom du jeu 3", studio: [{ id: 3, name: "Studio 3" }], image: require('./../components/images/spellswapthumbnail.jpg'), plateform: require('./../components/images/windows-icon.png') }
  ];

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

  // Fonction de recherche avec les filtres sélectionnés
  const search = () => {
    console.log(selectedYears, selectedGenres, name); // Les 3 valeurs à ajouter dans la requête

    // Envoi au back et récupération des jeux
  }

  return (
    <ScrollView nestedScrollEnabled style={[styles.fullPage, styles.backgroundStyle]}>
      <View style={styles.searchArea}>
        <View style={styles.searchBarArea}>
          <TouchableOpacity style={styles.filterOpenButton} onPress={displayFilter}>
            <Image style={styles.icon} source={require("./../components/images/filters.png")} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchBar}
            placeholder="Recherche par nom de jeu"
            placeholderTextColor="#4D2672"
            value={name}
            onChangeText={name => setName(name)}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Image style={styles.icon} source={require("./../components/images/search.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={filterArea}>
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
          items={genres}
          IconRenderer={Icon}
          uniqueKey="idGenre"
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
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => { navigation.navigate('DetailsJeu', { game: item }); }} style={styles.gameListCard}>
            <Image style={styles.imageListCard} source={item.image} />
            <View>
              <Text style={styles.titleCard}>{item.name}</Text>
              {item.studio.map(studio => (
                <Text key={studio.id} style={styles.textCard} numberOfLines={2}>{studio.name}</Text>
              ))}
              <View style={styles.line}>
                <Image style={styles.logoCard} source={item.plateform} />
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

export default ListGames;