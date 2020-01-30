import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ResponseButton } from './components/responseButton.js';
import { rightOrNot } from './rightOrNot.js';
import { responseToAnswer } from './ResponseToAnswer.js';
import { axiosGet } from './axiosGet.js';
import { processArray } from './processArray.js';



export default function App() {

  const[words, setWords] = useState([" "]);
  const[position, setPosition] = useState(0);
  const[verity, setVerity] = useState("NaN");
  const[timer, setTimer] = useState('false');
  const[controller, setController] = useState();


  useEffect(()=>
    {
        axiosGet(words, setWords);
    }, []);

  const checkPosition = (position, value) =>
    {
      console.log("**********************************************");
      console.log("CHECK Verity: ", value);
      //console.log(position);
      if(value && position==words.length-1)
      {
        processArray(words, words.length-1);
        setPosition(0);
        return 0;
      }
      if(position == words.length-1)
      {
        setPosition(0);
        return 0;
      }
      if(value && words.length-1==1)
      {
        axiosGet(words, setWords);
        setPosition(0);
        return 0;
      }
      
      if(value)
      {
        processArray(words, position)
        setPosition(position);
        return 0;
      }
      if(!value)
      {
        setPosition(position+1);
        return 0;
      }
    }

    const tappedScreen = () => 
    {
        console.log("Screen touched");
    }
    const stopTimer = () =>
    {
      
      clearTimeout(controller);
    }
    const startTimer = () =>
    { 
      
      setController(setTimeout(() => setTimer(false), 1500));
    }
    const SETSEVERITY = async (setVerity, value) =>
    {
        setVerity(value);
        checkPosition(position, value);
    }


  return (
    <View style={styles.container}>
      <View style={styles.pageWrapper}>
      <TouchableOpacity activeOpacity={.95} onPress={()=>tappedScreen()} style={styles.tapScreen}>

          <Text style={styles.word}>{words[position].word}</Text>
              <View style={styles.timerWrapper}>
                {timer && responseToAnswer(verity, setTimer)}
              </View>
            <View style={styles.buttonsWrapper}>      
              <ResponseButton title="Der" onPress={() => { SETSEVERITY(setVerity, rightOrNot("der", words, position)); startTimer(); stopTimer(); setTimer(true);}}/>
              <ResponseButton title="Die" onPress={() => { SETSEVERITY(setVerity, rightOrNot("die", words, position)); startTimer(); stopTimer(); setTimer(true);}}/>
              <ResponseButton title="Das" onPress={() => { SETSEVERITY(setVerity, rightOrNot("das", words, position)); startTimer(); stopTimer(); setTimer(true);}}/>
            </View>
        
      </TouchableOpacity>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  tapScreen: 
  {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: 
  {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonsWrapper:
  {
    position: 'absolute',
    bottom: 70,
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-around'
  },
    word:
  {
      fontFamily: 'Roboto',
      fontSize: 30,
      color: "#fffdd0"    
  },
  pageWrapper:
  {
    height: '100%',
    width: '100%'
  },
  timerWrapper: 
  {
    width: '70%',
    height: '10%',
  }
  
});
