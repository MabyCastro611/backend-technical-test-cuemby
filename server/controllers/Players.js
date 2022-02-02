const Players = require("../models/Players");

const findPlayers = require("../helpers/findPlayers");

exports.getPlayersList = (req, res) => {
	console.log("QUERYS", req.query);

	let keyword = req.query.keyword || "";
	let page = Math.max(0, req.query.page || 1);
	let order = req.query.order || "asc";
	let numberPerPage = 100;

	findPlayers({ keyword, page, order, numberPerPage, res });
};

exports.createPlayer = (req, res) => {
	console.log(req.body);

	let keyword = req.body.keyword || "";
	let page = Math.max(0, req.body.page || 1);
	let order = req.body.order || "asc";
	let numberPerPage = 24;

	findPlayers({
		keyword,
		page,
		order,
		numberPerPage,
		res,
		isTeam: true,
	});
};

exports.findPlayerById = (req, res) => {
   let { id } = req.body;

   Players.findById(id, (err, player) => {
      if(err){
         res.json({
            ok: false,
            error: err
         })
      } else {
         res.json({
            ok: true,
            player: player
         })
      }
   })
};
