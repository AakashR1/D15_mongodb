require('dotenv').config();
const express = require("express");
const app = express();
const connectDB = require('./DB/DBConnection');
const companyRouter = require('./routers/router');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',companyRouter);



const PORT = process.env.PORT;
app.listen(PORT, async ()=>{
    try {
        await connectDB(process.env.URL);
        console.log(`server is running on port ${PORT}, http://localhost:3000`);
    } catch (error) {
        console.log(error);
    }
})

