const Company = require('../models/conpanyModel');

const addCompany =async (req,res)=>{
    try {
        await Company.create(req.body);
        res.send("company added...")
    } catch (error) {
        res.send({msg:error.message})
        console.log(error);
    }
}

const getCompanies =async (req,res)=>{``
    try {
        const data = await Company.find();
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}

const SortedCompanyWithEmployee =async (req,res)=>{
    try {
        const data = await Company.find().sort({Employee_number:1});
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}


const getCompaniesLimit =async (req,res)=>{
    try {
        const data = await Company.find().limit(req.params.number);
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}

const getSingleCompany = async (req,res)=>{
    try {
        const company = await Company.findById(req.params.id).lean()
        console.log(company);
        res.send(200,company)
    } catch (error) {
        console.log(error);
    }
}


const findOne = async (req,res)=>{
    try {
        const company = await Company.findOne({department_address:req.params.department})
        
        res.send(200,company)
    } catch (error) {
        console.log(error);
    }
}


const deleteMany = async (req,res)=>{
    try {
        const company = await Company.deleteMany({department_address:req.params.address})
        res.send(200,'Companies deleted....')
    } catch (error) {
        console.log(error);
    }
}

const deleteOne = async (req,res)=>{
    try {
        const company = await Company.deleteOne({department_address:req.params.address})
        res.send(200,'Companies deleted....')
    } catch (error) {
        console.log(error);
    }
}

const findOneAndDelete = async (req,res)=>{
    try {
        const company = await Company.findOneAndDelete({department_address:req.params.department})
        res.send(200,"Company deleted...")
    } catch (error) {
        console.log(error);
    }
}

const findByIdAndDelete = async (req,res)=>{
    try {
        const company = await Company.findByIdAndDelete(req.params.id)
        res.send(200,'Companies deleted....')
    } catch (error) {
        console.log(error);
    }
}

const findByIdAndRemove = async (req,res)=>{
    try {
        const company = await Company.findByIdAndDelete(req.params.id)
        res.send(200,'removed....')
    } catch (error) {
        console.log(error);
    }
}

const findByIdAndUpdate = async (req,res)=>{
    try {
        const company = await Company.findByIdAndUpdate(req.params.id,req.body);
        res.send(200,'updated....')
    } catch (error) {
        console.log(error);
    }
}

const replaceOne = async (req,res)=>{
    try {
        const company = await Company.replaceOne(req.params.address,req.body);
        res.send(200,'Replaced....')
    } catch (error) {
        console.log(error);
    }
}

const findOneAndReplace = async (req,res)=>{
    try {
        const company = await Company.findOneAndReplace(req.params.address,req.body);
        res.send(200,'replaced....')
    } catch (error) {
        console.log(error);
    }
}
const findOneAndUpdate = async (req,res)=>{
    try {
        const company = await Company.findOneAndUpdate(req.params.address,req.body);
        res.send(200,'updated....')
    } catch (error) {
        console.log(error);
    }
}
const updateMany = async (req,res)=>{
    try {
        const company = await Company.updateMany({department_address:req.params.address},req.body);
        res.send(200,'updated....')
    } catch (error) {
        console.log(error);
    }
}

const updateOne = async (req,res)=>{
    try {
    const company = await Company.updateOne({department_address:req.params.address},req.body);
        res.send(200,'updated....')
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    addCompany,
    getCompanies,
    getSingleCompany,
    deleteMany,
    deleteOne,
    findByIdAndDelete,
    findByIdAndRemove,
    findByIdAndUpdate,
    findOne,
    findOneAndDelete,
    findOneAndReplace,
    findOneAndUpdate,
    replaceOne,
    updateMany,
    updateOne,
    getCompaniesLimit,
    SortedCompanyWithEmployee
}