const express = require('express');
const controller = require('../controllers/bookController')

const router = express.Router();


router.post('/creatBook', controller.createBook);

router.post('/createAuthor', controller.createAuthor);

router.get('/booksByChetanBhagat', controller.booksByChetanBhagat);

router.get('/authorOfTwoStates', controller.authorOfTwoStates);

router.get('/bookBtw50_100', controller.bookBtw50_100);


module.exports = router;