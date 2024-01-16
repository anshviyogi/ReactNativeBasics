import React from 'react'
import {SafeAreaView, View, Text, StyleSheet, useColorScheme} from 'react-native'

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme();
    
    return (
            <View style={styles.container}>
                <Text style={isDarkMode === 'light' ? styles.darkColor : styles.whiteColor}>Hello Hi</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    whiteColor: {
        backgroundColor:"#000000",
        color:'#ffffff'
    },
    darkColor: {
        color:"#000000"
    }
})

export default AppPro