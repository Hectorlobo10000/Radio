import { StyleSheet } from 'react-native';

const styleSplashScreen = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#3498db',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    logo: {
        width: 300,
        height: 300,
    },
    footer: {
        color: 'white',
    }
});

export {styleSplashScreen};