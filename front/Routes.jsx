import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
// import Register from './screens/Register';
import SplashScreen from './screens/SplashScreen';
import SplashScreen2 from './screens/SplashScreen2';
import Profile from './screens/Profile';
import DetailsJeu from './screens/DetailsJeu';
import Favorite from './components/templates/Favorite';
import ListGames from './screens/ListGames';
import DetailsStudio from './screens/DetailsStudio';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>

            {/* Home */}

            <Stack.Screen name="Home" component={Home} options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff'
            }}
            />

            {/* Auth */}

            <Stack.Screen name="Login" component={Login} options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff'
            }}/>
            {/* <Stack.Screen name="Register" component={Register} options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff'
            }}/> */}

            {/* Splash Screens */}

            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff'
            }}/>

            <Stack.Screen name="SplashScreen2" component={SplashScreen2} options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff'
            }}/>

            {/* Details Jeu */}

            <Stack.Screen name="DetailsJeu" component={DetailsJeu} headerBackVisible options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <Favorite></Favorite>
            ),
            }}/>

            {/* Profile */}

            <Stack.Screen name="Profile" component={Profile} headerBackVisible options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff',
            }}/>

            {/* ListGames */}

            <Stack.Screen name="ListGames" component={ListGames} headerBackVisible options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff',
            }}/>

            {/* Details Studio*/}
            <Stack.Screen name="DetailsStudio" component={DetailsStudio} headerBackVisible options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <Favorite></Favorite>
            ),
            }}/>
        </Stack.Navigator>
    );
};

export default Routes;