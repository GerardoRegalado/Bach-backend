const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

	name: {
		type: String,
		required: true
	},

	lastname: {
		type: String,
		default: ""
	},

	email: {
		type: 		String,
		required: 	true,
		unique: 	true
	},

	password: {
		type: 		String,
		required: 	true
	},

	address: {
		type:		String,
		required:	false
	},

	phone: {
		type:		Number,
		required:	false
	},

	age: {
		type:		Number,
		required:	false
	},

	living: {
		type:		String,
		required:	false
	},
	
	tdahSurvey: [
		{
	
		type: mongoose.Schema.Types.ObjectID,
		ref: 'Tdah'
		}
	],


})

const User = mongoose.model("User", userSchema)

module.exports = User
