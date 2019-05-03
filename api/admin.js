var express = require('express');
var router = express.Router();
var adminService = require('../services/adminService');

router.get('/', function(req, res) {
    var callback = function(result){
      res.send(result);
    }
    adminService.getAdmins(callback);
  });

  router.post('/', function(req, res) {
    var callback = function(result){
      res.send({'result':result});
    }
    var admin = req.body;
    adminService.addAdmin(admin, callback);
  });

  module.exports = router;