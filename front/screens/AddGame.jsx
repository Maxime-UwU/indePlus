import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './../components/styles/style';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';

const AddGame = ({ route }) => {
    const navigation = useNavigation();
    var game = {game: {title: "", summary: "", tags: [], date: "", url: "", platforms: [], image: ""}}

    const [summary, setSummary] = useState(game.summary)
    const [name, setName] = useState("")
    const [selectedTags, setSelectedTags] = useState(game.tags);
    const [releaseDate, setReleaseDate] = useState(game.date);
    const [downloadUrl, setDownloadUrl] = useState(game.url);
    const [selectedPlatforms, setSelectedPlatforms] = useState(game.platforms);
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        if (route.params) {
            game = route.params;
        }
        setName(game.game.title);
    }, []);

    const getImageSource = () => {
        if (imageUri) {
            return { uri: imageUri };
        // } else if (game.image) {
        //     return { uri: game.image };
        } else {
            return require('./../components/images/logo-transparent-png.png');
        }
    };

    const tags = [ // A remplacer par une récupération des tags
        { name: 'Action', idGenre: 1 },
        { name: 'Adventure', idGenre: 2 },
        { name: 'RPG', idGenre: 3 },
        { name: 'Simulation', idGenre: 4 },
        { name: 'Strategy', idGenre: 5 },
        { name: 'Sports', idGenre: 6 },
        { name: 'Racing', idGenre: 7 },
        { name: 'Puzzle', idGenre: 8 },
        { name: 'Shooter', idGenre: 9 },
        { name: 'Fighting', idGenre: 10 },
        { name: 'Platformer', idGenre: 11 },
        { name: 'Survival', idGenre: 12 },
        { name: 'Horror', idGenre: 13 },
        { name: 'Stealth', idGenre: 14 },
        { name: 'MMORPG', idGenre: 15 },
        { name: 'MOBA', idGenre: 16 },
        { name: 'Idle', idGenre: 17 },
        { name: 'Sandbox', idGenre: 18 },
        { name: 'Music', idGenre: 19 },
        { name: 'Trivia', idGenre: 20 }
    ]
    const platforms = [
        { id: 1, name: "Switch" },
        { id: 2, name: "PC" },
        { id: 3, name: "PlayStation" },
        { id: 4, name: "Xbox" },
        { id: 5, name: "Nintendo 3DS" },
        { id: 6, name: "PlayStation Vita" },
        { id: 7, name: "Wii U" },
        { id: 8, name: "PlayStation 2" },
        { id: 9, name: "PlayStation 3" },
        { id: 10, name: "PlayStation 4" },
        { id: 11, name: "PlayStation 5" },
        { id: 12, name: "Xbox 360" },
        { id: 13, name: "Xbox One" },
        { id: 14, name: "Xbox Series X" },
        { id: 15, name: "GameCube" },
        { id: 16, name: "Dreamcast" },
        { id: 17, name: "Game Boy" },
        { id: 18, name: "Game Boy Advance" },
        { id: 19, name: "Sega Genesis" },
        { id: 20, name: "Atari 2600" }
    ];

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

    const addGame = async () => {
        // console.log(name, selectedTags, summary, releaseDate, downloadUrl, selectedPlatforms)
        // ajout du jeu
        navigation.navigate('Profil');
    };

    return (
        <SafeAreaView style={[styles.backgroundStyle, styles.fullPage]}>
            <ScrollView>
                <View style={[styles.addGameForm, styles.addMargin]}>
                    <Text style={[styles.labelInput, styles.space]}>Nom</Text>
                    <TextInput defaultValue={name} style={styles.inputStudio} onChangeText={newName => setName(newName)}></TextInput>
                    <View style={styles.alignmentGameImage}>
                        <Image source={getImageSource()} style={styles.studioImage} />
                        <TouchableOpacity style={styles.addImage} title="Insertion d'image" onPress={handleUploadPhoto} ><Image style={styles.addImage} source={require('./../components/images/modify.png')}></Image></TouchableOpacity>
                    </View>
                    <SectionedMultiSelect
                        items={tags}
                        IconRenderer={Icon}
                        uniqueKey="idGenre"
                        selectText="Tags du jeu"
                        selectedText="choisi(s)"
                        modalAnimationType="slide"
                        confirmText="Ajouter les tags"
                        onSelectedItemsChange={setSelectedTags}
                        selectedItems={selectedTags}
                        colors={{ primary: '#4D2672' }}
                        styles={{
                            selectToggle: styles.selectToggle,
                            chipContainer: styles.multiSelectChipContainer,
                            chipText: styles.multiSelectChipText,
                        }}
                        showDropDowns={true}
                        expandDropDowns={true}
                        alwaysShowSelectText={true}
                    />
                    <Text style={[styles.labelInput, styles.space]}>Description</Text>
                    <TextInput defaultValue={summary} style={styles.inputStudio} onChangeText={newSummary => setSummary(newSummary)} multiline></TextInput>
                    <Text style={[styles.labelInput, styles.space]}>Date de sortie</Text>
                    <TextInput defaultValue={releaseDate} style={styles.inputStudio} onChangeText={newReleaseDate => setReleaseDate(newReleaseDate)}></TextInput>
                    <Text style={[styles.labelInput, styles.space]}>Lien téléchargement</Text>
                    <TextInput style={styles.inputStudio} defaultValue={downloadUrl} onChangeText={newDownloadUrl => setDownloadUrl(newDownloadUrl)}></TextInput>
                    <SectionedMultiSelect
                        items={platforms}
                        IconRenderer={Icon}
                        uniqueKey="id"
                        selectText="Plateformes"
                        selectedText="choisie(s)"
                        modalAnimationType="slide"
                        confirmText="Ajouter les plateformes"
                        onSelectedItemsChange={setSelectedPlatforms}
                        selectedItems={selectedPlatforms}
                        colors={{ primary: '#4D2672' }}
                        styles={{
                            selectToggle: styles.selectToggle,
                            chipContainer: styles.multiSelectChipContainer,
                            chipText: styles.multiSelectChipText,
                        }}
                        showDropDowns={true}
                        expandDropDowns={true}
                        alwaysShowSelectText={true}
                    />
                    <TouchableOpacity onPress={addGame}>
                        <Text style={styles.beigeButton}>Ajouter le jeu</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AddGame;