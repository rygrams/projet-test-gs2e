const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema commande
const orderSchema = new Schema({
    total: Number,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    delivery: Number,
    items: Object,
    address: String,
    status: Number,
    deleted: Boolean
}, {
    timestamps: { currentTime: () => Math.floor(Date.now()) }
});

//modèle commande
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;