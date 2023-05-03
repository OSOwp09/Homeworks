const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const { dbConnection } = require("./daatabase/config");
const cors = require("cors");

//crear Express App
const app = express();

//Base datos
dbConnection();

//CORS
app.use(cors());

app.use(express.static("public"));

// parse application/json
app.use(bodyParser.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/task", require('./routes/task'))

//escuchar
app.listen(4000, () => {
	console.log("Servidor corriendo en puerto", process.env.PORT);
});
