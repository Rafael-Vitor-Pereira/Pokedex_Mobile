import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import GetPokemon from '../services/GetPokemom';
import Header from '../components/Header';
import Card from '../components/Card';

const Infos = ({route}) => {
  const {data: pokemon, isError, isLoading} = useQuery("pokemon", async () => {
    const resposta = await GetPokemon(route.params.paramKey);

    return resposta;
  });

  if(isError){
    return <Text>Ocorreu um erro e não foi possível recuperar dados!</Text>
  }

  if(isLoading){
    return <ActivityIndicator size={42} color={'black'} />
  }

  return (
      <View style={styles.container}>
        <Header />

        <Card pokemon={pokemon} />
      </View>
  );
};

export default Infos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
});