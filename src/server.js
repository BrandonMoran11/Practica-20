const express = require('express');//inyeccion de la dependecia express
const mongoose = require('mongoose');//inyeccion de la dependecia mongoose
const personsRoutes = require('./routes/persons');//variable que guarda las rutas de persons
require('dotenv').config();//inyeccion de "dotenv" para usar variables de entorno como la que tenemos en el archivo .env

mongoose.Promise = global.Promise;//declaramos mongoose como una promesa
const app = express();//instancia de express
const port = process.env.PORT || 3000;//Puerto de escucha

app.set('view engine', 'ejs');//se declara ejs como motor de plantillas
app.use(express.urlencoded({ extended: false }));// linea de codigo para hacer que express use el body parser
app.use(personsRoutes);//aqui decimos que se usen las rutas  de persons
app.use("/assets", express.static(__dirname + "/public"));//decimos que use el style.css que tenemos en la carpeta public

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })//coneccion a la base de datos
    .then(() => console.log('Conectando a TEST'))
    .catch((error) => console.error(error));


app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));//muesra en la consola que puerto esta escuchando el servidor