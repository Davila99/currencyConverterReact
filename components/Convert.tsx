
import React from 'react'
import { View, Text,StyleSheet,TextInput } from 'react-native'

const Convert = () => {
    return (
        <View>
               <View>
           <Text style={styles.texto}>Unidad de  Origen </Text>
           <TextInput 
            style={styles.input} 
            maxLength={2}
            

            />
      </View>
        </View>
    )
}

export default Convert



const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderColor: 'green',
        backgroundColor: 'gray'

    },
    texto: {
        textAlign: 'center'
    },
    button: {
        marginTop: 20
    }
})