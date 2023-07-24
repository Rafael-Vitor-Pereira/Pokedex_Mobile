import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useQuery } from 'react-query';
import GetAbility from '../services/GetAbility'
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const MaisInfos = ({route}) => {
	const navigation = useNavigation();

	const {data: abilidades, isError, isLoading} = useQuery('habilidades', async () => {
		const resposta = GetAbility(route.params.paramKey);

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
			<View style={styles.infos}>
				<Text style={styles.titulo}>{abilidades.name}</Text>
				<FlatList data={abilidades.effect_entries}
					renderItem={({item}) => (
						<Text style={styles.conteudo}>Efeitos de entrada: <Text style={styles.desc}>{item.effect}</Text></Text>
					)}
				/>

				<TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
					<Text style={styles.textBtn}>Voltar</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default MaisInfos

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
	},
	infos:{
		flex: 1,
		backgroundColor: '#FFF',
		width: '80%',
		borderRadius: 15
	},
	titulo: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10
	},
	conteudo: {
		fontSize: 16,
		fontWeight: 'bold',
		margin: 10
	},
	desc: {
		fontWeight: 'normal'
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