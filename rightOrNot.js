export const rightOrNot  = (value, words, pos) =>
{
    //console.log(value, "___________", words[pos].article);
    if(value == words[pos].article)
    return true;
    else 
    return false;
} 