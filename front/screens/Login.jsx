import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, Alert, Pressable } from 'react-native';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.57.33.155:8000/login', {
        username,
        password,
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', 'wrong');
      Alert.alert('Erreur', 'Identifiant ou mot de passe incorrect');
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#4D2672', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} keyboardShouldPersistTaps={'handled'}>
        <Image source={require('./../components/images/logo-transparent-svg.svg')} style={{ width: 100, height: 100, marginBottom: 20 }} />
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} style={styles.input} />
        <Pressable onPress={handleLogin} style={styles.button}> 
        <Text style={styles.text}>Connect</Text> 
        </Pressable>
        <Text style={{ marginTop: 10, color: '#FAEBD7'}}>Not yet registered? Click here!</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 25,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    width: '75%',
    borderColor: '#FAEBD7',
    backgroundColor: '#D9D9D9',
  },

  button: {
    backgroundColor: '#FAEBD7',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
  },
  text: {
    color: '#4D2672',
    fontWeight: 'bold'
  }
});

export default Login;

