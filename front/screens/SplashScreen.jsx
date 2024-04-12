import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <Image source={require("./../components/images/logo-transparent-png.png")}></Image>
        <View>
            <Text>Quel genre de jeu vous intéresse?</Text>
            <TextInput></TextInput>
            <Button><Text>Go!</Text></Button>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default Home;