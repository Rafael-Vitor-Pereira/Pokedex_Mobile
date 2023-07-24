import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Card = ({pokemon}) => {
	const navigation = useNavigation();

	return (
		<>
			<Image style={styles.pokemonImg} source={{ uri: pokemon.sprites.front_default}} />
			<View style={styles.card}>
				<Text style={styles.titulo}>Nome: <Text style={styles.conteudo}>{pokemon.name}</Text></Text>
				<Text style={styles.titulo}>Habilidades</Text>
				<FlatList data={pokemon.abilities}
					renderItem={({item}) => (
						<TouchableOpacity onPress={() => navigation.navigate("MaisInfos", {paramKey: item.ability.url})}>
							<Text style={styles.status}><Entypo name="controller-record" size={12} color="black" /> {item.ability.name}</Text>
						</TouchableOpacity>
					)}
				/>
				<Text style={styles.titulo}>Status inicial</Text>
				<FlatList data={pokemon.stats}
					renderItem={({item}) => (
						<Text style={styles.status}><Entypo name="controller-record" size={12} color="black" /> {item.stat.name}: <Text>{item.base_stat}</Text></Text>
					)}
				/>

				<TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("InfoAdicionais", {paramKey: pokemon})}>
					<Text style={styles.textBtn}>Mais Informações</Text>
				</TouchableOpacity>
			</View>
		</>
	)
}

export default Card

const styles = StyleSheet.create({
	card: {
    backgroundColor: '#FFF',
    flex: 1,
		width: '80%',
		borderWidth: 0.5
  },
  pokemonImg: {
    width: '80%',
    height: 180,
    alignSelf: 'center',
		backgroundColor: 'green',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderWidth: 0.5,
  },
	titulo:{
		fontSize: 20,
		fontWeight: 'bold',
		margin: 5,
		textAlign: 'center'
	},
	status: {
		fontWeight: 'normal',
		fontSize: 16,
		paddingVertical: 5,
		paddingHorizontal: 15
	},
	conteudo: {
		fontWeight: 'normal',
	},
	botao: {
		backgroundColor: 'lightblue',
		marginBottom: 10,
		padding: 10,
		width: '70%',
		borderRadius: 10,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textBtn: {
		fontSize: 15,
		fontWeight: 'bold'
	}
})