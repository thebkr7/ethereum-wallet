import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Button } from 'components/widgets';
import * as Utils from 'common/utils';
import { colors, measures } from 'common/styles';
import ConfirmBox from './ConfirmBox';

export class ConfirmMnemonics extends React.Component {
    
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Create Wallet"
    });

    state = { mnemonics: null };

    componentWillMount() {
        const { mnemonics } = this.props.navigation.state.params;
        this.setState({ mnemonics });
    }

    @autobind
    onPressConfirm() {
        if (this.refs.confirm.isValidSequence()) {
            const { mnemonics } = this.state;
            const wallet = Utils.loadWalletFromMnemonics(mnemonics);
            this.props.navigation.navigate('WalletsOverview', { wallet, replaceRoute: true });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View />
                <ConfirmBox ref="confirm" mnemonics={this.state.mnemonics} />
                <View style={styles.buttonsContainer}>
                    <Button onPress={this.onPressConfirm}>Confirm & open wallet</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.defaultBackground
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    mnemonicsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '80%'
    },
    mnemonic: {
        margin: 4
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        height: 104
    }
});