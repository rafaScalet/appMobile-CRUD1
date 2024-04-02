
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function logar() {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((value) => {
                navigation.navigate('Home', { user: value.user.email })
                //Navegando usuario para Home e levando o email do usuario para a tela home

            })
            .catch((error) => {
                alert('Ops algo deu errado!');
                return;
                //Der algum erro mostrar o alert e barrar aqui.
            })

        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SIGN-IN</Text>
            <hr></hr>

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

            <Button
                title="Sign-in"
                onPress={logar}
            />
            <TouchableOpacity style={{ marginTop: 25 }} onPress={() => navigation.navigate('Cadastro')}>
                <Text>Create an account</Text>
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
    }
});
