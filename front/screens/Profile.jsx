import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable
} from 'react-native';
import styles from './../components/styles/style';

const Profile = () => {
  var conectedUser = "studio"
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

  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView>
            <View style={styles.line}>
                <Text style={nameLabel}>{nom}</Text>
                <TouchableOpacity onPress={displayInput}>
                    <Image style={name} source={require("./../components/images/modify.png")}></Image>
                </TouchableOpacity>
                <TextInput defaultValue={nom} style={input} onChangeText={newName => setNom(newName)}></TextInput>
                <TouchableOpacity onPress={hideInput}>
                    <Image style={nameInput} source={require("./../components/images/send.png")}></Image>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Membre depuis date.time</Text>
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
            <Text style={styles.title}>Mes jeux</Text>
            <FlatList horizontal></FlatList>
        </ScrollView>
    </SafeAreaView>
);
}

export default Profile;