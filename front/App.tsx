import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Platform,
  PermissionsAndroid,
  PermissionStatus,
} from 'react-native';
import Routes from './Routes';
import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

const App: React.FC = () => {
  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          );
        }
      } catch (err) {
        console.warn(err);
      }
    };

    // Demander la permission pour les notifications
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled = 
          authStatus === messaging.AuthorizationStatus.AUTHORIZED || 
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
          console.log('Authorization status:', authStatus);
      }
    }

    // Écouter les messages en arrière-plan
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    requestUserPermission();

    requestNotificationPermission();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
