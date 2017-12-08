const mongoose = require('mongoose');

const schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const intechuser = new schema({

	username : String,
	password : {type: String, select : false},
	email	 : String,
	fisrtname : String,
	lastname : String,
	status : Boolean,
});

intechuser.plugin(passportLocalMongoose);

module.exports = mongoose.model('users',intechuser);
