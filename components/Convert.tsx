
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Picker } from 'react-native'

interface Props {
    cantidad: number;
    title: string;
}
const Convert = ({ title, cantidad }: Props) => {

    const [selectedValue, setSelectedValue] = useState('');
    const [resultado, setResultado] = useState(0)

    const calcular = () => {
        if (selectedValue === "usb") {

        }
        if (selectedValue === "cord") {

        }
        if (selectedValue === "eu") {

        }
    }

    return (
        <View>
            <View>
                <Text style={styles.texto}>Unidad de {title} </Text>

                <Picker
                    selectedValue={selectedValue}
                    style={{}}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Dolar" value="usd" />
                    <Picker.Item label="Cordobas" value="cord" />
                    <Picker.Item label="Euros" value="eu" />
                </Picker>
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