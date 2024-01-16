import { ScrollView, StyleSheet, Text, View } from "react-native"

function ElevatedCard(){
    return (
        <View style={{margin:10}}>
            <Text style={styles.heading}>Elevated Card</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>for</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>a</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize:24,
        fontWeight:"bold",
        marginBottom:10
    },
    card: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        borderRadius:4,
        margin:8
    },
    cardElevated: {
        backgroundColor:"#CAD5E2",
        shadowOffset: {
            height:10,
            width:10
        },
        shadowColor:"red"
    },
    container: {
        padding:8,

    }
})
export default ElevatedCard