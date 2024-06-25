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
import axios from 'axios';
import ip from './Ip';

const App: React.FC = () => {

  async function requestUserPermissionNotif() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        const token = await messaging().getToken();
        console.log('FCM token:', token);
        // return token;
        try {
          const response = await axios.post(ip + '/send-notification', {
            token,
          });
          console.log("hello !");
        } catch (err) {
          console.log("error");
        }

    } else {
        console.log('User declined or has not granted permission');
        return null;
    }
}

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

    // requestUserPermission();
    requestUserPermissionNotif();
    // requestNotificationPermission();
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
