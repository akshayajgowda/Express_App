var express = require('express');
var router = express.Router();

var movieService = require('../services/moviedbService');


router.get('/', function(req, res, next) {
    var callback = function(result){
    res.send(result);
    }
    movieService.getMovies(callback);
  });

  router.post('/', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movie = req.body;
    movieService.addMovie(movie, callback);
  });
 
  router.post('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var customer = req.body;
    movieService.addMovie(movie, callback);
  });
  
  router.delete('/:id', function(req, res, next) {
    var callback = function(result){
      // res.send(result);
      res.send({'result':result});
    }
    var movieId = req.params.id;
    movieService.deleteMovie(movieId,callback);
  });
  
  router.get('/:id', function(req, res, next) {
    var callback = function(movie){
      res.send(movie);
    }
    var movieId = req.params.id;
    var movie = movieService.getMovieById(movieId,callback);
  });
  
  router.put('/:id', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    var movieId = req.params.id;
    var movie = req.body;
    movieService.updateMovie(movie,callback);
  });

module.exports = router;
