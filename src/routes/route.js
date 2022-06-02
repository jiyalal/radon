const express = require('express')
  const tyagi1 = require('../logger/logger')
  const tyagi2 = require('../util/helper')
  const tyagi3 = require('../validator/formatter')
    


const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
          tyagi1.welcome()
          tyagi2.printDate()
          tyagi2.getBatchInfo()
          tyagi2.printmonth()
        tyagi3.trim()
        tyagi3.changeToLowerCase()
        tyagi3.changeToUpperCase()

        
    
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason