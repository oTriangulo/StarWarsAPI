import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const MoviesScreen = ({ route }) => {
  const { character } = route.params;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviePromises = character.films.map(movieUrl => axios.get(movieUrl));
      const movieResponses = await Promise.all(moviePromises);
      setMovies(movieResponses.map(response => response.data));
    };

    fetchMovies();
  }, [character]);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Text>{item.title} - Diretor: {item.director} - Data de lançamento: {item.release_date}</Text>
        )}
        ListEmptyComponent={<Text>Não há filmes disponíveis.</Text>}
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

export default MoviesScreen;
