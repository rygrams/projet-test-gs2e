const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema restaurant
const restaurantSchema = new Schema({
    image : String,
    title: String,
    description: String,
    owner: String, //nom du prorpiétaire
    phone: String,
    deleted : Boolean
});

//modèle restaurant
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;