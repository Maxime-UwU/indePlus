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

const Profile = () => {
  var conectedUser = "user" // Il faudrait le statut de l'utilisateur ici
  var date = "date.time" // Il faudrait la date d'inscription ici
  var image = "./../images/teagherStudio.jpg";
  var description = ""
  var x = ""
  var facebook = ""
  var instagram = ""
  var youtube = ""
  var data = [ // Récupérer les tags ici
    {
      id: '1',
      name: 'RPG',
    },
    {
      id: '2',
      name: 'FPS',
    },
    {
      id: '3',
      name: 'GESTION',
    },
    {
        id: '4',
        name: 'RPG',
      },
      {
        id: '5',
        name: 'FPS',
      },
      {
        id: '6',
        name: 'GESTION',
      },
      {
        id: '7',
        name: 'RPG',
      },
      {
        id: '8',
        name: 'FPS',
      },
      {
        id: '9',
        name: 'GESTION',
      },
      {
        id: '10',
        name: 'RPG',
      },
      {
        id: '11',
        name: 'FPS',
      },
      {
        id: '12',
        name: 'GESTION',
      },
      {
        id: '13',
        name: 'RPG',
      },
      {
        id: '14',
        name: 'FPS',
      },
      {
        id: '15',
        name: 'GESTION',
      },
      {
        id: '16',
        name: 'RPG',
      },
      {
        id: '17',
        name: 'FPS',
      },
      {
        id: '18',
        name: 'GESTION',
      },
  ];

  const [nom, setNom] = useState("Test") // il faudrait qu'il y ait le nom de l'utilisateur par defaut ici
  const [name, setName] = useState(styles.profileModifyImage)
  const [nameInput, setNameInput] = useState(styles.hiddenProfileModifyImage)
  const [nameLabel, setNameLabel] = useState(styles.text)
  const [input, setInput] = useState(styles.hiddenfield)
  const [notif, setNotif] = useState(false); // Il faudrait le booleen notification ici
  const [games, setGames] = useState(null);
  const [studios, setStudios] = useState(null);
  const [selectedId, setSelectedId] = useState();

  

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

  useEffect(() => {
    getGames();
    getStudios();
  }, []);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
        <TouchableOpacity onPress={addTag(item.id)} style={styles.tag}>
        <Text style={styles.tagName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const addTag = (id) => {
    setSelectedId(id)
    // console.log(id)
  }

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
            <GameCarrousel title="Mes jeux favoris" games={games}></GameCarrousel>
            <StudioCarrousel title="Mes studios favoris" studios={studios}></StudioCarrousel>
          <View>
            <Text style={styles.title}>Mes tags</Text> 
            <FlatList data={data} renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={3}>
                
            </FlatList>
          </View>
        </ScrollView>
    </SafeAreaView>
);
}

export default Profile;