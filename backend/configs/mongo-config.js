const mongoose = require('mongoose');

exports.connect = () => {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose erreur de connexion: ${err}`);
    process.exit(1);
  });
};
