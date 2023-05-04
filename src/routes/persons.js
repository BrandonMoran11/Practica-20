const express = require('express');//inyeccion de express
const router = express.Router();//creacion del router
const mongoose = require('mongoose');//inyeccion de mongoose

const Person = require('../models/persons');//variable para guardar lo que exportamos en el archivo persons, carpeta models

router.get('/gente', async (req, res) => {//router tipo get para renderizar la vista index en la ruta "/gente"
    const Persons = await Person.find({});
    res.render("index", ({ Persons }));
});




module.exports = router;//exportamos el modulo