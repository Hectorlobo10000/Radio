import React, { Component } from 'react';
import { AppRegistry, SafeAreaView, View, Text, StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';
import { play } from '../actions';

class English extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Clásicos en Ingles',
    }

    render() {
        return(
            <SafeAreaView>
                <StatusBar hidden={false}/>
                <Text>{this.props.player}</Text>
                <Button onPress={this.props.play} title="play"/>
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
    return {
        player: state.player,
    }
}

export default connect(mapStateToProps, {play})(English)