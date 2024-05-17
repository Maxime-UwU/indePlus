import React, { useEffect } from 'react';
import { SafeAreaView, Platform, PermissionsAndroid, PermissionStatus } from 'react-native';
import Routes from './Routes'; 
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {

  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
          );
        }
      } catch (err) {
        console.warn(err);
      }
    };

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
