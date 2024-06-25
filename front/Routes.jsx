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
import DetailsStudio from './screens/DetailsStudio';
import ListGames from './screens/ListGames';
import AddGame from './screens/AddGame';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Connexion">
      {/* Home */}

      <Stack.Screen
        name="Accueil"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#4D2672',
          },
          headerTintColor: '#fff',
        }}
      />

      {/* Auth */}

      <Stack.Screen
        name="Connexion"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: '#4D2672',
          },
          headerTintColor: '#fff',
        }}
      />
      {/* <Stack.Screen name="Inscription" component={Register} options={{
            headerStyle: {
                backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff'
            }}/> */}

      {/* Splash Screens */}

      <Stack.Screen
        name="Bienvenue"
        component={SplashScreen}
        options={{
          headerStyle: {
            backgroundColor: '#4D2672',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Vos Tags"
        component={SplashScreen2}
        options={{
          headerStyle: {
            backgroundColor: '#4D2672',
          },
          headerTintColor: '#fff',
        }}
      />

      {/* Details Jeu */}

        <Stack.Screen
          name="Details Jeu"
          component={DetailsJeu}
          options={({route}) => ({
            headerStyle: {
              backgroundColor: '#4D2672',
            },
            headerTintColor: '#fff',
            headerRight: () => <Favorite id={route.params?.id} />, // Vérifiez que route.params est défini
          })}
        />

      {/* Profile */}

      <Stack.Screen
        name="Profil"
        component={Profile}
        headerBackVisible
        options={{
          headerStyle: {
            backgroundColor: '#4D2672',
          },
          headerTintColor: '#fff',
        }}
      />

      {/* ListGames */}

      <Stack.Screen
        name="Liste Jeux"
        component={ListGames}
        headerBackVisible
        options={{
          headerStyle: {
            backgroundColor: '#4D2672',
          },
          headerTintColor: '#fff',
        }}
      />

      {/* AddGame */}

      <Stack.Screen
        name="Ajout Jeu"
        component={AddGame}
        headerBackVisible
        options={{
          headerStyle: {
            backgroundColor: '#4D2672',
          },
          headerTintColor: '#fff',
        }}
      />

      {/* Details Studio*/}

      <Stack.Screen
        name="Details Studio"
        component={DetailsStudio}
        headerBackVisible
        options={{
          headerStyle: {
            backgroundColor: '#4D2672',
          },
          headerTintColor: '#fff',
          headerRight: () => <Favorite></Favorite>,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
