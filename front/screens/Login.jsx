import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

const Login = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#4D2672', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./../components/images/logo-transparent-svg.svg')} style={{ width: 100, height: 100, marginBottom: 20 }} />
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
        <Button title="Connect" onPress={() => {}} color="#FAEBD7" />
        <Text style={{ marginTop: 10, color: '#FAEBD7'}}>Not yet registered? Click here!</Text>
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

