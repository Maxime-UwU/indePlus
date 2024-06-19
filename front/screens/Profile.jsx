import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
  FlatList
} from 'react-native';
import styles from './../components/styles/style';
import GameCarrousel from '../components/templates/GameCarrousel';
import axios from 'axios';
import StudioCarrousel from '../components/templates/StudioCarrousel';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const Profile = () => {
  const navigation = useNavigation();
  var conectedUser = "user" // Il faudrait le statut de l'utilisateur ici
  var date = "date.time" // Il faudrait la date d'inscription ici
  var image = "./../components/images/teagherStudio.jpg";
  var description = ""
  var x = ""
  var facebook = ""
  var instagram = ""
  var youtube = ""
  var count = 0
  var user = { role: "STUDIO" }

  const [nom, setNom] = useState("Test") // il faudrait qu'il y ait le nom de l'utilisateur par defaut ici
  const [name, setName] = useState(styles.profileModifyImage)
  const [nameInput, setNameInput] = useState(styles.hiddenProfileModifyImage)
  const [nameLabel, setNameLabel] = useState(styles.text)
  const [input, setInput] = useState(styles.hiddenfield)
  const [notif, setNotif] = useState(false); // Il faudrait le booleen notification ici
  const [games, setGames] = useState(null);
  const [studios, setStudios] = useState(null);
  

    const handleUploadPhoto = async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log('Pas d\'image choisie');
            } else if (response.error) {
                console.log('Erreur lors de la récupération de l\'image: ', response.error);
            } else {
                const source = { uri: response.assets[0].uri };
                setImageUri(source.uri);
                try {
                    const formData = new FormData();
                    formData.append('image', {
                        uri: source.uri,
                        type: response.assets[0].type,
                        name: response.assets[0].fileName,
                    });

                    const response = await axios.post('https://example.com/api/upload-image', formData, { // envoi de l'image à l'API pour la sauvegarder en local
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    console.log('Image envoyée avec succès:', response.data);
                    Alert.alert('Succès', 'Image téléchargée avec succès sur le serveur.');

                } catch (error) {
                    console.error('Erreur lors de l\'envoi de l\'image:', error);
                    Alert.alert('Erreur', 'Impossible d\'envoyer l\'image. Veuillez réessayer.');
                }
            }
        });
    }

  const displayInput = () => {
    setInput(styles.input)
    setName(styles.hiddenProfileModifyImage)
    setNameInput(styles.profileModifyImage)
    setNameLabel(styles.hiddenfield)
  }

  const hideInput = () => {

    // Modification du nom dans la bdd ici

    setInput(styles.hiddenfield)
    setName(styles.profileModifyImage)
    setNameInput(styles.hiddenProfileModifyImage)
    setNameLabel(styles.text)
  }

  function updateInputValue () {
    console.log(inputName.value)
    setNom(inputName.value)
  }

  const toggleSwitch = () => {
    setNotif(previousState => !previousState);
    // Ajout du bouleen dans la bdd
}

