import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 4,
        paddingHorizontal: 4,
        rowGap:4,
        backgroundColor:'#fff'
        // flex-1 pt-4 px-4 gap-y-4 bg-white60
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
    cardTopImage:{
        width:'29%',
        height:"100%"
        // w-[29vw] h-fit
    },

    cardTopFirstText:{
        paddingLeft:2,
        textAlign:'justify',
        color:'#000',
        fontSize:10,
        fontWeight:"500",
        paddingBottom:8,
        width:'62%'
        // pl-2 text-justify text-black text-sm font-medium pb-8 w-[62vw]
    },
    cardBottom:{
        rowGap:4,
        alignItems: 'center'
        // gap-y-4 items-center
    },
    cardBottomText:{
        color:'#000',
        width:'100%',
        fontSize:16,
        // text-black w-full font-medium
    },
    cardBottomButton:{
        borderRadius: 6, 
        width:48
        // rounded-md w-48
    },
    cardBottomGradient:{
        borderRadius: 6, 
        elevation: 8,
        height:10,
        alignItems: 'center',
        justifyContent:'center',

        // h-10 items-center justify-center rounded-md
    },
    cardBottomsecondText:{
        color:'#000',
        

        // text-black text-base font-normal
    },
    cardBottomThirdText:{
        color:'#000',
        width:'100%',
        fontSize:10,
        fontWeight:"500",
        // text-black w-full text-sm font-medium
    },
    cardBottomFourthText:{
        color:'#000',
        width:'100%',
        textAlign:'center',
        fontWeight:'bold'
        // text-black w-full text-center text-base font-bold
    },
    cardBottomSecondButton:{
        marginBottom:10,
        width:36,
        borderRadius: 6, 
        // mb-10 w-36 rounded-md
    },
    linerGradient:{
        elevation: 8, 
        height:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 6, 
        // h-10 items-center justify-center rounded-md
    },
    linerGradientText:{
        elevation: 8,
        color:'#000',
        // text-black text-base font-normal
    }

})