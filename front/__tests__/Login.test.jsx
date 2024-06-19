import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from 'C:\Users\User\GitHub\indePlus\indePlus\front\screens\Login.jsx'; // Assurez-vous que le chemin est correct
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
}));

const mock = new MockAdapter(axios);

describe('Login Screen', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );
    expect(getByPlaceholderText('Nom')).toBeTruthy();
    expect(getByPlaceholderText('Mot de passe')).toBeTruthy();
    expect(getByText('Se Connecter')).toBeTruthy();
  });

  it('updates username and password states on input change', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );
    const usernameInput = getByPlaceholderText('Nom');
    const passwordInput = getByPlaceholderText('Mot de passe');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'testpass');

    expect(usernameInput.props.value).toBe('testuser');
    expect(passwordInput.props.value).toBe('testpass');
  });

  it('calls handleLogin on button press and stores token', async () => {
    mock.onPost('http://10.57.33.155:8000/login').reply(200, { token: 'testtoken' });

    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );
    const usernameInput = getByPlaceholderText('Nom');
    const passwordInput = getByPlaceholderText('Mot de passe');
    const loginButton = getByText('Se Connecter');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'testpass');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('jwtToken', 'testtoken');
    });
  });

  it('displays an error message on login failure', async () => {
    mock.onPost('http://10.57.33.155:8000/login').reply(400, { message: 'Invalid credentials' });

    const { getByPlaceholderText, getByText, findByText } = render(
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );
    const usernameInput = getByPlaceholderText('Nom');
    const passwordInput = getByPlaceholderText('Mot de passe');
    const loginButton = getByText('Se Connecter');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'testpass');
    fireEvent.press(loginButton);

    const errorMessage = await findByText('Une erreur est survenue lors de la connexion.');
    expect(errorMessage).toBeTruthy();
  });
});
