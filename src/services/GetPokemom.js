import axios from "axios";

async function GetPokemon(pokemon){
	const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

	return resposta.data;
}

export default GetPokemon;