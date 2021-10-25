const Product = require("../models/product");

//creation d'un livreur
exports.create = async (req, res, next) => {
    if (req.user?.type == "admin") {
        const product = await Product.create({
            image: req.file.filename,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            restaurant : req.body.restaurant,
            deleted: false
        });
        res.send(product);
    } else {
        res.status(401).send({
            message : "Non autorisé",
            status : 401
        })
    }
}

//recuperation livreur
exports.get = async (req, res, next) => {
    const product = await Product.findOne({ _id: req.params.id, deleted: false });
    res.send(product);
}

//list des livreurs
exports.list = (req, res, next) => {
    Product.find({ deleted: false }, function (error, products) {
        if (error)
            res.status(400).send(error);

        res.send(products);
    });
}

//mettre a jour un livreur
exports.update = async (req, res, next) => {

    if (req.user?.type == "admin") {
        const result = await Product.findByIdAndUpdate(req.params.id, {
            image: req.file.filename,
            title: req.body.title,
            restaurant : req.body.restaurant,
            description: req.body.description,
            price: req.body.price,
        });
        res.send(result);
    } else {
        res.status(401).send({
            message : "Non autorisé",
            status : 401
        })
    }
}

//supprimer un livreur
exports.delete = async (req, res, next) => {
    if (req.user?.type == "admin") {
        const result = await Product.findByIdAndUpdate(req.params.id, {
            deleted: true
        });
        res.send(result);
    } else {
        res.status(401).send({
            message : "Non autorisé",
            status : 401
        })
    }
}