const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
 const Message = require('../models/messages-modal');

 
 
// POST route => to create a new project
router.post('/messages', (req, res, next)=>{
 
  Message.create({
    message: req.body.message,
    owner: req.user._id
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});
 
 
module.exports = router;