const express = require('express');
const router = express.Router();
const companyContoller = require('../controller/companyController');

router.post('/addCompany',companyContoller.addCompany);
router.get('/getCompany',companyContoller.getCompany);

module.exports = router;