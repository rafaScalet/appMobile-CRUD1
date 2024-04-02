import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Categoria from './pages/Categoria';
import Produto from './pages/Produto';
import Cliente from './pages/Cliente';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Categoria" component={Categoria} options={{ headerShown: false }} />
                <Stack.Screen name="Produto" component={Produto} options={{ headerShown: false }} />
                <Stack.Screen name="Cliente" component={Cliente} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Routes;
