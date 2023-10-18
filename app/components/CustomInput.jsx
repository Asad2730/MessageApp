import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Colors } from '../utils/colors';

export default function CustomInput({ Logo, placeholder ,SecondaryLogo}) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.icon1Container}>{Logo}</View>
      <View style={styles.secondary_inputContainer}>
        <TextInput style={styles.input} placeholder={placeholder} />
      </View>
      <View style={styles.icon2Container}>{SecondaryLogo}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    backgroundColor: Colors.input_field,
  },
  secondary_inputContainer: {
    flex: 1,
    marginRight: 10,
    marginLeft:10,
  },
  input: {
    color: Colors.txt_grey,
  },
  icon1Container: {
    justifyContent: 'flex-start',
  },
  icon2Container: {
    justifyContent: 'flex-end',
  },
});
