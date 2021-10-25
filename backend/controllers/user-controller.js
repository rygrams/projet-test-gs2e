const jwt = require('jsonwebtoken');
const Customer = require("../models/customer");
const User = require('../models/user');

//controller de connexion
exports.login = (req, res, next) => {
    if (req.user) {
        try {
            const body = { _id: req.user._id, email: req.user.email };
            const token = jwt.sign({ user: body }, process.env.JWT_SECRET, { expiresIn: '24h' });
            res.send({
                id: req.user._id,
                email: req.user.email,
                type: req.user.type,
                token: token,
                expiresAt: new Date().getTime() + 24 * 60 * 60 * 1000 - 5 * 1000
            })
        } catch (error) {
            res.status(400).send({
                message: "Impossible de vous connecter",
                code: 400
            })
        }

    } else {
        res.status(401).send({
            message: "Ce compte n'existe pas",
            code: 401
        })
    }
}

//creation de compte
exports.signup = async (req, res, next) => {
    if (req.user) {

        try {
            await Customer.create({
                email: req.user.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                addresses: [req.body.address],
                type: "customer",
                user: req.user._id
            });

            const body = { _id: req.user._id, email: req.user.email };
            const token = jwt.sign({ user: body }, process.env.JWT_SECRET, { expiresIn: '24h' });
            res.send({
                id: req.user._id,
                email: req.user.email,
                token: token,
                type: req.user.type,
                expiresAt: new Date().getTime() + 24 * 60 * 60 * 1000 - 5 * 1000
            })
        } catch (error) {
            res.status(401).send(error)
        }

    } else {
        res.status(401).send("error")
    }
}

//recuperation utilisateur actuelle
exports.get = (req, res, next) => {
    res.send({
        id: req.user.id,
        email: req.user.email,
        type: req.user.type
    })
}

//list des utilisateurs
exports.list = (req, res, next) => {
    User.find({}, function (error, users) {
        if (error)
            res.status(400).send(err);

        if (req.user.type != "admin")
            res.status(400).send("Unauthorized");

        res.send(users);
    });
}

//mettre a jour l'utilisateur
exports.update = async (req, res, next) => {
    const user = await User.findOne({ _id: req.params.id });

    switch (req.user.type) {
        case "admin":
            const result = await user.modify(req.body.email, req.body.password);
            res.send(result)
            break;
        case "customer":
            if (req.params.id == req.user._id) {
                await user.modify(req.user._id, req.body.email, req.body.password);
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

//supprimer l'utilisateur
exports.delete = async (req, res, next) => {
    const user = await User.findOne({ _id: req.params.id });

    switch (req.user.type) {
        case "admin":
            const result = await user.delete();
            res.send(result)
            break;
        case "customer":
            if (req.params.id == req.user._id) {
                await user.delete();
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

//creation  un superadmin
exports.superadmin = async (req, res, next) => {
    if (req.query.master_key == process.env.MASTER_KEY) {

        try {
            const user = await User.create({ email: req.body.email, password: req.body.password, type: "admin" });

            await Customer.create({
                email: user.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                addresses: [req.body.address],
                type: "admin",
                user: user._id
            });

            const body = { _id: user._id, email: user.email };
            const token = jwt.sign({ user: body }, process.env.JWT_SECRET, { expiresIn: '24h' });

            res.send({
                id: user._id,
                email: user.email,
                token: token,
                type: user.type,
                expiresAt: new Date().getTime() + 24 * 60 * 60 * 1000 - 5 * 1000
            })
        } catch (error) {
            res.status(401).send(error)
        }

    } else {
        res.status(401).send({
            message: "Vous n'êtes pas autorisé",
            code: 401
        })
    }
}