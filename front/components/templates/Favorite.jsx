import React, { useState } from 'react';
import styles from './../styles/style';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Favorite = () => {
  const navigation = useNavigation();
  const[isFavorite, setIsFavorite] = useState(false);
  const [favorite, setFavorite] = useState(require("./../images/nostar.png"));

  useEffect(function() {
    setFavoriteLoad()
  }, []);

  const setFavoriteLoad = () => {
    // Récupération du statut favori
  }

  const addFavorite = () => {
    if( isFavorite == false) {
        setIsFavorite(true);
        setFavorite(require("./../images/star.png"));
        // Besoin d'ajouter en bdd le statut "favori" au jeu
    }
    else{
        setIsFavorite(false);
        setFavorite(require("./../images/nostar.png"));
        // Besoin de retirer en bdd le statut "favori" au jeu
    }

  }

  return (
    <TouchableOpacity
        onPress={addFavorite}
        title="Info"
        color="#fff"
    >
        <Image id="favorite" source={favorite} style={styles.favorite}></Image>
    </TouchableOpacity>
  )
}

export default Favorite;