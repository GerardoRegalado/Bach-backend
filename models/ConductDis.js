const mongoose = require("mongoose")



const ConductDisorderSchema = mongoose.Schema({

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

questionFour: {
    type:       String,
    required:   false
},

questionFive: {
    type:       String,
    required:   false
},

questionSix: {
    type:       String,
    required:   false
},

questionSeven: {
    type:       String,
    required:   false
},
	
userID: [
    {

    type: mongoose.Schema.Types.ObjectID,
    ref: 'ConductDis'
    }
],



}) 

const ConductDisModel = mongoose.model("ConductDisModel", ConductDisorderSchema)

module.exports = ConductDisModel