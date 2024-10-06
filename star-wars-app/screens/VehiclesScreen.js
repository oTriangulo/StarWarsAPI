import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const VehiclesScreen = ({ route }) => {
  const { character } = route.params;
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const vehiclePromises = character.vehicles.map(vehicleUrl => axios.get(vehicleUrl));
      const vehicleResponses = await Promise.all(vehiclePromises);
      setVehicles(vehicleResponses.map(response => response.data));
    };

    fetchVehicles();
  }, [character]);

  return (
    <View style={styles.container}>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.model} - {item.passengers} passageiros</Text>
        )}
        ListEmptyComponent={<Text>Não há veículos disponíveis.</Text>}
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

export default VehiclesScreen;
