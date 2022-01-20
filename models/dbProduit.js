const mongoose  = require('mongoose');
const yup = require('yup')

const produitSchema = mongoose.Schema({
    object: String,
    utilisation: String,
    entretien: String,
});

module.exports = new mongoose.model('Produit', produitSchema)