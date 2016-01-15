/**
 * Created by joelmiller on 1/14/16.
 */

var random = require('./random');

var firstName = ['Joel', 'Kristy', 'Mark', 'Scott', 'Ryan', 'Antoinette', 'Joseph', 'Taylor', 'Casie'];

var lastName = ['Rosario', 'Dunkin', 'Other', 'Mcloud', 'McFinnigans', 'McLovin'];

function getName(){
	var first = firstName[random(0, firstName.length - 1)];
	var last = lastName[random(0, lastName.length - 1)];

	return first + ' ' + last;
}

//console.log(getName());

module.exports = getName;