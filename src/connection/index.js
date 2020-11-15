const conexion = require('../config/connection');
const mongoose = require('mongoose');
const fallback = (message) => {console.log(message)};
module.exports.init = function init() {
    mongoose.connect(conexion.uri, conexion.options)
        .then( () => fallback('Connexion reussie!'))
        .catch(() => fallback('Connexion à MongoDB échouée !'));
}
