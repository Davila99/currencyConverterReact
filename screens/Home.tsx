import React from 'react'
import { View, Text,Button,StyleSheet,TextInput } from 'react-native'
import Convert from '../components/Convert';

const Home = () => {
    return (
        <View>
            <Convert></Convert>
            <Convert></Convert>
            <Text style={styles.texto}> Resultado de convertir </Text>
            <TextInput
             style={styles.input}
            //  defaultValue={resultado.toString()}
             maxLength={10}
              />
            <View style={styles.button}>
                <Button title="Calcular"
                    
                />

            </View>
        </View>
    )
}

export default Home
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