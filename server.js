var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoOps = require('./server/MongoOperations.js');

var port = process.env.port || 1337;

var app = express();
app.use(bodyParser());

app.get('/NodeMovieList', function (request, response) {
    response.sendfile("views/MoviesList.html");
});

app.get('/NodeMovieList/api/movies', mongoOps.fetch);

app.post('/NodeMovieList/api/movies', mongoOps.add);

app.put('/NodeMovieList/api/movies/:movieId', mongoOps.modify);

app.use('/NodeMovieList', express.static(path.join(__dirname, 'public')));

app.listen(port);