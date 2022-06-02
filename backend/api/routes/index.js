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
//// add data for user table
router.route('/users/addData').post((req,res)=>{
  userpagectrl.addData(req, res);
});
///update user data
router.route('/users/updateData').put((req,res)=>{
  userpagectrl.updateData(req, res);
});
////deactivate data 
router.route('/users/deactivateData').put((req,res)=>{
  userpagectrl.deactivateData(req, res);
});

// nodes routes
router.route('/node/getDataNode').get((req,res)=>{
  req.table_name = "node";
  nodesctrl.getDataNode(req, res);
});
//// search data
router.route('/users/searchData').post((req,res)=>{
  userpagectrl.searchData(req, res);
});


module.exports = router;