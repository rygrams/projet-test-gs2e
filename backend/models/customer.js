const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema client
const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    addresses : [{type: String}],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    //générer les propriétés createdAt et updatedAt
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

//modèle client
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;