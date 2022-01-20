const express = require('express');
const router = express.Router();
const Produit = require('../models/dbProduit')

router.post('/', (req,res) => {
    
    produit = new Produit({
        object:req.body.object,
        utilisation:req.body.utilisation,
        entretien:req.body.entretien
    })

    produit.save().then(produit => {
        res.send(produit)
    }).catch(err => {
        res.status(500).send("Ce Produit n'existe pas dans notre base de donnée")
    })

})

module.exports = router;