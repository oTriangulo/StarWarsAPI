import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CharacterDetailScreen = ({ route, navigation }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text>Nome: {character.name}</Text>
      <Text>Altura: {character.height}</Text>
      <Text>Peso: {character.mass}</Text>
      <Text>Cor do cabelo: {character.hair_color}</Text>
      <Text>Cor da pele: {character.skin_color}</Text>
      <Text>Cor dos olhos: {character.eye_color}</Text>
      <Text>Gênero: {character.gender}</Text>
      <Button
        title="Naves"
        onPress={() => navigation.navigate('Veículos', { character })}
      />
      <Button
        title="Filmes"
        onPress={() => navigation.navigate('Filmes', { character })}
      />
      <Text>Tetrafish.art.br</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default CharacterDetailScreen;
