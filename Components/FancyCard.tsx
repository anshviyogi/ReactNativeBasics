import { Image, StyleSheet, Text, View } from "react-native"

interface Props {
    isTitle: boolean,
    title: string,
    location: string,
    time: string
}

function FancyCard({isTitle, title, location, time}: Props): JSX.Element{
    return(
        <View>
        {isTitle && (
            <Text style={styles.headingText}>Trending Places</Text>
        )}

        <View style={[styles.card, styles.cardElevated]}>
            <Image 
            source={{
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Itf54tzZ7X1TmGLjUG6BByUqMHBY6wcvSq9flHg0worY2QlBx2O2jDzHCTwZkpvtKc8&usqp=CAU",
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardLabel}>{location}</Text>
                <Text style={styles.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, reprehenderit repudiandae magnam id dignissimos </Text>
                <Text style={styles.cardFooter}>{time}</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8
    },
    cardElevated: {
        backgroundColor:"gray",
        elevation:3,
        shadowOffset: {
            width:1,
            height:1
        }
    },
    card: {
        width:350,
        height:350,
        borderRadius:10,
        marginHorizontal:18,
        marginVertical:10
    },
    cardImage: {
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:10
    },
    cardBody: {
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:"#000000",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:6
    },
    cardFooter: {
        color:"#000000",
    },
    cardLabel:{
        color:"#000000",
        fontSize:16,
        marginBottom:6
    },
    cardDescription:{
        color:"#000000",
        fontSize:14,
        marginBottom:10
    }
})

export default FancyCard