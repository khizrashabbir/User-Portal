const express = require('express');
const router = express.Router();
const userctrl = require('../controllers/userCtrl.js');

router.route('/user/login').post((req,res)=>{
  userctrl.authenticateUser(req, res);
});


module.exports = router;