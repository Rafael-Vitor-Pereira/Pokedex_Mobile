import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useQuery } from 'react-query';
import GetLista from '../services/GetLista';
import Header from '../components/Header';

const Home = ({navigation}) => {
  const {data: dados, isError, isLoading} = useQuery("ListaPokemon", async () => {
    const resposta = await GetLista();

    return resposta;
  });

  if(isError){
    return <Text>Ocorreu um erro e não foi possível recuperar dados!</Text>
  }

  if(isLoading){
    return <ActivityIndicator size={42} color={'black'} />
  }

  function Navegar(pokemon){
    navigation.navigate("Infos", {paramKey: pokemon});
  }

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.titulo}>Lista de Pokemons</Text>

      <FlatList style={styles.lista} data={dados.results} keyExtractor={item => item.name}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.botao} onPress={() => Navegar(item.name)}>
            <Text style={styles.textBtn}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  titulo: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold'
  },
  lista: {
    width: '100%',
  },
  botao:{
    margin: 10,
    alignSelf: 'center',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    width: '50%',
    borderWidth: 0.5,
  },
  textBtn: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});