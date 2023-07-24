import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Infos from '../screens/Infos';
import MaisInfos from '../screens/MaisInfos';
import InfoAdicionais from '../screens/InfoAdicionais';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Infos" component={Infos} options={{headerShown: false}} />
            <Stack.Screen name="MaisInfos" component={MaisInfos} options={{headerShown: false}} />
            <Stack.Screen name="InfoAdicionais" component={InfoAdicionais} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export default Routes;