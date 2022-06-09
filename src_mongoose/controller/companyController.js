const Company = require('../models/conpanyModel');

const addCompany =async (req,res)=>{
    try {
        await Company.create(req.body);
        res.send("company added...")
    } catch (error) {
        console.log(error);
    }
}


const getCompany =async (req,res)=>{
    try {
        const data = await Company.find();
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addCompany,
    getCompany
}