import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

function ContactList(): JSX.Element {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false} >
                {contacts.map(({uid, name, status, imageUrl}) => (
                    <View key={uid} style={styles.userCard}>
                        <Image source={{
                            uri:imageUrl
                        }}
                        style={styles.userImage}
                        />
                        <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                        </View>

                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8,
        marginBottom:6
    },
    container: {
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard: {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginBottom:6,
        backgroundColor:"#8D3DAF",
        padding:4,
        borderRadius:106
    },
    userImage: {
        height:60,
        width:60,
        borderRadius: 60/2, // width / 2 to make a round
        marginRight:14,
    },
    userName: {
        fontSize:16,
        fontWeight:"600",
        color:"#000000"
    },
    userStatus: {
        fontSize:12,
        color:"#000000"
    }
})

export default ContactList