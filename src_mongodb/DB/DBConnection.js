const {MongoClient} = require("mongodb");

    const dbName = "CompanyDB";
    const client = new MongoClient(process.env.URL);
    client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');


module.exports  = collection;

