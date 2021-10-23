
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Picker } from 'react-native'

interface Props {
    // origin: 'usd' | 'cord' | 'eu';
    title: string;
}
const Convert = ({ title }: Props) => {

    const [selectedValue, setSelectedValue] = useState('');

    const [origin, setOrigin] = useState('')
    const [destino, setDestino] = useState('')


    const calcular = () => {

    }

    return (
        <View>
            <View>
                <Text style={styles.texto}>Unidad de {title} </Text>

                <TextInput
                    style={styles.input}
                    defaultValue={origin}
                    maxLength={2}
                    onChangeText={setOrigin}

                />

                {/* <Picker
                    selectedValue={selectedValue}
                    style={{}}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Dolar" value="usd" />
                    <Picker.Item label="Cordobas" value="cord" />
                    <Picker.Item label="Euros" value="eu" />
                </Picker> */}
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
    },
    piker: {
        height: 50,
        width: 150
    }
})