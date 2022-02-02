const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { getDataFifa } = require('./helpers/getDataFifa');
const savePlayers = require('./helpers/getDataFifa');
const app = express()
const cors = require('cors')


const loadBD = async () => {
   await mongoose.connect('mongodb://localhost/fifa', (err) => {
      if(!err) console.log("successful connection");
      else console.log("Error", err);
   });
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes/Routes'));

loadBD();
savePlayers();

app.listen(3000, () => {
   console.log("Server on port", 3000)
})