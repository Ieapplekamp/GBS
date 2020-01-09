const router = require("express").Router();
const bookMethods = require("../bookMethods/bookMethods");


// Save Books
router.route("/books").get(bookMethods.findAll).post(bookMethods.save);

// Delete Books
router.route("/books/:id").delete(bookMethods.remove);