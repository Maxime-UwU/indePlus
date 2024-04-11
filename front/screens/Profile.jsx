import React from 'react';
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

const Profile = () => {
  var conectedUser = "studio"
  var image = "./../images/teagherStudio.jpg";
  var nom = ""
  var description = ""
  var x = ""
  var facebook = ""
  var instagram = ""
  var youtube = ""

  const handleUploadPhoto = () => {

  }

  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView>
            <View style={styles.line}>
                <Text>Nom du profil</Text>
                <TextInput value={nom} style={styles.hiddenfield}></TextInput>
                <TouchableOpacity onPress={""}>
                    <Image source={require("./../images/modify.png")}></Image>
                </TouchableOpacity>
            </View>
            <Text>Membre depuis date.time</Text>
            <View style={styles.line}>
                <Pressable style={styles.addImage} title="Insertion d'image" onPress={handleUploadPhoto} />
                <Image source={require(image)}></Image>
            </View>
            <Text style={styles.title}>Description</Text>
            <TextInput style={styles.multiline} value={description} multiline></TextInput>
            <TouchableOpacity style={styles.sendButton}><Image source={require("./../images/send.png")}></Image></TouchableOpacity>
            <TextInput value={x}></TextInput>
            <TextInput value={facebook}></TextInput>
            <TextInput value={instagram}></TextInput>
            <TextInput value={youtube}></TextInput>
            <Text style={styles.title}>Mes jeux</Text>
            <FlatList horizontal></FlatList>
        </ScrollView>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({

});

export default Profile;