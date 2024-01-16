import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from "react-native"

function ActionCard(){
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

    return (
        <View style={{marginHorizontal:10}}>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.evevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's new in JavaScript 21 - ES12</Text>
                </View>
                <Image 
                source={{
                    uri:"https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969"
                }}
                style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={{fontSize:16, color:"#000000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maiores qui at accusamus error, nobis fuga alias quibusdam nemo architecto ipsum fugit ex, similique distinctio quam eaque maxime sunt voluptate!</Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={()=> {
                        openWebsite("https://legacy.reactjs.org/docs/getting-started.html")
                    }}>
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> {
                        openWebsite("https://instagram.com/ansh_viyogi")
                    }}>
                        <Text style={styles.socialLinks}>Follow me!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:"bold",
        marginVertical:10
    },
    evevatedCard: {

    },
    card: {
        backgroundColor:"gray",
        borderRadius:10,
        padding:5,
        marginBottom:8
    },
    headingContainer:{

    },
    headerText: {
        textAlign:"center",
        fontSize:20,
        color:"white",
        fontWeight:"500"
    },
    cardImage: {
        height:100,
        margin:10,  
    },
    bodyContainer: {
        paddingHorizontal:10,
        marginBottom:5
    },
    footerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
        padding:4
    },
    socialLinks: {
        color:"#ffffff",
        fontSize:14
    }
})

export default ActionCard