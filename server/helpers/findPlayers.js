const Players = require("../models/Players");


const findPlayers = ({keyword, page, order, numberPerPage, res, isTeam}) => {

   console.log("keyword", keyword)
   
	Players.find(isTeam 
      ? { team: { $regex: new RegExp(keyword), $options: "i" } } 
      : {name: { $regex: new RegExp(keyword), $options: "i" }})
		.skip(numberPerPage * page)
		.limit(numberPerPage)
		.sort(isTeam ? { team: order } : { name: order })
		.exec((err, players) => {
			if (err) {
				return res.json(err);
			 }

			Players.estimatedDocumentCount().exec(function (err, count) {
				console.log("count", players.length)
				res.json({
					Page: page,
					pageSize: players.length,
					TotalPages: Math.ceil(count / numberPerPage) - 1,
					Players: players,
					perPage: numberPerPage
				});
			});
		});
};


module.exports = findPlayers;
