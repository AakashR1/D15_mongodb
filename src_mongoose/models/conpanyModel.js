const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    department_name:{
        type:String,
        required:[true,'department name required'],
        validate:{
            validator:function(value){
                return ["JavaScript", "Java", "Python", "Node.js"].includes(value);
            },
            message:props=>`${props.value} is not a valide language for our company`
        }
    },
    department_head:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return !["Elon"].includes(value);
            },
            message:props=>`${props.value} is ban in this company`
        }
    },
    department_address:{
        type:String,
        required:true,
        
    },
    Employee_number:{
        type:Number,
        required:true,
        min:[10,'Employee must greater then 10 but got {VALUE}'],
        max:[500,'Employee can not be more then 500 but got {VALUE}']
    }
});

const Company = mongoose.model('Company',companySchema);

module.exports = Company;