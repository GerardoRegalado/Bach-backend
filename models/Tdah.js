const mongoose = require("mongoose")



const tdahSchema = mongoose.Schema({

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

questionEight: {
    type:       String,
    required:   false
},

questionNine: {
    type:       String,
    required:   false
},

questionTen: {
    type:       String,
    required:   false
},
	
userID: [
    {

    type: mongoose.Schema.Types.ObjectID,
    ref: 'Tdah'
    }
],



}) 

const TdahModel = mongoose.model("TdahModel", tdahSchema)

module.exports = TdahModel