import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersScreen from './screens/CharactersScreen';
import CharacterDetailScreen from './screens/CharacterDetailScreen';
import VehiclesScreen from './screens/VehiclesScreen';
import MoviesScreen from './screens/MoviesScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Personagens" component={CharactersScreen} />
        <Stack.Screen name="Detalhes do Personagem" component={CharacterDetailScreen} />
        <Stack.Screen name="Veículos" component={VehiclesScreen} />
        <Stack.Screen name="Filmes" component={MoviesScreen} />
        <Stack.Screen name="Sobre" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
