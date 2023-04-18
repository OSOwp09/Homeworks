const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

//crear Express App
const app = express()

app.use(express.static('public'))

// parse application/json
app.use(bodyParser.json())


//Rutas
app.use('/api/auth', require('./routes/auth'))


//escuchar
app.listen(4000, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT);
})