const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const produitsRoute = require('./routes/produit')

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/produits', produitsRoute)

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

});

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