const getGames = async () => {
    try {
      const response = await axios.get('https://132d-92-174-83-81.ngrok-free.app/game'); // mettre le filtre favoris ici
      setGames(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  const getStudios = async () => {
    try {
      const response = await axios.get('https://132d-92-174-83-81.ngrok-free.app/studio');
      setStudios(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  const getStudioGames = async () => {
    // Récupérer les jeux faits par le studio
  };

  const test = () => {
    console.log("test")
  }


  useEffect(() => {
    if (user.role == "STUDIO") {
        getStudioGames();
    }
    else {
        getGames();
        getStudios();
    }
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView style={styles.addMargin}>
            <Text style={styles.name}>{nom}</Text>
            <View style={styles.switchNotif}>
                <Text style={styles.text}>Notifications</Text>
                <Switch trackColor={{false: '#767577', true: 'lightgreen'}}
                onValueChange={toggleSwitch}
                value={notif}></Switch>
            </View>
            <Text style={styles.text}>Membre depuis {date}</Text>
            {user.role == "STUDIO" &&  // on affiche les modifications d'un studio si il s'agit bien d'un studio
            <><View style={styles.alignmentStudioImage}>
                <Image source={require(image)} style={styles.studioImage}></Image>
                <TouchableOpacity style={styles.addImage} title="Insertion d'image" onPress={handleUploadPhoto} ><Image style={styles.addImage} source={require('./../components/images/send.png')}></Image></TouchableOpacity>
            </View>
            <Text style={[styles.labelInput, styles.space]}>URL X</Text>
            <TextInput style={styles.inputStudio} defaultValue={x}></TextInput>
            <Text style={[styles.labelInput, styles.space]}>URL Facebook</Text>
            <TextInput style={styles.inputStudio} defaultValue={facebook}></TextInput>
            <Text style={[styles.labelInput, styles.space]}>URL Instagram</Text>
            <TextInput style={styles.inputStudio} defaultValue={instagram}></TextInput>
            <Text style={[styles.labelInput, styles.space]}>URL Youtube</Text>
            <TextInput style={styles.inputStudio} defaultValue={youtube}></TextInput>
            <Text style={[styles.labelInput, styles.space]}>Description</Text>
            <View style={styles.addDescription}>
                <TextInput style={styles.multiline} defaultValue={description} multiline></TextInput>
                <TouchableOpacity style={styles.profileSendButton}><Image style={styles.profileSendButtonImage} source={require("./../components/images/send.png")}></Image></TouchableOpacity>
            </View>
            <View>
                <Text style={[styles.title, styles.space]}>Mes jeux</Text> 
                <View>
                    <FlatList
                        horizontal
                        data={[
                            { id: 1, title: "Spell Swap", studio: "Teagher Studio", image: require('./../components/images/spellswapthumbnail.jpg') },
                            { id: 2, title: "Nom du jeu 2", studio: "Studio 2", image: require('./../components/images/spellswapthumbnail.jpg') },
                            { id: 3, title: "Nom du jeu 3", studio: "Studio 3", image: require('./../components/images/spellswapthumbnail.jpg') }
                        ]}
                        renderItem={({ item }) => (
                            <View>
                            {item.id === 1 ? (
                                <View style={styles.addCard}>
                                    <TouchableOpacity onPress={() => {navigation.navigate('Ajout Jeu'); }} style={styles.gameCard}>
                                        <Image source={require("./../components/images/add.png")} style={styles.imageAddCard} />
                                        <Text style={styles.textAddCard}>Nouveau jeu</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Ajout Jeu', { game: item }); }} style={styles.gameCard}>
                                        <Image style={styles.imageCard} source={item.image} />
                                        <Text style={styles.titleCard}>{item.title}</Text>
                                        <Text style={styles.textCard} numberOfLines={2}>{item.studio}</Text>
                                        <View style={styles.line}>
                                        <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')} />
                                        <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ): (
                                <TouchableOpacity onPress={() => { navigation.navigate('Ajout Jeu', { game: item }); }} style={styles.gameCard}>
                                    <Image style={styles.imageCard} source={item.image} />
                                    <Text style={styles.titleCard}>{item.title}</Text>
                                    <Text style={styles.textCard} numberOfLines={2}>{item.studio}</Text>
                                    <View style={styles.line}>
                                    <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')} />
                                    <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')} />
                                    </View>
                                </TouchableOpacity>
                            )}
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                        ListFooterComponent={<View style={{ marginRight: 20 }} />}
                    />
                </View>
            </View>
            </>
            }
            {user.role == "USER" && 
            <>
                <GameCarrousel title="Mes jeux favoris" games={games}></GameCarrousel>
                <StudioCarrousel title="Mes studios favoris" studios={studios}></StudioCarrousel>
                <View>
                    <Text style={styles.title}>Mes tags</Text> 
                </View>
            </>
            }
        </ScrollView>
    </SafeAreaView>
);
}

export default Profile;