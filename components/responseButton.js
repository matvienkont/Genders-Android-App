import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ResponseButton = (props) =>
{
    return (
                <View style={styles.responseButtonWrapper}>
                    <TouchableOpacity
                    onPress={props.onPress}
                    style={styles.responseButton}>
                            <Text style={styles.responseTextButton}>{props.title}</Text>
                    </TouchableOpacity>
    </View>);     
};

const styles = StyleSheet.create({
    responseButton: {
        width: '100%',        
        paddingTop: 5,
        paddingBottom: 8,
    },
      responseButtonWrapper: {
        backgroundColor:'#9E727A',
        borderColor: '#9E727A',
        borderRadius:10,
        borderWidth: 1,
        marginTop: 5,
        width: "25%",
        marginBottom: 15,
      },
      responseTextButton: {
        fontFamily: 'Roboto',
        fontSize: 30,
        color: "#fffdd0",
        textAlign: "center",
    },
})

export {ResponseButton};
