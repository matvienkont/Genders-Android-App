const process_data = () => 
{
    var fs = require('fs');
    var textByLine = fs.readFileSync('../German genders1.txt').toString().split("\n");
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

export {process_data};