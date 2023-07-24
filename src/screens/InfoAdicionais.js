import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native';

const InfoAdicionais = ({route}) => {
	const pokemon = route.params.paramKey;

	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Header />
			<Image style={styles.pokemonImg} source={{ uri: pokemon.sprites.front_default}} />
			<View style={styles.card}>
				<Text style={styles.titulo}>Movimentos</Text>
				<FlatList data={pokemon.moves}
					renderItem={({item}) => (
						<Text style={styles.status}><Entypo name="controller-record" size={12} color="black" /> {item.move.name}</Text>
					)}
				/>

				<TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Home")}>
					<Text style={styles.textBtn}>Voltar ao início</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default InfoAdicionais

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red'
	},
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