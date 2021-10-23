import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import Convert from '../components/Convert';

const Home = () => {





    const [convertir, setConvertir] = useState(0)

    const handleChangeConvertir = (texto: string) => {
        const numero = parseFloat(texto)
        setConvertir(numero)
    }
    const [resultado, setResultado] = useState(0)
    const handleCalcular = () => {

        let result: number
        result = convertir * 35.5;
        setResultado(result)

    }
    const mensaje = () => {

    }

    return (
        <View>
            <View style={styles.button}>
                <Button title="Calcular"
                    onPress={handleCalcular}
                />
            </View>

            <Convert title='Origen' cantidad={resultado}></Convert>
            <Text style={styles.texto}> Cantidad a Convertir </Text>
            <TextInput
                style={styles.input}
                defaultValue={convertir.toString()}
                maxLength={10}
                onChangeText={(text) => handleChangeConvertir(text)}
            />

            <Convert title='Destino' cantidad={resultado}  ></Convert>

            <Text style={styles.texto}> Resultado de la Conversion </Text>
            <TextInput
                style={styles.input}
                defaultValue={resultado.toString()}
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