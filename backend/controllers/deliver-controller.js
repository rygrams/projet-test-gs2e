const Deliver = require("../models/deliver");

//creation d'un livreur
exports.create = async (req, res, next) => {
    if (req.user.type == "admin") {
        const deliver = await Deliver.create({
            idCard: req.body.idCard,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            deleted: false
        });
        res.send(deliver);
    } else {
        res.status(402).send("unauthorized");
    }
}

//recuperation livreur
exports.get = async (req, res, next) => {
    const deliver = await Deliver.findOne({ _id: req.params.id, deleted: false });
    res.send(deliver);
}

//liste des livreurs
exports.list = (req, res, next) => {
    Deliver.find({ deleted: false }, function (error, delivers) {
        if (error)
            res.status(400).send(error);

        res.send(delivers);
    });
}

//mettre a jour un livreur
exports.update = async (req, res, next) => {

    if (req.user.type == "admin") {
        const result = await Deliver.findByIdAndUpdate(req.params.id, {
            idCard: req.body.idCard,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
        });
        res.send(result);
    } else {
        res.status(402).send("unauthorized");
    }
}

//supprimer un livreur
exports.delete = async (req, res, next) => {
    if (req.user.type == "admin") {
        const result = await Deliver.findByIdAndUpdate(req.params.id, {
            deleted: true
        });
        res.send(result);
    } else {
        res.status(402).send("unauthorized");
    }
}