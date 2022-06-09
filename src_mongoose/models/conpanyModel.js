const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    department_name:{
        type:String,
        required:true
    },
    department_head:{
        type:String,
        required:true,
        unique:true
    },
    department_address:{
        type:String,
        required:true
    }
});

const Company = mongoose.model('Company',companySchema);

module.exports = Company;