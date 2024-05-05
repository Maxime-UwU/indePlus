import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
// import Register from './screens/Register';
import SplashScreen from './screens/SplashScreen';
import SplashScreen2 from './screens/SplashScreen2';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Register" component={Register} /> */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SplashScreen2" component={SplashScreen2} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Routes;