const async = require("hbs/lib/async")
const mongoose = require("mongoose")
const TdahModel = require("./../models/Tdah")
const DNModel = require("./../models/Dn")
const ConductDisModel = require("./../models/ConductDis")
const StutterModel = require("./../models/Stutter")
const TicModel = require("./../models/Tics")


exports.TDAHsurvey = async (req,res) => {
  
    
    try {
        
    const { 
        questionOne,
        questionTwo,
        questionThree,
        questionFour,
        questionFive,
        questionSix,
        questionSeven,
        questionEight,
        questionNine,
        questionTen,
        userID
        
    } = req.body

    
    

    const newTDAHsurvey = await TdahModel.create({
        
        questionOne,
        questionTwo,
        questionThree,
        questionFour,
        questionFive,
        questionSix,
        questionSeven,
        questionEight,
        questionNine,
        questionTen,
        userID
        
        
    })

    

    console.log('se creo un nuevo survey');


} catch (error) {
        console.log(error);
    res.json({
        msg: "Hubo un error en la creacion del TDAHsurvey"
    })
}

}

exports.DNsurvey = async(req,res) => {

    try {
        
        const {
            questionOne,
            questionTwo,
            questionThree,
            userID
        }   =  req.body

        const newDNsurvey = await DNModel.create({
            questionOne,
            questionTwo,
            questionThree,
            userID
        })

        console.log(newDNsurvey);

    } catch (error) {
        console.log(error);
        res.json({
        msg: "Hubo un error en la creacion del DN survey"
    })
        
    }

}

exports.ConductDisSurvey = async (req,res) => {

    try {
        
        const { 
            questionOne,
            questionTwo,
            questionThree,
            questionFour,
            questionFive,
            questionSix,
            questionSeven,
            userID
            
        } = req.body
         
    
        const newConductDisSurvey = await ConductDisModel.create({
            
            questionOne,
            questionTwo,
            questionThree,
            questionFour,
            questionFive,
            questionSix,
            questionSeven,
            userID
            
            
        })
     
        console.log(newConductDisSurvey);
      
    
    } catch (error) {
            console.log(error);
        res.json({
            msg: "Hubo un error en la creacion del TDAHsurvey"
        })
    }
    
}

exports.stutterSurvey = async (req,res) => {

    try {
        
        const { 
            questionOne,
            questionTwo,
            questionThree,
            questionFour,
            userID
            
        } = req.body
    
        
        const newStutterSurvey = await StutterModel.create({
            
            questionOne,
            questionTwo,
            questionThree,
            questionFour,
            userID
            
            
        })
       
        console.log(newStutterSurvey);

    
    } catch (error) {
            console.log(error);
        res.json({
            msg: "Hubo un error en la creacion del Stutter survey"
        })
    }
}

exports.ticSurvey = async (req,res)=> {

    try {
        
        const { 
            questionOne,
            questionTwo,
            questionThree,
            questionFour,
            userID
            
        } = req.body      
    
        const newTicsSurvey = await TicModel.create({
            
            questionOne,
            questionTwo,
            questionThree,
            questionFour,
            userID
            
            
        })
    
        console.log(newTicsSurvey);
       
    
    } catch (error) {
            console.log(error);
        res.json({
            msg: "Hubo un error en la creacion del Tics Survey"
        })
    }
}

