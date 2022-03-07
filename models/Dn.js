const mongoose = require("mongoose")



const DNSchema = mongoose.Schema({

questionOne: {
    type:       String,
    required:   false
},

questionTwo: {
    type:       String,
    required:   false
},

questionThree: {
    type:       String,
    required:   false
},
	
userID: [
    {

    type: mongoose.Schema.Types.ObjectID,
    ref: 'Dn'
    }
],



}) 

const DNModel = mongoose.model("DNModel", DNSchema)

module.exports = DNModel