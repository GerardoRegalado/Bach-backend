const mongoose = require("mongoose")



const StutterSchema = mongoose.Schema({

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

	
userID: [
    {

    type: mongoose.Schema.Types.ObjectID,
    ref: 'Stutter'
    }
],



}) 

const StutterModel = mongoose.model("Stutter", StutterSchema)

module.exports = StutterModel