const cors = require("cors");
const express = require("express");

const userRoutes = require("../routes/user-routes")
const restoRoutes = require("../routes/restaurant-route")
const deliverRoutes = require("../routes/deliver-route")
const orderRoutes = require("../routes/order-route")
const productRoutes = require("../routes/product-route")
const customerRoutes = require("../routes/customer-route")

/////////
//configuration ExpressJS
/////////
const app = express();


//activer cors
app.use(cors());
// pour le traitement des requetes content-types json
app.use(express.json());
//  pour le traitement des requetes avec des urls encodés
app.use(express.urlencoded({ extended: true }));
//enregistrement des routes

//route utilisateur
app.use('/users', userRoutes); 
app.use('/restaurants', restoRoutes); 
app.use('/delivers', deliverRoutes); 
app.use('/products', productRoutes); 
app.use('/orders', orderRoutes); 
app.use('/customers', customerRoutes); 

app.use('/files', express.static("uploaded-files")); 

// route par défaut
app.get("/", (req, res) => {
    res.json({ message: "Bienvenue sur API RestoRapide." });
});


/////////
//Fin configuration ExpressJS
////////

module.exports = app;