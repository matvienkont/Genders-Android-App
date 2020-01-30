import axios from 'axios';

const axiosGet = (words, setWords) =>
{
        axios.get('http://192.168.31.202:5000/words')
        .then (res => {
            setWords(res.data)
        })
            .catch(err=>
            {
                console.log(err);
            })
                
            console.log("useEffect started");

    return words;
    //console.log(words);
}
export {axiosGet};
