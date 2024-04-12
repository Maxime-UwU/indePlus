import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, Alert, Pressable, TouchableOpacity } from 'react-native';
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

      console.log('Success:', response.data);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error:', 'wrong');
      Alert.alert('Erreur', 'Identifiant ou mot de passe incorrect');
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#4D2672', flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps={'handled'} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./../components/images/logo-transparent-svg.svg')} style={{ width: 100, height: 100, marginBottom: 20 }} />
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} style={styles.input} />
        <Pressable onPress={handleLogin} style={[styles.button, { backgroundColor: '#FAEBD7', marginBottom: 10 }]}>
        <Text style={styles.text}>Connect</Text> 
        </Pressable>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ backgroundColor: '#FAEBD7', padding: 10, borderRadius: 20, marginBottom: 10 }}>Not yet registered? Click here!</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FAEBD7',
    width: 200,
  },
});

export default Login;

