export const wordParser = (words, pos) =>
{    
    if(words[0]==" ")
    {
        return "";
    }
    else 
    {
        var wordArray = [];
        for(let i = 0; i < 50; i++)
            wordArray[i]=(words[i].word);
        //console.log(wordArray);
        }       
        return wordArray[pos];
}