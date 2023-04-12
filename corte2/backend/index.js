const express = require('express')
require('dotenv').config()

//crear Express App
const app = express()

app.use(express.static('public'))

//Rutas
app.get('/',(req, res)=>{
    res.json({
        ok: true
    })
})

//escuchar
app.listen(4000, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT);
})