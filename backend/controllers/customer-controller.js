const Customer = require("../models/customer");
const User = require('../models/user');


//recuperation utilisateur
exports.getMe = async (req, res, next) => {
    const customer = await Customer.findOne({ user: req.user._id });
    res.send(customer);
}

//recuperation utilisateur
exports.get = async (req, res, next) => {
    if (req.user) {
        const customer = await Customer.findOne({ user: req.params.id });
        res.send(customer);
    } else {
        res.status(401).send({
            message: "Non autorisé",
            status: 401
        })

    }

}

//liste des utilisateurs
exports.list = (req, res, next) => {
    Customer.find({}, function (error, customers) {
        if (error)
            res.status(400).send(err);

        if (req.user?.type != "admin") {
            res.status(401).send({
                message: "Non autorisé",
                status: 401
            })
        }

        res.send(customers);
    });
}

//mettre a jour l'utilisateur
exports.update = async (req, res, next) => {
    switch (req.user.type) {
        case "admin":
            const result = await Customer.findByIdAndUpdate(req.params.id, {
                firstName: req.body.firstName,
                lastName: req.body.firstName,
                addresses: [req.body.address],
                phone: req.body.phone
            });
            res.send(result)
            break;
        case "customer":
            if (req.params.user == req.user._id) {
                const result = await Customer.findByIdAndUpdate(req.params.id, {
                    firstName: req.body.firstName,
                    lastName: req.body.firstName,
                    addresses: [req.body.address],
                    phone: req.body.phone
                });
                res.send(result)
            } else {
                res.status(400).send("Unauthorized")
            }
            break;
        default:
            res.status(400).send("cannot update")
            break
    }
}