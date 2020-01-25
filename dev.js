const mongoose = require("mongoose");

// Creamos el contenido que va a tener apra registarse
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], // vector de string
});

// almacenar lontidude del usuario que serian numeros 
module.exports = mongoose.model("Dev", DevSchema);
