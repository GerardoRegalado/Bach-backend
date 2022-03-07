const express = require("express")
const router = express.Router()

const authorization = require("./../middlewares/authorization")

const userController = require("./../controllers/usersController")
const surveyController = require ("./../controllers/surveyController")




router.post("/create", userController.create)
router.get("/create", userController.getUserID)


router.post("/login", userController.login)

router.get("/verifyToken", authorization, userController.verifyToken)


module.exports = router

