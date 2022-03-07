const mongoose = require("mongoose")



const TicSchema = mongoose.Schema({

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
    ref: 'tics'
    }
],



}) 

const TicModel = mongoose.model("TicModel", TicSchema)

module.exports = TicModel