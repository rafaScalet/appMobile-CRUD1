
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';

export default function Home({ route }) {
    const navigation = useNavigation();

    async function logout() {
        await firebase.auth().signOut();

        alert('Deslogado com sucesso!');
        navigation.navigate('Login');
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Seja bem vindo a categoria</Text>

            <Text style={styles.email}>
                {route.params?.user}
            </Text>

            <TouchableOpacity
             style={styles.btn}
                title="VOLTAR"
                onPress={() => navigation.navigate('Home')}
            >VOLTAR PARA A HOME</TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Cor de fundo do container
        padding: 20 // Espaçamento interno do container
    },
    title: {
        fontSize: 36, // Tamanho da fonte do título aumentado
        fontWeight: 'bold',
        marginBottom: 20, // Margem inferior do título
        color: '#ffc4d8', // Cor do título (laranja avermelhado)
    },
    email: {
        fontSize: 20, // Tamanho da fonte do email
        marginBottom: 15, // Margem inferior do email
        textAlign: 'center',
        fontWeight: 'normal', // Estilo de fonte do email
        color: 'black' // Cor do texto do email (preto)
    },
    btn: {
        backgroundColor: '#ffc4d8', // Cor de fundo do botão (verde)
        borderWidth: 2, // Largura da borda do botão
        borderColor: '#333', // Cor da borda do botão (cinza escuro)
        padding: 15, // Espaçamento interno do botão
        borderRadius: 8, // Bordas arredondadas do botão
        marginTop: 20, // Margem superior do botão
        color: 'white', // Cor do texto do botão (branco)
        fontSize: 18, // Tamanho da fonte do botão
        fontWeight: 'bold' // Estilo de fonte do botão
    }
});



