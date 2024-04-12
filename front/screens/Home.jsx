import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        style={styles.backgroundStyle} nestedScrollEnabled>
        <View  style={styles.fullPage}>
          <View>
            <Text style={styles.title}>Les nouveaux jeux →</Text> 
            <View>
              <FlatList
                horizontal
                data={[
                  { id: 1, title: "Spell Swap", studio: "Teagher Studio", image: require('./../components/images/spellswapthumbnail.jpg') },
                  { id: 2, title: "Nom du jeu 2", studio: "Studio 2", image: require('./../components/images/spellswapthumbnail.jpg') },
                  { id: 3, title: "Nom du jeu 3", studio: "Studio 3", image: require('./../components/images/spellswapthumbnail.jpg') }
                ]}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={""} style={styles.gameCard}>
                    <Image style={styles.imageCard} source={item.image}></Image>
                    <Text style={styles.titleCard}>{item.title}</Text>
                    <Text style={styles.textCard}>{item.studio}</Text>
                    <View style={styles.line}>
                      <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')}></Image>
                      <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')}></Image>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={<View style={{ marginRight: 20 }} />}
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>Des studios partenaires →</Text> 
              <FlatList
                horizontal
                data={[
                  { id: 1, title: "Nom du studio", description: "description", image: require('./../components/images/teagherStudio.jpg') },
                  { id: 2, title: "Nom du studio 2", description: "description", image: require('./../components/images/teagherStudio.jpg') },
                  { id: 3, title: "Nom du studio 3", description: "decription", image: require('./../components/images/teagherStudio.jpg') }
                ]}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={""} style={styles.studioCard}>
                    <Image style={styles.imageCard} source={item.image}></Image>
                    <Text style={styles.titleCard}>{item.title}</Text>
                    <Text style={styles.textCard}>{item.description}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={<View style={{ marginRight: 20 }} />}
              />
          </View>
          <View>
            <Text style={styles.title}>Vous aimerez peut-être →</Text> 
            <View style={styles.line}>
              <FlatList
                horizontal
                data={[
                  { id: 1, title: "Spell Swap", studio: "Teagher Studio", image: require('./../components/images/spellswapthumbnail.jpg') },
                  { id: 2, title: "Nom du jeu 2", studio: "Studio 2", image: require('./../components/images/spellswapthumbnail.jpg') },
                  { id: 3, title: "Nom du jeu 3", studio: "Studio 3", image: require('./../components/images/spellswapthumbnail.jpg') }
                ]}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={""} style={styles.gameCard}>
                    <Image style={styles.imageCard} source={item.image}></Image>
                    <Text style={styles.titleCard}>{item.title}</Text>
                    <Text style={styles.textCard}>{item.studio}</Text>
                    <View style={styles.line}>
                      <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')}></Image>
                      <Image style={styles.logoCard} source={require('./../components/images/windows-icon.png')}></Image>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={<View style={{ marginRight: 20 }} />}
              />
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
  carrousel: {
    display: 'flex',
    flexDirection: 'row'
  },
  gameCard: {
    width: 150,
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
    backgroundColor: '#4D2672',
  },
  studioCard: {
    width: 150,
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