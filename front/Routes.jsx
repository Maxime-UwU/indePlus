import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};

export default Routes;