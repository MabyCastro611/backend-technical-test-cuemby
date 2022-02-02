const axios = require("axios");
const Players = require("../models/Players");

const getDataFifa = async (page = 1) => {
	let url = "https://www.easports.com/fifa/ultimate-team/api/fut/item";
	let response;

	try {
		response = await axios.get(`${url}?page=${page + 1}`);
	} catch (error) {
		console.log(error);
	}

   return response;
};

const savePlayers = async () => {
   let players = [];

   let response = await getDataFifa();
   console.log("Response")

   await Players.deleteMany({});
	for (let index = 0; index < response.data.totalPages; index++) {
      let data = await getDataFifa(index);

		console.log("saved player...", index);

		if(data.data?.items[index]?.firstName){
			players.push({
				name: data.data?.items[index]?.firstName,
				position: data.data?.items[index]?.position,
				nationality: data.data?.items[index]?.nation?.name,
				team: data.data?.items[index]?.club?.name,
			});
		}


		await Players.insertMany(players)
			.then(() => console.log("Data saved success... :)"))
			.catch((err) => console.error("Fail Proccess :(", err));
	}

   console.log("******************* Proccess is finished *******************");
};

module.exports = savePlayers;
