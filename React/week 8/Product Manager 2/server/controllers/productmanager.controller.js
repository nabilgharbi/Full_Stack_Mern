const Product = require('../models/productmanager.model');

module.exports = {
    allProducts: (req, res) => {
        Product.find({})
            .then(allProducts => {
                res.json(allProducts)
            })
            .catch((err) => {
                res.json(err)
            })
    },

    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(oneProduct => {
                res.json(oneProduct)
            })
            .catch((err) => {
                res.json(err)
            })
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                res.json(newProduct)
            })
            .catch((err) => {
                res.json(err)
            })
    },

}