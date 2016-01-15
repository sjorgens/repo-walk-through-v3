/**
 * Created by joelmiller on 1/14/16.
 */

var express = require('express');
var path = require('path');
var User = require('../models/user');
var createUser = require('../modules/createUser');

var router = express.Router();

router.get('/', function(request, response){

	User.find({}).exec(function(err, users){
		if(err){
			console.log('Error getting all users', err);
		}
		response.send(users);
	})

});

router.delete('/deleteUserById/:id', function(request, response){

	//User ID passed by our client side to remove
	var userId = request.params.id;

	//Find and remove user specified by ID
	User.findById(userId).remove().exec(function(err){
		if(err){
			console.log('Error removing user' , err);
		}
		//response.sendStatus(200);
	});

	//Find remaining users, send back to client
	User.find({}).exec(function(err, users){
		if(err){
			console.log('Error getting all users', err);
		}
		response.send(users);
	})


});


module.exports = router;

