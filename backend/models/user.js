const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Customer = require("./customer");

const { Schema } = mongoose;

//schema utilisateur
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    type: String,
}, {
    //générer les propriétés createdAt et updatedAt
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

//hasher le mot de passe avant sauvegarde dans la base de données
userSchema.pre(
    'save',
    async function (next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    }
);

//verification du mot de passe dans la base de données
userSchema.methods.isValidPassword = async function (password) {
    const user = this;
    //comparer le mot de passe saisi a celle de la base de données
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

//modification de l'utilisateur
userSchema.methods.modify = async function (email, password) {
    const user = this;
    user.email = email;
    user.password = password;
    await user.save();
    await Customer.findOneAndUpdate({ user: user._id }, { email: email });
    return true;
}

//suppression
userSchema.methods.delete = async function () {
    const user = this;
    await user.remove();
    await Customer.findOneAndRemove({ user: user._id });
    return true;
}

//modèle utilisateur
const User = mongoose.model('User', userSchema);

module.exports = User;