import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ListGames from '../screens/ListGames'; // Assurez-vous que le chemin est correct
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { NavigationContainer } from '@react-navigation/native';

const mock = new MockAdapter(axios);

describe('ListGames Screen', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <NavigationContainer>
        <ListGames />
      </NavigationContainer>
    );

    expect(getByPlaceholderText('Recherche par nom de jeu')).toBeTruthy();
    expect(getByText('Filtre par dates')).toBeTruthy();
    expect(getByText('Filtre par genres')).toBeTruthy();
  });

  it('updates name state on input change', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <ListGames />
      </NavigationContainer>
    );
    const nameInput = getByPlaceholderText('Recherche par nom de jeu');

    fireEvent.changeText(nameInput, 'testgame');
    expect(nameInput.props.value).toBe('testgame');
  });

  it('fetches and displays games on mount', async () => {
    mock.onGet('http://localhost:8000/game').reply(200, { gamesData: [{ id: 1, name: 'Test Game' }] });

    const { getByText } = render(
      <NavigationContainer>
        <ListGames />
      </NavigationContainer>
    );

    await waitFor(() => {
      expect(getByText('Test Game')).toBeTruthy();
    });
  });

  it('displays an error message on search failure', async () => {
    mock.onPost('http://localhost:8000/searchGame').reply(400, { message: 'Invalid search' });

    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <ListGames />
      </NavigationContainer>
    );

    const nameInput = getByPlaceholderText('Recherche par nom de jeu');
    const searchButton = getByText('Rechercher'); // Assurez-vous que le texte du bouton est correct

    fireEvent.changeText(nameInput, 'testgame');
    fireEvent.press(searchButton);

    await waitFor(() => {
      expect(getByText('Error: Invalid search')).toBeTruthy(); // Assurez-vous que le message d'erreur est correctement rendu
    });
  });

  it('toggles filter area visibility', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <ListGames />
      </NavigationContainer>
    );

    const filterButton = getByTestId('filterButton');
    fireEvent.press(filterButton);

    expect(getByTestId('filterArea').props.style).toContainEqual({ display: 'flex' });

    fireEvent.press(filterButton);

    expect(getByTestId('filterArea').props.style).toContainEqual({ display: 'none' });
  });
});