const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const booksApiRoutes = require("./routes/book");
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use("/api/book", booksApiRoutes)


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}!`);
});