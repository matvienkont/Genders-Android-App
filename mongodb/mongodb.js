
var MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'DB_words';

const process_data = () => 
{
    var fs = require('fs');
    var textByLine = fs.readFileSync('../German genders.txt').toString().split("\n");
    var length = (textByLine).length;
    var textApart = [];

    for(let i = 0; i<length; i++)
    {
        textApart[i]=textByLine[i].split("\t");
        textApart[i].push("", 0);
    }
    console.log(textApart);
    return textApart;
};

let words = process_data();
let length = words.length;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err);
  
  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database: ${dbName}`);

  
  var dbo = db.db("DB_words");

  for(let i = 0; i<length; i++)
    {
        var myobj = { _id: i, word: `${words[i][0]}`, article: `${words[i][1]}`, date: '', rate: '0' };
        dbo.collection('words').insertOne(myobj, (err,res) => 
        {
            if (err) throw err;
            console.log("1 document inserted");
        });
    }
    db.close();
})




