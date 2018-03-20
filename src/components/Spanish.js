import React, { Component } from 'react';
import { SafeAreaView, View, Text, StatusBar, Button } from 'react-native';

export default class Spanish extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'Clásicos en Español',
    }

    render() {
        
        return(
            <SafeAreaView>
                <StatusBar hidden={false}/>
                <Text>Spanish</Text>
                <Button onPress={() => this.play()}title='Play'/>
            </SafeAreaView>
        )
    }
}