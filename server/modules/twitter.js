/**
 * Created by joelmiller on 1/14/16.
 */

var random = require('./random');

var userTwitter = ['@hax0r1337', '@dev_master', '@fun_sunshine', '@fluffy_bunny', '@kittyfufu', '@kittyfoofoo', '@fred'];

function generateTwitterHandle(){
	return userTwitter[random(0, userTwitter.length - 1)];
}

//console.log(generateTwitterHandle());

module.exports = generateTwitterHandle;