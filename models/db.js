//INITIALIZING MONGOCLIENT======================
let MongoClient = require('mongodb').MongoClient;

//Connection URL
const url = 'mongodb://localhost:27017';

//Database Name
const dbName = 'loginDB';

//Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    console.log("Connected successfully to the server!!!");

    client.close();
});
