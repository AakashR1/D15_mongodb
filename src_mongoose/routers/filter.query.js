const express = require('express');
const router = express.Router();
const companyContoller = require('../controller/filter.contoller');

router.get('/GT/:employee',companyContoller.greaterThen);
router.get('/LT/:employee',companyContoller.lessThenandEqual);
router.get('/AND/:employee',companyContoller.andOperator);



module.exports = router;