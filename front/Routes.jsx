import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Home" component={Home} headerBackVisible options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff'
            }}/>
            <Stack.Screen name="Login" component={Login} headerBackVisible options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff'
            }}/>
            <Stack.Screen name="Register" component={Register} headerBackVisible options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff'
            }}/>
        </Stack.Navigator>
    );
};

export default Routes;