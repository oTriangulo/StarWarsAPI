import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const CharactersScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://swapi.dev/api/people/');
      setCharacters(response.data.results);
    };
    fetchData();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Sobre')}
          title="Sobre"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters.slice(0, 5)}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('Detalhes do Personagem', { character: item })}
          />
        )}
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

export default CharactersScreen;
