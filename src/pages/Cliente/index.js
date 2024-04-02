import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';

export default function Cadastro() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    async function cadastrar() {
        try {
            await firebase.database().ref('clientes').push({
                nome: nome,
                email: email,
                telefone: telefone,
            });
            setNome('');
            setEmail('');
            setTelefone('');
            alert('CADASTRO DE CLIENTE EFETUADO COM SUCESSO!');

        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Clients</Text>

            <TextInput
                style={styles.input}
                placeholder='Name'
                placeholderTextColor={'#1E90FF'}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setNome(texto)}
                value={nome}
            />

            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor={'#1E90FF'}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder='Cellphone'
                placeholderTextColor={'#1E90FF'}
                onChangeText={(texto) => setTelefone(texto)}
                value={telefone}
            />

            <Button 
                title="Sign-Up" 
                onPress={cadastrar} 
            />
            <TouchableOpacity style={{ marginTop: 25 }} onPress={() => navigation.navigate('Home')}>
                <Text>Back to home</Text>
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
    voltar: {
        backgroundColor: 'red',

    }
});
