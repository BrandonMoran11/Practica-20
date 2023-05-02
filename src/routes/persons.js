const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Person = require('../models/persons');

router.get('/gente', async (req, res) => {
    const Persons = await Person.find({});
    res.render("index", ({ Persons }));
});
router.get('/agregarPeople', async (req,res) =>{
    res.render('addPersons');
})
// router.post('/addPerson', (req,res))=> {

// };
    

module.exports = router;