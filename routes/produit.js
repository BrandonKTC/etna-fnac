const express = require('express');
const router = express.Router();
const Produit = require('../models/dbProduit')

// Create a Product

router.post('/', (req,res) => {

    produit = new Produit({
        object:req.body.object,
        utilisation:req.body.utilisation,
        entretien:req.body.entretien,
        image:req.body.image
    })

    produit.save().then(produit => {
        res.send(produit)
    }).catch(err => {
        res.status(500).send("Ce Produit n'existe pas dans notre base de donnée")
    })

})

// Get All The Product

router.get('/', (req,res) => {
    Produit.find().then(produits => res.send(produits))
    .catch((error) => {
        res.status(500).send("Something went wrong")
    })
})

// Get The Product By Id

router.get("/:produitId", async (req,res) => {
    const produit = await Produit.findById(req.params.produitId);
        if(!produit) res.status(404).send("Produit non trouvé");
        res.send(produit);

})

// Update Produit Based on Id
router.put('/:produitId', async (req,res) => {
    const updateProduit = await Produit.findByIdAndUpdate(req.params.produitId, {
        object:req.body.object,
        utilisation:req.body.utilisation,
        entretien:req.body.entretien,
        image:req.body.image
    },
    {new:true})

    if (!updateProduit) res.status(404).send("Produit non trouvé");
    res.send(updateProduit)
})


// Delete Produit Based on Id 
router.delete('/:produitId', async (req,res) => {

    const produit = await Produit.findByIdAndRemove(req.params.produitId);
    if (!produit) res.status(404).send("Produit non trouvé");
    res.send(produit);
})




module.exports = router;