import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        style={styles.backgroundStyle}>
        <View >
          <Text onPress="">Les nouveaux jeux →</Text> 
          <View style={styles.line}>
            <ScrollView horizontal="true">
              <View onPress="" style={styles.gameCard}>
                <Image style={styles.gameCardImage} source={require('./../images/spellswapthumbnail.jpg')}></Image>
                <Text>Nom du jeu</Text>
                <Text>Nom du studio</Text>
                <View style={styles.line}>
                  <Image></Image>
                  <Image></Image>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View >
          <Text onPress="">Des studios partenaires →</Text> 
          <View style={styles.line}>
            <ScrollView horizontal="true">
              <View onPress="" style={styles.studioCard}>
                <Image></Image>
                <Text>Nom du studio</Text>
                <Text>Description</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundStyle: {
    backgroundColor: "#4D2672"
  },
  line: {
    display: 'flex',
    flexDirection: 'row'
  },
  gameCard: {
    width: '50%',
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20
  },
  gameCardImage: {
    width: 'auto',
    height: 100,
    resizeMode: 'stretched',
    borderRadius: 10
  }
});

export default Home;
