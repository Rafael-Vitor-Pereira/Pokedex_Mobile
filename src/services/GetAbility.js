import axios from "axios";

async function GetAbility(url){
	const resposta = await axios.get(`${url}`);

	return resposta.data;
}

export default GetAbility;