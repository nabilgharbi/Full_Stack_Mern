const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.index);
    app.post('/api/authors/new', AuthorController.create);
    app.get('/api/authors/show/:id', AuthorController.show);
    app.patch('/api/authors/update/:id', AuthorController.update);
    app.delete('/api/authors/delete/:id', AuthorController.destroy)
}