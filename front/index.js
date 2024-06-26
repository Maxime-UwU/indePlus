/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import './push-notification.config';

messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', remoteMessage);
    // Gérer la notification ici (afficher une alerte, etc.)

    PushNotification.localNotification({
        title: "first notif",
        message: "this is our first notif",
    });
});

AppRegistry.registerComponent(appName, () => App);
