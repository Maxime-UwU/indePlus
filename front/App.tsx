import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Platform,
  PermissionsAndroid,
  PermissionStatus,
  Alert,
} from 'react-native';
import Routes from './Routes';
import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import ip from './Ip';
import notifee, { AndroidImportance } from '@notifee/react-native';

const App: React.FC = () => {

  // async function createNotificationChannel() {
  //   await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //     importance: AndroidImportance.HIGH,
  //   });
  // }

  // async function onMessageReceived(message: any) {
  //   // Affichez une alerte ou traitez le message reçu
  //   Alert.alert('A new FCM message arrived!', JSON.stringify(message));
  // }

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

  useEffect(() => {

    // createNotificationChannel();
    
    // const unsubscribe = messaging().onMessage(onMessageReceived);

    // return unsubscribe;

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
    requestNotificationPermission();
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
