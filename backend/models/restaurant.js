const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema client
const restaurantSchema = new Schema({
    image : String,
    title: String,
    description: String,
    owner: String, //nom du prorpiétaire
    phone: String,
    deleted : Boolean
});

//modèle client
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;