/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';

import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
