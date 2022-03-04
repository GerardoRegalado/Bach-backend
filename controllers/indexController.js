//controllers

const res = require("express/lib/response")

exports.getHome = (req,res) => {

    res.json({
        msg: "Status Activo"
    })
}