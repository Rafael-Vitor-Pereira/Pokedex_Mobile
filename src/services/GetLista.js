import axios from "axios";

async function GetLista(){
	const resposta = await axios.get('https://pokeapi.co/api/v2/pokemon');

	return resposta.data;
}

export default GetLista;