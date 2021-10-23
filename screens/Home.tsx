import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import Convert from '../components/Convert';

const Home = () => {

    const handleCalcular = () => {


    }

    const mensaje = () => {

    }

    const [convertir, setConvertir] = useState(0)

    const handleChangeConvertir = (texto: string) => {
        const numero = parseFloat(texto)
        setConvertir(numero)
    }

    return (
        <View>
            <View style={styles.button}>
                <Button title="Calcular"
                    onPress={handleCalcular}
                />
            </View>

            <Convert title='Origen'></Convert>
            <Text style={styles.texto}> Cantidad a Convertir </Text>
            <TextInput
                style={styles.input}
                maxLength={10}
                defaultValue={convertir.toString()}
            />
            <Convert title='Destino'></Convert>


            <Text style={styles.texto}> Resultado de la Conversion </Text>
            <TextInput
                style={styles.input}
                maxLength={10}
            />



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
        position: 'absolute',
        bottom: 300,
        marginLeft: 150,

    }
})