const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let playerSchema = new Schema({
	name: { type: "String" },
	position: { type: "String" },
	nationality: { type: "String" },
	team: { type: 'String' },
});

module.exports = mongoose.model("Players", playerSchema);

