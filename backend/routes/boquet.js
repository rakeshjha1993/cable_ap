const express = require('express');
const mongoose = require('mongoose');
const Boquet = require('../models/Boquet');
const Broadcaster = require('../models/broadcaster');
const router = express.Router();

router.get('/', (req,res) => {
    Boquet.find({}).then((docs) => {
        if(!docs){
            return res.status(400).json({
                "message": "No data Found" 
            })
        }
        console.log(docs);
        res.json(docs);
    }).catch(err => console.log(err));
})

module.exports = router;