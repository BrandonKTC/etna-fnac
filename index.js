const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
var cors = require('cors');
const app = express();
const produitsRoute = require('./routes/produit')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/produits', produitsRoute)

mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser: true}
).then(() => {
    console.log("connected to mongodb atlas");
}).catch(err => {
    console.error(err);
})

app.listen(PORT, () => {
    console.log("Server listening at PORT ", PORT);
})