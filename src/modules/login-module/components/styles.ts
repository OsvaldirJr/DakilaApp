import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: Platform.OS === 'ios' ? 42 : 32,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
    },
    formWrapper: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 20
    },
    scrollView: {
        width: '100%',
        marginBottom: 2
    },
    text: {
        marginTop: 6,
        fontSize: 14,
        color: '#FFFF',
        opacity: 60
    },
    textInput: {
        width: '100%',
        height: 46,
        paddingLeft: 12,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#FFFF',
        marginBottom: 12
    },
    button: {
        width: '100%',
        height: 42,
        marginTop: 12,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6
    },
    textButton: {
        color: '#000'
    },
    paymentScreenContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: Platform.OS === 'ios' ? 42 : 32,
        paddingHorizontal: 30,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 50,
        fontSize: 24,
        fontWeight: '800',
        color: '#FFF',
    },
    paymentText: {
        width: '100%',
        textAlign: 'justify',
        fontSize: 16,
        color: '#FFF'
    },
    paymentTextBold: {
        fontWeight: '800'
    },
    paymentValueText: {
        width: '100%',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 20,
        color: '#FFF',
    },
})