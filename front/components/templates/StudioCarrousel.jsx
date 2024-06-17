import React from 'react';
import styles from './../styles/style';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import teagherStudio from './../images/teagherStudio.jpg';
import RunetrailStudio from './../images/RunetrailGamesLogo.png';

const StudioCarrousel = props => {

  const getImageSource = (imageName) => {
    switch(imageName) {
      case './../images/teagherStudio.jpg':
        return teagherStudio;
        case './../images/RunetrailGamesLogo.png':
          return RunetrailStudio;

    }
  };

  return (
    <View>
      <Text style={styles.title}>{props.title}</Text> 
      <FlatList
      horizontal
      data={props.studios}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {navigation.navigate('DetailsStudio', {studio: item} );}} style={styles.studioCard}>
          <Image style={styles.imageCard} source={getImageSource(item.image)}></Image>
          <Text style={styles.titleCard}>{item.name}</Text>
          <Text numberOfLines={2} style={styles.textCard}>{item.description}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
      ListFooterComponent={<View style={{ marginRight: 20 }} />}
      />
    </View>
  )
}

export default StudioCarrousel;