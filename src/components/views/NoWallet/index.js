import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class NoWallet extends React.Component {

    static navigationOptions = { header: null }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('assets/img/ethereum.png')} />
                <View style={styles.buttonsContainer}>
                    <Button onPress={() => navigate('NewWallet')}>Create new wallet</Button>
                    <Button onPress={() => navigate('LoadWallet')}>Load from existing wallet</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.splashscreenBackground,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,
        padding: measures.defaultPadding,
    },
    logo: {
        alignSelf: 'center',
        width: 128,
        height: 128,
        marginTop: 64
    },
    buttonsContainer: {
        justifyContent: 'space-between',
        height: 104
    }
});