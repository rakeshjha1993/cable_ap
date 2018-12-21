const express = require('express');
const Broadcaster = require('../models/broadcaster');


const router = express.Router();

router.get('/', (req,res) => {
    Broadcaster.find({}).then((docs) => {
        if(!docs){
            res.status(404).json({"message" : "Not Found"});
        }
        res.json(docs);
    }).catch(err => res.status(500).json({"error" : err}));
});


module.exports = router;