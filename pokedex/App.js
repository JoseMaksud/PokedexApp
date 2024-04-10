import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import Card from './src/components/Card'
import { pokemons } from './src/data/pokemons';
// Projeto
export default function App() {
  const renderPokemon = ({ item }) => (
    <Card pokemon={item} key={item.Numero} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <FlatList
          data={pokemons}
          style={styles.cards}
          keyExtractor={(pokemon) => pokemon.Numero.toString() }
          renderItem={renderPokemon}>
          </FlatList>
          <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  cards: {
    padding: 15,
    marginBottom: 30,
  }
});
