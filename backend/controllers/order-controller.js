const Order = require("../models/order");

//creation d'un commande
exports.create = async (req, res, next) => {
    if (req.user) {
        const order = await Order.create({
            total: req.body.total,
            customer: req.body.customer,
            items: req.body.items,
            address: req.body.address,
            status: "confirmed",
            deleted: false
        });
        res.send(order);
    } else {
        res.status(401).send({
            message: "Non autorisé",
            status: 401
        })
    }
}

//recuperation commande
exports.get = async (req, res, next) => {
    if (req.user) {
        const order = await Order.findOne({ _id: req.params.id, deleted: false });
        res.send(order);
    } else {
        res.status(401).send({
            message: "Non autorisé",
            status: 401
        })
    }
}

//liste des commandes
exports.list = (req, res, next) => {
    Order.find({ deleted: false }, function (error, orders) {
        if (error)
            res.status(400).send(error);

        if (req.user.type != "admin")
            res.status(400).send("Unauthorized");

        res.send(orders);
    });
}

//mettre a jour un commande
exports.update = async (req, res, next) => {

    if (req.user.type == "admin") {
        const result = await Order.findByIdAndUpdate(req.params.id, {
            image: req.file.filename,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
        });
        res.send(result);
    } else {
        res.status(402).send("unauthorized");
    }
}

//supprimer un commande
exports.delete = async (req, res, next) => {
    if (req.user.type == "admin") {
        const result = await Order.findByIdAndUpdate(req.params.id, {
            deleted: true
        });
        res.send(result);
    } else {
        res.status(402).send("unauthorized");
    }
}