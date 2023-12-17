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
        marginTop: 20
    },
    formWrapper: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: '#FFFF',
        opacity: 60
    },
    textInput: {
        width: '100%',
        height: 42,
        padding: 2,
        paddingLeft: 12,
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 1.5,
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
    pressableText: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 12
    },
    signUpText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: "600",
        textDecorationLine: "underline",
        fontSize: 16
    }

})