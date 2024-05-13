import styles from './../components/styles/style';
import StudioCarrousel from '../components/templates/StudioCarrousel';
import GameCarrousel from '../components/templates/GameCarrousel';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native';


const DetailsJeu = () => {
 

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView nestedScrollEnabled>
        
        <GameCarrousel games={[
        { id: 1, title: "Spell Swap", studio: "Teagher Studio", image: require('./../components/images/spellswapthumbnail.jpg') },
        { id: 2, title: "Nom du jeu 2", studio: "Studio 2", image: require('./../components/images/spellswapthumbnail.jpg') },
        { id: 3, title: "Nom du jeu 3", studio: "Studio 3", image: require('./../components/images/spellswapthumbnail.jpg') }
        ]} title="Vous aimerez peut-être →" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsJeu;