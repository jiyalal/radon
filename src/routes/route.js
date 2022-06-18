const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/getSorted", CowinController.getSorted)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getSession", CowinController.getSession)
router.get("/getWeather", CowinController.getWeather)
router.post("/postMeme", CowinController.memePost)
router.get("/getImages", CowinController.getImages)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;