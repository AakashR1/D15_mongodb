const express = require('express');
const router = express.Router();
const companyContoller = require('../controller/companyController');

router.post('/addCompany',companyContoller.addCompany);
router.get('/getCompany',companyContoller.getCompanies);
router.get('/SortedCompanyWithEmployee',companyContoller.SortedCompanyWithEmployee);
router.get('/getCompanyLimit/:number',companyContoller.getCompaniesLimit);
router.get('/getSingleCompany/:id',companyContoller.getSingleCompany);
router.get('/findOne/:department',companyContoller.findOne);
router.delete('/findOneAndDelete/:department',companyContoller.findOneAndDelete);
router.delete('/deleteMany/:address',companyContoller.deleteMany);
router.delete('/deleteOne/:address',companyContoller.deleteOne);
router.delete('/findByIdAndDelete/:id',companyContoller.findByIdAndDelete);
router.put('/replaceOne/:id',companyContoller.replaceOne);
router.patch('/findByIdAndRemove/:id',companyContoller.findByIdAndRemove);
router.patch('/findByIdAndUpdate/:id',companyContoller.findByIdAndUpdate);
router.put('/findOneAndReplace/:address',companyContoller.findOneAndReplace);
router.patch('/findOneAndUpdate/:address',companyContoller.findOneAndUpdate);
router.patch('/updateMany/:address',companyContoller.updateMany);
router.patch('/updateOne/:address',companyContoller.updateOne);

module.exports = router;