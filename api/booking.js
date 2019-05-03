var express = require('express');
var router = express.Router();
var bookingService = require('../services/bookingService');

router.get('/', function(req, res, next) {
  var callback = function(result){
    res.send(result);
  }
  bookingService.getBooking(callback);
});

router.post('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var bookinfo = req.body;
  bookingService.addBooking(bookinfo, callback);
});

// router.get('/:id', function(req, res, next) {
//     res.send(movieList);
//   });


module.exports = router;