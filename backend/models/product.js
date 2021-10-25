const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema menu
const menuSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number,
    restaurant : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    deleted : Boolean
});

//modèle menu
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;