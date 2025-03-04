import express from 'express'
import * as booksControllers from '../controllers/booksControllers.js'

const router = express.Router()

router.get('/books', booksControllers.getAllBooks)

router.get('/books/:id', booksControllers.getBookById)

router.post('/books', booksControllers.createBook)

router.put('/books/:id', booksControllers.updateBook)

router.delete('/books/:id', booksControllers.deleteBook)

export default router