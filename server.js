require("dotenv").config();
const express = require("express");
const dbConnect = require("./dbConnect");
const movieRoutes = require("./routes/movies");
const cors = require("cors");
const app = express();

require('dotenv').config()

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

app.set('view engine', 'ejs')

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log("Server is running"));
