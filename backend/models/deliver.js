const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema client
const deliverSchema = new Schema({
    idCard : String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    deleted : Boolean
});

//modèle client
const Deliver = mongoose.model('Deliver', deliverSchema);

module.exports = Deliver;