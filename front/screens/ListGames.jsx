import React from 'react';
import styles from './../components/styles/style'
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
      <ScrollView nestedScrollEnabled>
        <View  style={styles.fullPage}>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;