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

    console.log(req.body)

    
    

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

    

    console.log(newTDAHsurvey);


} catch (error) {
        console.log(error);
    res.json({
        msg: "Hubo un error en la creacion del TDAHsurvey"
    })
}

}

exports.TDAHgetSurvey = async(req,res) => {
    const allSurveys = await TdahModel.find({})
    res.json ({
        msg: 'se obtuvieron las siguientes encuestas',
        data:allSurveys
    })
}

exports.getFeed = async(req,res) => {

    const { id } = req.params
    console.log(id)
	const gettinUser = await TdahModel.findById({id})
    console.log(gettinUser)
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

