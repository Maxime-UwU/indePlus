import React from 'react';
import styles from './../styles/style';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import spellSwapThumbnail from './../images/spellswapthumbnail.jpg';
import LimanascentThumbnail from './../images/Liminascentthumbnail.png';
import RunetrailLogo from './../images/RunetrailGamesLogo.png';
import windowsIcon from './../images/windows-icon.png';

const GameCarrousel = props => {
  const navigation = useNavigation();

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

  const getPlateformSource = (plateformName) => {
    switch(plateformName) {
      case 'windows':
        return windowsIcon;
      default:
        return windowsIcon;
    }
  };

  return (
    <View>
      <Text style={styles.title}>{props.title}</Text> 
      <View>
        <FlatList
          horizontal
          data={props.games}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {navigation.navigate('DetailsJeu', {game: item} );}} style={styles.gameCard}>
              <Image style={styles.imageCard} source={getImageSource(item.image)}/>
              <Text style={styles.titleCard}>{item.name}</Text>
              {item.studio.map(studio => (
                <Text key={studio.id} style={styles.textCard} numberOfLines={2}>{studio.name}</Text>
              ))}
              <View style={styles.line}>
                <Image style={styles.logoCard} source={getPlateformSource(item.plateform)}></Image>
                <Image style={styles.logoCard} source={getPlateformSource(item.plateform)}></Image>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={<View style={{ marginRight: 20 }} />}
        />
      </View>
    </View>
  )
}

export default GameCarrousel;