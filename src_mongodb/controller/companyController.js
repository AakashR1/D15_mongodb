const collection = require('../DB/DBConnection');
const addCompany =async (req,res)=>{
    try {
        await collection.insertOne(req.body);
        res.send("company added...")
    } catch (error) {
        console.log(error);
    }
}


const getCompany =async (req,res)=>{
    try {
        const data = await collection.find().toArray();
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addCompany,
    getCompany
}