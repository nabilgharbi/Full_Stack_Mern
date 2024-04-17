const ProductController = require('../controllers/productmanager.controller');

module.exports = app => {
    app.get('/api/products', ProductController.allProducts)
    app.post('/api/products', ProductController.createProduct)
    app.get('/api/products/:id', ProductController.findOneProduct)


}