  const express = require('express')
  const tyagi1 = require('../logger/logger')
  const tyagi2 = require('../util/helper')
  const tyagi3 = require('../validator/formatter')
  const lodash = require('lodash')
    


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

        
    
    res.send('this is jk tygi api!')
});

router.get('/hello', function (req, res) {
    let nameMonth = ["Jan","Feb","March","April","May","Jun","July","August","Sep","Oct","Nov","December"]
    const chunk = lodash.chunk(nameMonth,3);
    console.log(chunk);

    const oddNo = [1,3,5,7,9,11,13,15,17,19]
     const tail = lodash.tail(oddNo);
     console.log(tail);

     const arr1 = [1,3,5,7]
     const arr2 = [1,3,8,7]
     const arr3 = [1,3,9,7]
     const arr4 = [1,10,5,7]
     const arr5 = [1,3,5,11]
     const mixarr = lodash.union(arr1,arr2,arr3,arr4,arr5)
     console.log(mixarr);

     const a = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","pans Labyrinth"]]
     const b = lodash.fromPairs(a)
     console.log(b);

     
    res.send('jk tyagi 2nd API!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});


module.exports = router;
// adding this comment for no reason