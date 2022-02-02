const express = require("express");
const { getPlayersList, createPlayer, findPlayerById } = require("../controllers/Players");
const router = express.Router();

router.get("/api/v1/players", getPlayersList);
router.post("/api/v1/players", createPlayer);
router.post("/api/v1/player", findPlayerById);


module.exports = router

