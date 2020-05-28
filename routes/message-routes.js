const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
 const Message = require('../models/messages-modal');

 
 
// POST route => to create a new project
router.post('/messages', (req, res, next)=>{
 console.log("message", req.body.message)
 console.log("user", req.body.owner)
  Message.create({
    message: req.body.message,
    owner: req.body.owner
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

router.get('/messages', (req, res, next) => {
  Message.find().sort({ _id: -1 })
    .then(allMessages => {
      res.json(allMessages);
    })
    .catch(err => {
      res.json(err);
    })
});
 
module.exports = router;