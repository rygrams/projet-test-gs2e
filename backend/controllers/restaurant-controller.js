const Restaurant = require("../models/restaurant");

//creation d'un restaurant
exports.create = async (req, res, next) => {
    if (req.user.type == "admin") {
        const restaurant = await Restaurant.create({
            image: req.file.filename,
            title: req.body.title,
            description: req.body.description,
            owner : req.body.owner,
            phone : req.body.phone,
            deleted : false
        });
        res.send(restaurant);
    } else {
        res.status(402).send("unauthorized");
    }
}

//recuperation restaurant
exports.get = async (req, res, next) => {
    const restaurant = await Restaurant.findOne({ _id: req.params.id, deleted: false });
    res.send(restaurant);
}

//list des restaurant
exports.list = (req, res, next) => {
    Restaurant.find({ deleted: false }, function (error, restaurants) {
        if (error)
            res.status(400).send(error);

        res.send(restaurants);
    });
}

//mettre a jour un restaurant
exports.update = async (req, res, next) => {

    if (req.user.type == "admin") {
        const result = await Restaurant.findByIdAndUpdate(req.params.id, {
            image: req.file.filename,
            title: req.body.title,
            description: req.body.description,
            owner : req.body.owner,
            phone : req.body.phone,
            deleted: false
        });
        res.send(result);
    } else {
        res.status(402).send("unauthorized");
    }
}

//supprimer un restaurant
exports.delete = async (req, res, next) => {
    if (req.user.type == "admin") {
        const result = await Restaurant.findByIdAndUpdate(req.params.id, {
            deleted: true
        });
        res.send(result);
    } else {
        res.status(402).send("unauthorized");
    }
}