import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation depuis '@react-navigation/native'

const Register = () => {
  const navigation = useNavigation(); // Initialisez la navigation

  const [userType, setUserType] = useState('Joueur');

  return (
    <View style={{ backgroundColor: '#4D2672', padding: 20, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./../components/images/logo-transparent-svg.svg')} style={{ width: 100, height: 100, marginBottom: 20 }} />
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 20 }}>
        <TouchableOpacity style={{ backgroundColor: '#FAEBD7', padding: 10, borderRadius: 20, marginRight: 10 }} onPress={() => setUserType('Joueur')}>
          <Text>Joueur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#FAEBD7', padding: 10, borderRadius: 20 }} onPress={() => setUserType('Studio')}>
          <Text>Studio</Text>
        </TouchableOpacity>
      </View>
      {userType === 'Joueur' && (
        <View>
          <TextInput placeholder="Username" style={{ marginBottom: 10, padding: 5, borderRadius: 5, borderWidth: 1, borderColor: '#FAEBD7', width: 200 }} />
          <TextInput placeholder="Password" secureTextEntry={true} style={{ marginBottom: 10, padding: 5, borderRadius: 5, borderWidth: 1, borderColor: '#FAEBD7', width: 200 }} />
          <TextInput placeholder="Confirm Password" style={{ marginBottom: 10, padding: 5, borderRadius: 5, borderWidth: 1, borderColor: '#FAEBD7', width: 200 }} />
        </View>
      )}
      {userType === 'Studio' && (
        <View>
          <TextInput placeholder="Studio Name" style={{ marginBottom: 10, padding: 5, borderRadius: 5, borderWidth: 1, borderColor: '#FAEBD7', width: 200 }} />
        </View>
      )}
      <TouchableOpacity style={{ backgroundColor: '#FAEBD7', padding: 10, borderRadius: 20, marginBottom: 10 }}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 10, color: '#FAEBD7' }} onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account? Click here!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;


