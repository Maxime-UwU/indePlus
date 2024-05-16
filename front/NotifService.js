import PushNotification, { Importance } from 'react-native-push-notification';

export default class NotifService {
  constructor(onRegister, onNotification) {
    this.lastId = 0;

    this.createDefaultChannels();

    PushNotification.configure({
      onRegister: onRegister,
      onNotification: onNotification,
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    });

    // Clear badge number at start
    PushNotification.getApplicationIconBadgeNumber((number) => {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });

    PushNotification.getChannels((channels) => {
      console.log(channels);
    });
  }

  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: "1", 
        channelName: `test`, 
        channelDescription: "A default channel", 
        importance: Importance.HIGH, 
        vibrate: true, 
      },
      (created) => console.log(`createChannel 1 returned '${created}'`)
    );
  }

  localNotif() {
    this.lastId++;
    console.log("Sending local notification with ID:", this.lastId);
    PushNotification.localNotification({
      channelId: '1',
      autoCancel: true,
      largeIcon: 'ic_launcher', 
      smallIcon: 'ic_notification', 
      bigText: 'My big text that will be shown when notification is expanded', 
      subText: 'This is a subText', 
      color: 'red', 
      vibrate: true, 
      vibration: 300, 
      actions: ['Yes', 'No'], 
      invokeApp: true, 

      id: this.lastId, 
      title: 'Local Notification', 
      message: 'My Notification Message', 
      userInfo: { screen: 'home' }, 
      playSound: true,
      soundName: 'default', 
      number: 10, 
    });
  }
}
