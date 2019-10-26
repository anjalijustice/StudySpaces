import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationCard from './components/LocationCard';

export default function App() {
  return (
    <View style={styles.container}>
      <LocationCard name={'Espresso Royale'} imageURL={'./img/espressoRoyale.jpg'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
