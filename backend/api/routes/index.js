const express = require('express');
const router = express.Router();
const myctrl = require('../controllers/myctrl.js');
const userctrl = require('../controllers/userCtrl.js');

router.route('/user/login').post((req,res)=>{
  userctrl.authenticateUser(req, res);
});


module.exports = router;