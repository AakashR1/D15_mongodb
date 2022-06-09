const Company = require('../models/conpanyModel');

const greaterThen =async (req,res)=>{
    try {
        const data = await Company.find({ Employee_number: {$gt : req.params.employee}});
        res.send(data);
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

const lessThenandEqual =async (req,res)=>{
    try {
        const data = await Company.find({ Employee_number: {$lte : req.params.employee}});
        res.send(data);
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}
const andOperator =async (req,res)=>{
    try {
        const data = await Company.find({ $and:[{ Employee_number: {$lte : req.params.employee}}, {department_head:{$eq :"rahul"}} ]});
        res.send(data);
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}


module.exports = {
    greaterThen,
    lessThenandEqual,
    andOperator
}