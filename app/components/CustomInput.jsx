import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Colors } from '../utils/colors'


export default function  CustomInput ({ Logo, placeholder }) {

    return (
        <>
            <View style={styles.inputContainer}>
                 {Logo} 
                <View style={styles.secondary_inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}

                    />         
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
  
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        backgroundColor: Colors.input_field,
    },
    input: {
        color: Colors.txt_grey,
        marginLeft: 10,
       
    },
  
});