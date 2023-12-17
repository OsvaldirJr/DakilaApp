import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 4,
        paddingHorizontal: 4,
        rowGap:4,
        backgroundColor:'#fff'
        //  pt-4 px-4 gap-y-4 bg-white60
    },
    imageTop:{
        width: '100%',
        height: 44
        // w-full h-44
    },

    cardTop:{
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between"
        // w-full justify-between flex-row
    },
    cardTopText:{
        color:'#000',
        fontSize:10,
        fontWeight:"500",
        flex: 1
        // text-black text-sm font-medium flex-1
    },
    cardTopImage:{
        width:'auto',
        height: '100%'
        // w-auto h-full
    },
    text:{
        color:'#000',
        fontSize:10,
        fontWeight:"500",
        width: '100%'
        // text-black w-full text-sm font-medium
    },
    image:{
        width:'100%',
        height: 'auto'
    },
    cardMiddle:{
        alignItems: 'center'
        // items-center
    },
    bdmButton:{
        marginBottom: 10,
        width:36,
        borderRadius: 6 
        // mb-10 w-36 rounded-md
    },
    bdmGradient:{
        height: 10,
        borderRadius: 6 ,
        alignItems: 'center',
        justifyContent:"center",
        elevation: 8
        // h-10 rounded-md items-center justify-center
    },
    bdmText:{
        color:'#000',
        fontSize:16
        // text-black text-base font-normal

    }
})