//importacion

const express			= require("express")
const router			= express.Router()

const surveyController = require("../controllers/surveyController")

//rutas post

router.post("/tdah", surveyController.TDAHsurvey)

router.post("/dn", surveyController.DNsurvey)

router.post("/ConductDisorder", surveyController.ConductDisSurvey)

router.post("/stutter", surveyController.stutterSurvey)

router.post("/tics", surveyController.ticSurvey)
//rutas get

router.get ("/tdah/:id", surveyController.getFeed)

//router.get("/tdah", surveyController.TDAHdetails)

module.exports = router