const router = require('express').Router()
const bookController = require('../controllers/BookController')

// routing untuk POST /books => postman http://localhost:3000/books pakai method POST
router.post('/', bookController.addBook)
//routing untuk GET /books => postman http://localhost:3000/books pakai method GET
router.get('/', bookController.getBooks)

module.exports = router