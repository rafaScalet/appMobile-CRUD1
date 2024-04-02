
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';

export default function Cadastro() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');

    async function cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value) => {
                navigation.navigate('Home', { user: value.user.email })
                firebase.database().ref('Cadastros').child(value.user.uid).set({
                    nome: nome,
                    telefone: telefone,
                    idade: idade,
                    sexo: sexo,
                })
            })
            .catch((error) => {
                alert('Ops algo deu errado!');
                console.log(error);
                return;
            })

        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SIGN-UP</Text>

            <TextInput
                style={styles.input}
                placeholder='Name'
                placeholderTextColor={"#1E90FF"}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setNome(texto)}
                value={nome}
            />

            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor={"#1E90FF"}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor={"#1E90FF"}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setPassword(texto)}
                secureTextEntry={true}
                value={password}
            />

            <TextInput
                style={styles.input}
                placeholder='Cellphone'
                placeholderTextColor={"#1E90FF"}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setTelefone(texto)}
                value={telefone}
            />

            <TextInput
                style={styles.input}
                placeholder='Age'
                placeholderTextColor={"#1E90FF"}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setIdade(texto)}
                value={idade}
            />

            <TextInput
                style={styles.input}
                placeholder='Gender'
                placeholderTextColor={"#1E90FF"}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setSexo(texto)}
                value={sexo}
            />

            <Button
                title="Cadastrar"
                onPress={cadastrar}
            />

            <TouchableOpacity style={{ marginTop: 25 }} onPress={() => navigation.navigate('Login')}>
                <Text>Já tenho uma conta</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '',
        padding: 20
    },
    title: {
        color: '#1E90FF',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20
    },
    texto: {
        fontSize: 18,
        marginBottom: 10
    },
    input: {
        marginBottom: 10,
        padding: 12,
        borderWidth: 2,
        borderColor: '#1E90FF',
        borderRadius: 8,
        width: '75%',
        fontSize: 16,
    },
});