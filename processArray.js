export const processArray = (words, pos) =>    
    {
        //console.log("***************", words[pos].word, " ", words[pos].article);
        words.splice(pos, 1);

        
      //console.log("deleted");
      for(let i = 0; i<words.length; i++)
      console.log(words[i].word, " ", words[i].article);
      //console.log(words.length);
    }