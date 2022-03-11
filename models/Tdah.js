const mongoose = require("mongoose")



const tdahSchema = mongoose.Schema({

questionOne: {
    type:       String,
    required:   false
},

questionTwo: {
    type:        String,
    required:   false

},

questionThree: {
    type:        String,
    required:   false

},

questionFour: {
    type:        String,
    required:  false
},

questionFive: {
    type:        String,
    required:   false
},

questionSix: {
    type:        String,
    required:   false
},

questionSeven: {
    type:        String,
    required:   false
},

questionEight: {
    type:        String,
    required:  false
},

questionNine: {
    type:        String,
    required:   false
},

questionTen: {
    type:        String,
    required:   false
},

questionEleven: {
    type:        String,
    required:   false
},

questionTwelve: {
    type:        String,
    required:   false
},

questionThirteen: {
    type:        String,
    required:  false
},

questionFourteen: {
    type:        String,
    required:   false
},

questionSixteen: {
    type:        String,
    required:   false
},

questionSeventeen: {
    type:        String,
    required:   false
},

questionEighteen: {
    type:        String,
    required:   false
},

questionNineteen: {
    type:        String,
    required:   false
},

questionTwenty: {
    type:        String,
    required:   false
},

questionTwentyone: {
    type:        String,
    required:   false
},

questionTwentytwo: {
    type:        String,
    required:   false
},

questionTwentythree: {
    type:        String,
    required:   false
},

questionTwentyfour: {
    type:        String,
    required:   false
},

questionTwentyfive: {
    type:        String,
    required:   false
},

questionTwentysix: {
    type:        String,
    required:   false
},

questionTwentyseven: {
    type:        String,
    required:   false
},

questionTwentyeight: {
    type:        String,
    required:   false
},

questionTwentynine: {
    type:        String,
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