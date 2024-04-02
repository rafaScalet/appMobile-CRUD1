
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';

export default function Home({ route }) {
    const navigation = useNavigation();

    async function logout() {
        await firebase.auth().signOut();

        alert('Deslgoado com sucesso!');
        navigation.navigate('Login');
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Seja bem vindo</Text>

            <Text style={styles.email}>
                {route.params?.user}
            </Text>

            <div class="botoes">
                <TouchableOpacity
                    title="Deslogar"
                    style={styles.btn}
                    onPress={logout}
                >DESLOGAR</TouchableOpacity>
                <TouchableOpacity
                    title="CATEGORIA"
                    style={styles.btn}
                    onPress={() => navigation.navigate('Categoria')}
                >CATEGORIA</TouchableOpacity>

                <TouchableOpacity
                    title="PRODUTO"
                    style={styles.btn}
                    onPress={() => navigation.navigate('Produto')}
                >PRODUTOS</TouchableOpacity>

                <TouchableOpacity
                    title="CLIENTE"
                    style={styles.btn}
                    onPress={() => navigation.navigate('Cliente')}
                >CLIENTES</TouchableOpacity>
            </div>
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
        color: '#ff091e',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20
    },
    email: {
        fontSize: 20, // Tamanho da fonte do email
        marginBottom: 15, // Margem inferior do email
        textAlign: 'center',
        fontWeight: 'normal', // Estilo de fonte do email
        color: '#333' // Cor do texto do email (cinza escuro)
    },
    btn: {
        backgroundColor: '#ff091e', // Cor de fundo do botão (verde)
        borderWidth: 2, // Largura da borda do botão
        borderColor: 'black', // Cor da borda do botão
        padding: 15, // Espaçamento interno do botão
        borderRadius: 8, // Bordas arredondadas do botão
        marginTop: 20, // Margem superior do botão
        color: 'white', // Cor do texto do botão (branco)
        fontSize: 18, // Tamanho da fonte do botão
        fontWeight: 'bold', // Estilo de fonte do botão
        textAlign: 'center',
    }
});


