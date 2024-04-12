import React, { useState } from 'react';
import styles from './../components/styles/style'
import { View, Text, Image, TextInput, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Register = () => {
  const navigation = useNavigation(); 

  const [userType, setUserType] = useState('Joueur');

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.formAuth}>
        <Image source={require('./../components/images/logo-transparent-png.png')} style={styles.logo} />
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
            <TextInput placeholder="Username" placeholderTextColor="#4D2673" style={styles.input} />
            <TextInput placeholder="Password" placeholderTextColor="#4D2673" secureTextEntry={true} style={styles.input} />
            <TextInput placeholder="Confirm Password" placeholderTextColor="#4D2673" style={styles.input} />
          </View>
        )}
        {userType === 'Studio' && (
          <View>
            <TextInput placeholder="Studio Name" style={{ marginBottom: 10, padding: 5, borderRadius: 5, borderWidth: 1, borderColor: '#FAEBD7', width: 200 }} />
          </View>
        )}
        <TouchableOpacity>
          <Text style={styles.beigeButton}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginRedirection}>Already have an account? Click here!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Register;


