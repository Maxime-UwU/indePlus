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

const GameCarrousel = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>{props.title}</Text> 
      <View>
        <FlatList
          horizontal
          data={props.games}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {navigation.navigate('DetailsJeu', {game: item} );}} style={styles.gameCard}>
              <Image style={styles.imageCard} source={item.image}/>
              <Text style={styles.titleCard}>{item.title}</Text>
              <Text style={styles.textCard} numberOfLines={2}>{item.studio}</Text>
              <View style={styles.line}>
                <Image style={styles.logoCard} source={require('./../images/windows-icon.png')}></Image>
                <Image style={styles.logoCard} source={require('./../images/windows-icon.png')}></Image>
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