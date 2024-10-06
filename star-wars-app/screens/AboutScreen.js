import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedores:</Text>
      <Text>Nome: Augusto da Silva Saucedo, Louis Aslan Costa Conchi e João Vitor Voese</Text>
      <Text>RA: 1135994, 1135999 e 1135759</Text>
      <Text>Email: 1135994@atitus.edu.br, 1135999@atitus.edu.br e 1135759@atitus.edu.br</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AboutScreen;
