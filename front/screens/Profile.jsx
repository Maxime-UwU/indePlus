import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Switch
} from 'react-native';
import styles from './../components/styles/style';
import GameCarrousel from '../components/templates/GameCarrousel';
import axios from 'axios';

const Profile = () => {
  var conectedUser = "user" // Il faudrait le statut de l'utilisateur ici
  var date = "date.time" // Il faudrait la date d'inscription ici
  var image = "./../images/teagherStudio.jpg";
  var description = ""
  var x = ""
  var facebook = ""
  var instagram = ""
  var youtube = ""

  const [nom, setNom] = useState("Test") // il faudrait qu'il y ait le nom de l'utilisateur par defaut ici
  const [name, setName] = useState(styles.profileModifyImage)
  const [nameInput, setNameInput] = useState(styles.hiddenProfileModifyImage)
  const [nameLabel, setNameLabel] = useState(styles.text)
  const [input, setInput] = useState(styles.hiddenfield)
  const [notif, setNotif] = useState(false); // Il faudrait le booleen notification ici
  

  const handleUploadPhoto = () => {

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
      const response = await axios.get('http://10.57.33.155:8000/game'); // mettre le filtre favoris ici
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
    getGames();
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView style={styles.addMargin}>
            <View style={styles.profileName}>
                <Text style={nameLabel}>{nom}</Text>
                <TouchableOpacity onPress={displayInput}>
                    <Image style={name} source={require("./../components/images/modify.png")}></Image>
                </TouchableOpacity>
                <TextInput defaultValue={nom} style={input} onChangeText={newName => setNom(newName)}></TextInput>
                <TouchableOpacity onPress={hideInput}>
                    <Image style={nameInput} source={require("./../components/images/send.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.switchNotif}>
                <Text style={styles.text}>Notifications</Text>
                <Switch trackColor={{false: '#767577', true: 'lightgreen'}}
                onValueChange={toggleSwitch}
                value={notif}></Switch>
            </View>
            <Text style={styles.text}>Membre depuis {date}</Text>
            {/* <View style={styles.line}>
                <Pressable style={styles.addImage} title="Insertion d'image" onPress={handleUploadPhoto} />
                <Image source={require(image)}></Image>
            </View> */}
            {/* <Text style={styles.title}>Description</Text>
            <TextInput style={styles.multiline} value={description} multiline></TextInput> */}
            {/* <TouchableOpacity style={styles.profileSendButton}><Image style={styles.profileSendButtonImage} source={require("./../components/images/send.png")}></Image></TouchableOpacity> */}
            {/* <TextInput value={x}></TextInput>
            <TextInput value={facebook}></TextInput>
            <TextInput value={instagram}></TextInput>
            <TextInput value={youtube}></TextInput> */}
            <GameCarrousel title="Mes favoris" games={[
            { id: 1, title: "Spell Swap", studio: "Teagher Studio", image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 2, title: "Nom du jeu 2", studio: "Studio 2", image: require('./../components/images/spellswapthumbnail.jpg') },
            { id: 3, title: "Nom du jeu 3", studio: "Studio 3", image: require('./../components/images/spellswapthumbnail.jpg') }
          ]}></GameCarrousel>
          <View>
            <Text style={styles.title}>Mes tags</Text> 
          </View>
        </ScrollView>
    </SafeAreaView>
);
}

export default Profile;