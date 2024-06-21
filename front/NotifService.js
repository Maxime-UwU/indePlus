import PushNotification, { Importance } from 'react-native-push-notification';

export default class NotifService {
  constructor(onRegister, onNotification) {
    this.lastId = 0;

    // paramétrages global des notifications
    PushNotification.configure({
      onRegister: onRegister,
      onNotification: onNotification,
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    });

    PushNotification.getApplicationIconBadgeNumber((number) => {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });
  }

  // Création d'un channel pour pouvoir récupérer les notifications
  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: "1", 
        channelName: `test`, 
        channelDescription: "A default channel", 
        importance: Importance.HIGH, 
        vibrate: true, 
      }
    );
  }

  // Paramétrage de la notification
  localNotif(message) {
    this.lastId++;
    PushNotification.localNotification({
      channelId: '1',
      autoCancel: true,
      largeIcon: 'ic_launcher', 
      smallIcon: 'ic_notification', 
      bigText: message, 
      color: 'red', 
      vibrate: false,
      invokeApp: true, 

      id: this.lastId, 
      title: 'News jeux vidéo indés', 
      message: message, 
      userInfo: { screen: 'home' }, 
      playSound: true,
      soundName: 'default', 
      number: 10, 
    });
  }
}
