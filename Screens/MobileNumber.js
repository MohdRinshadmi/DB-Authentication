import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button} from "react-native";

export default function MobileNumber(useLinkProps){

const [phoneNumber, setPhoneNumber] = useState(null);

    return(
        <View style = {styles.container}>
            <Text style = {styles.textView}>Enter Phone Number</Text>
            <TextInput 
            autoFocus
            style = {styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            />
            <Button 
            title="Sign In with OTP"
            onPress={() => useLinkProps.onSubmit(phoneNumber)}
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