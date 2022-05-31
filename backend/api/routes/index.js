const express = require('express');
const router = express.Router();
const userctrl = require('../controllers/userCtrl.js');
const userpagectrl = require ('../controllers/userpageCtrl.js');
const nodesctrl = require('../controllers/nodes.js');
router.route('/user/login').post((req,res)=>{
  userctrl.authenticateUser(req, res);
});
// add users page router
router.route('/users/getData').get((req,res)=>{
  req.table_name = "users";
  userpagectrl.getData(req, res);
});
// nodes routes
router.route('/node/getData').get((req,res)=>{
  req.table_name = "users";
  userpagectrl.getData(req, res);
});



module.exports = router;