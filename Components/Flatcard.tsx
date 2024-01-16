import { StyleSheet, Text, View } from "react-native"

const Flatcard = ()=> {
    return (
        <View style={{margin:10}}>
            <Text style={styles.heading}>Flat Card</Text>
            <View style={styles.container}>
                {/* Box 1*/}
                <View style={[styles.box, styles.box1]}>
                    <Text>Red</Text>
                </View>

                {/* Box 2*/}
                <View style={[styles.box,styles.box2]}>
                    <Text>Green</Text>
                </View>

                {/* Box 3*/}
                <View style={[styles.box, styles.box3]}>
                    <Text>Yellow</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height:100,
        width:100,
        borderRadius:5,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    heading: {
        fontSize:24,
        fontWeight:"bold",
        marginBottom:10
    },
    box1: {
        backgroundColor:"red"
    },
    box2: {
        backgroundColor:"green"
    },
    box3: {
        backgroundColor:"yellow"
    },
    container: {
        flex:1,
        flexDirection:"row",
        padding:8
    }
})

export default Flatcard