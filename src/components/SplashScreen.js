import React, { Component } from 'react';
import { SafeAreaView, View, Text, StatusBar, Image } from 'react-native';
import { styleSplashScreen } from '../style/styles';

export default class SplashScreen extends Component {
    render() {
        return(
            <SafeAreaView style={styleSplashScreen.wrapper}>
                <StatusBar hidden={true}/>
                <Text style={styleSplashScreen.title}>Bienvenido</Text>
                <Image style={styleSplashScreen.logo} source={require('../assets/ic_logo_long.png')}/>
                <Text style={styleSplashScreen.footer}>Otro proyecto más de Honduras en sus Manos</Text>
            </SafeAreaView>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Tabs');
        }, 2000);
    }
}