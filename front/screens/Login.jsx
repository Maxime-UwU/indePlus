import React, {useState} from 'react';
import styles from './../components/styles/style';
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import ip from '../Ip';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.57.33.155:8000/login', {
        username,
        password,
      });
  
      await AsyncStorage.setItem('jwtToken', response.data.token);
      console.log('jwtToken', response.data.token);
      navigation.navigate('Bienvenue');
    } catch (err) {
      console.error('Error during login:', err); // Logguez l'erreur de manière plus détaillée
      console.log('Une erreur est survenue lors de la connexion.'); // Utilisez setError pour gérer l'erreur dans votre composant
    }
  };

  const test = async () => {
    console.log("hi");
  };
  

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.formAuth}>
          <Image source={require('./../components/images/logo-transparent-png.png')} style={styles.logo} />
          <View>
            <TextInput placeholder="Nom" placeholderTextColor="#4D2673" value={username} onChangeText={setUsername} style={styles.input} />
            <TextInput placeholder="Mot de passe" placeholderTextColor="#4D2673" value={password} onChangeText={setPassword} secureTextEntry={true} style={styles.input} />
            <Pressable onPress={handleLogin} style={styles.button}> 
            <Text style={styles.beigeButton}>Se Connecter</Text> 
            </Pressable>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Inscription')}> */}
            <Text style={styles.loginRedirection}>Pas encore inscrit? Cliquez ici!</Text>
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;