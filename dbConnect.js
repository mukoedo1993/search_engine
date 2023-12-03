const mongoose = require("mongoose");
require('dotenv').config()

const dbConnect = () => {
    const connectionParams = { useNewUrlParser: true };
    mongoose.connect(process.env.DB_CONNECTION, connectionParams);

    mongoose.connection.on("connected", () => {
		console.log("Connected to database sucessfully");
	});

	mongoose.connection.on("error", (err) => {
		console.log("Error while connecting to database :" + err);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Mongodb connection disconnected");
	});
};

module.exports = dbConnect;