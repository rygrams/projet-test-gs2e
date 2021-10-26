const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema livreur
const deliverSchema = new Schema({
    idCard : String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    deleted : Boolean
});

//modèle livreur
const Deliver = mongoose.model('Deliver', deliverSchema);

module.exports = Deliver;