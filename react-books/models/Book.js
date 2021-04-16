const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const googlebooks = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true }
});

const Book = mongoose.model("Book", googlebooks);

module.exports = Book;