import React, { useEffect, useState } from 'react';
import styles from './../styles/style';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ip from '../../Ip';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

const Favorite = ({ id }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorite, setFavorite] = useState(require("./../images/nostar.png"));
  const [gameId, setGameId] = useState();
  const [jwtUserId, setJwtUserId] = useState();

  useEffect(() => {
    setFavoriteLoad();
    // getJwtToken();
    setJwtUserId('1');
    setGameId(id);
    checkFavorite();
  }, []);



  const setFavoriteLoad = () => {
    // Récupération du statut favori
  };

  // const getJwtToken = async () => {
  //   try {
  //     const jwtToken = await AsyncStorage.getItem("jwtToken");
  //     console.log("1");
  //     console.log(jwtToken);
  
  //     if (jwtToken) {
  //       const decodedToken = jwtDecode(jwtToken);
  //       console.log("2");
  //       console.log(decodedToken);
  //     } else {
  //       console.log("JWT Token not found in AsyncStorage");
  //     }
  //   } catch (error) {
  //     console.error("Error decoding JWT token:", error);
  //   }
  // }

  const changeFavorite = async () => {
    try {
      const response = await axios.post('http://10.57.33.155:8000/changeFav', {
        gameId,
        jwtUserId,
      });
      const status = response.data.status;
      if (status === "success"){
        setFavorite(require("./../images/nostar.png"));
      } else if (status === "error"){
        setFavorite(require("./../images/star.png"));
      }
      console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
  }

  const checkFavorite = async ()=> {
    try {
      const response = await axios.post(ip + '/checkFav', {
        gameId,
        jwtUserId,
      });
      const status = response.data.status;
      if (status === "success"){
        setFavorite(require("./../images/nostar.png"));
      } else if (status === "error"){
        setFavorite(require("./../images/star.png"));
      }    } catch (error){
      console.error('Error:', error.message);
    }
  }

  return (
    <TouchableOpacity
        onPress={changeFavorite}
        title="Info"
        color="#fff"
    >
      <Image source={favorite} style={styles.favorite}></Image>
    </TouchableOpacity>
  )
}

export default Favorite;
