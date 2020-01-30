import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';



export const responseToAnswer = (verity) =>
{   
    return fieldResponse(verity);
};

// export const clearer = (setTimers, TAS) =>
// {
//     console.log("start");
//         setTimers(true);
        
//         startTimer(TAS, setTimers);
//         console.log("finish");
// };

const fieldResponse = (truth) =>
{
    if(truth == "NaN")
        return (<View style={styles.responseToAnswerWrapper}>
                    <Text style={styles.rightOrNot}>Let's get started</Text>
            </View>);
    if(truth)
        return (
                <View style={styles.responseToAnswerWrapper}>
                        <Text style={styles.rightOrNot}>Good job!</Text>
                </View>);
    if(!truth) 
        return (
        
        <View style={styles.responseToAnswerWrapper}>
                <Text style={styles.rightOrNot}>Rise after fall</Text>
        </View>);
}




const styles = StyleSheet.create({
    rightOrNot:
    {
        fontFamily: 'Roboto',
        fontSize: 13,
        color: "#98FB98"
    },
    responseToAnswerWrapper:
    {
        marginTop: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: "center"
    }
})

