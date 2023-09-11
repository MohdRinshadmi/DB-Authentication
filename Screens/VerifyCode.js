import React, { useState } from "react";
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

export default function VerifyCode(useLinkProps){
const [code, setCode] = useState('')
    return(
<View style = {styles.container}>
    <Text style = {styles.textView}> Enter your OTP</Text>
    <TextInput 
    autoFocus
    keyboardType="numberic"
    style = {styles.input}
    value={code}
    onChangeText={setCode}
    />
    <Button 
    title="Confirm OTP"
    onPress={() => useLinkProps.onSubmit(code)}
    />
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 300,
        borderWidth: 2,
        borderColor: 'lightblue',
        marginVertical: 30,
        padding: 10,
        borderRadius: 8,
        fontSize: 25
    },
    textView: {
        fontSize: 25
    }

})