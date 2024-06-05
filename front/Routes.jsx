import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
// import Register from './screens/Register';
import SplashScreen from './screens/SplashScreen';
import SplashScreen2 from './screens/SplashScreen2';
import ListGames from './screens/ListGames';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='ListGames'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Register" component={Register} /> */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
            <Stack.Screen name="ListGames" component={ListGames} />
        </Stack.Navigator>
    );
};

export default Routes;