var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/index');
var userRouter = require('./routes/userRouter');

var mongoURI = 'mongodb://localhost:27017/repo_shift_work_through';
var mongoDB = mongoose.connect(mongoURI).connection;
var app = express();

app.use(express.static('server/public'));

mongoDB.on('error', function(err){
	console.log(err);
});

mongoDB.once('open', function(){
	console.log('Connected to MongoDB');
});

app.use('/', index);
app.use('/user', userRouter);

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Listening on port', port);
});