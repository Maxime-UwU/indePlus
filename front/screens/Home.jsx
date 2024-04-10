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
        <View  style={styles.fullPage}>
          <View>
            <Text style={styles.title}>Les nouveaux jeux →</Text> 
            <View style={styles.line}>
              <ScrollView horizontal="true">
                <View onPress="" style={styles.gameCard}>
                  <Image style={styles.imageCard} source={require('./../images/spellswapthumbnail.jpg')}></Image>
                  <Text style={styles.titleCard}>Spell Swap</Text>
                  <Text style={styles.textCard}>Teagher studio</Text>
                  <View style={styles.line}>
                    <Image style={styles.logoCard} source={require('./../images/windows-icon.png')}></Image>
                    <Image style={styles.logoCard} source={require('./../images/windows-icon.png')}></Image>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Des studios partenaires →</Text> 
            <View style={styles.line}>
              <ScrollView horizontal="true">
                <View onPress="" style={styles.studioCard}>
                  <Image style={styles.imageCard}  source={require('./../images/teagherStudio.jpg')}></Image>
                  <Text style={styles.titleCard}>Nom du studio</Text>
                  <Text style={styles.textCard}>Description</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Vous aimerez peut-être →</Text> 
            <View style={styles.line}>
              <ScrollView horizontal="true">
                <View onPress="" style={styles.gameCard}>
                  <Image style={styles.imageCard} source={require('./../images/spellswapthumbnail.jpg')}></Image>
                  <Text style={styles.titleCard}>Spell Swap</Text>
                  <Text style={styles.textCard}>Teagher studio</Text>
                  <View style={styles.line}>
                    <Image style={styles.logoCard} source={require('./../images/windows-icon.png')}></Image>
                    <Image style={styles.logoCard} source={require('./../images/windows-icon.png')}></Image>
                  </View>
                </View>
              </ScrollView>
            </View>
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  fullPage: {
    paddingTop: 75,
    paddingBottom: 75
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
  imageCard: {
    width: 'auto',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10
  },
  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  textCard: {
    color: 'white'
  },
  logoCard: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    marginRight: 10,
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 1000,
    // padding: 100,
  },
  studioCard: {
    width: '50%',
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  }
});

export default Home;
