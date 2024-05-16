import React, { useEffect } from 'react';
import { SafeAreaView, Platform, PermissionsAndroid, PermissionStatus } from 'react-native';
import Routes from './Routes'; 
import { NavigationContainer } from '@react-navigation/native';

const PERMISSION_REQUEST_CODE = 123;

const App: React.FC = () => {

  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const permissions: {[key: string]: PermissionStatus} = {
            'android.permission.INTERNET': PermissionsAndroid.RESULTS.GRANTED,
            'android.permission.RECEIVE_BOOT_COMPLETED': PermissionsAndroid.RESULTS.GRANTED,
            'android.permission.VIBRATE': PermissionsAndroid.RESULTS.GRANTED
          };
          const granted = await PermissionsAndroid.requestMultiple(Object.keys(permissions));

          for (const permission in granted) {
            if (granted[permission] !== PermissionsAndroid.RESULTS.GRANTED) {
              console.log(`Permission ${permission} refusée`);
            }
          }
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
