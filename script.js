var fs = require('fs');
var textByLine = fs.readFileSync('German genders1.txt').toString().split("\n");
var length = (textByLine).length;
var textApart = [];

for(let i = 0; i<length; i++)
{
    textApart[i]=textByLine[i].split("\t");
}


var express = require('express');
var app = express();


var csp = require('express-csp');
 
csp.extend(app, {
    policy: {
        directives: {
            'default-src': ['self'],
            'script-src': ['self']
        }
    }
    });

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const connect = () => 
{
    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017/";
    return MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}

const mongodbQuery = async () =>
{
    let dbsConnection = await connect();
    let db0 = dbsConnection.db("DB_words");
    let table = db0.collection("words");
    let response = [];

    for(let i = 0; i<50; i++)
    {
        let rand = getRndInteger(0, 5980); 
        response[i] = await table.findOne({_id: rand})
        .then((result) => result)
    }
    return response;
}


app.get('/words', async (req, res) => 
{
    let arrayOfWords = await mongodbQuery()
    .then((result) => res.send(result));
});


app.listen(5000, ()=> console.log("Server is listening on PORT 5000"));

