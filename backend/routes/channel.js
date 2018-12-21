const express = require('express');
const mongoose = require('mongoose');
const Channel = require('../models/channel');
const router = express.Router();

router.get('/', (req, res) => {
  Channel.find({}).populate('Broadcaster').then((docs) => {
    if(!docs){
      return res.status(404).json({message : "No channel Found"});
    }
    res.json(docs);
  }).catch(err => res.json({err}));
});

router.get('/genre', (req, res) => {
  Channel.find().distinct('Genre').then((docs) => {
    if(!docs){
      res.status(404).json({"message": "Not Found"})
    }
    res.json(docs);
  }).catch(err => res.json({err}));
});

router.get('/genre/:genreName', (req, res) => {
  Channel.find({"Genre" : req.params.genreName}).then((docs) => {
    if(!docs){
      res.status(404).json({"message": "Not Found"})
    }
    res.json(docs);
  }).catch(err => res.json({err}));
});

router.get('/language', (req, res) => {
  Channel.find().distinct('Language').populate('Broadcaster').then((docs) => {
    if(!docs){
      res.status(404).json({"message": "Not Found"})
    }
    res.json(docs);
  }).catch(err => res.json({err}));
});
router.get('/language/:languageName', (req, res) => {
  Channel.find({"Language" : req.params.languageName}).populate('Broadcaster').then((docs) => {
    if(!docs){
      res.status(404).json({"message": "Not Found"})
    }
    res.json(docs);
  }).catch(err => res.json({err}));
});

router.get('/broadcaster/:broadcaster_id', (req, res) => {
  
  Channel.find({"Broadcaster" : req.params.broadcaster_id}).populate('Broadcaster').then((docs) => {
    if(!docs){
      res.status(404).json({"message": "Not Found"})
    }
    console.log(docs);
    res.json(docs);
  }).catch(err => res.json({err}));
});


module.exports = router;