require('dotenv').config();


/////demarrage de la configuration express a partir de son fichier de configuration
const expressConfig = require("./configs/express-config");
const PORT = process.env.PORT || 3000;
expressConfig.listen(PORT, () => {
    console.log("application connectée sur le port", PORT);
});
//////

///// connexion base de données mongoose
const mongoConfig = require('./configs/mongo-config');
mongoConfig.connect();
/////

////initialisation de pass
const passportConfig = require("./configs/passport-config");
passportConfig.initialize(expressConfig);
////