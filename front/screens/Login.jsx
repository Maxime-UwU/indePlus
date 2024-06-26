import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ip from '../Ip';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './../components/styles/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(ip + '/login', {
        username,
        password,
      });

      await AsyncStorage.setItem('jwtToken', response.data.token);
      console.log('jwtToken', response.data.token);
      AsyncStorage.setItem('jwtToken', response.data.token)
      navigation.navigate('Bienvenue');
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Identifiants incorrects. Veuillez réessayer.');
      } else {
        console.error('Error during login:', err);
        setError('Une erreur est survenue lors de la connexion.');
      }
    }
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
            {error ? <Text style={{ color: 'red', marginTop: 10, maxWidth: 200 }}>{error}</Text> : null}
            <Text style={styles.loginRedirection}>Pas encore inscrit? Cliquez ici!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
