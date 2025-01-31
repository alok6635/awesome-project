import React from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

const UserProfile = () => {
    const backGroundImg = { uri: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" };
    const ProfileImg = require('../../images/boy.png');

    const data = [
        {
            icon: require('../../images/boy.png'),
            fieldName: 'User Info',
        },
        {
            icon: require('../../images/noti.png'),
            fieldName: 'Notification',
        },
    ];

    return (
        <>
            <ImageBackground source={backGroundImg} resizeMode='cover' style={styles.background}>
                <View style={styles.profileCover}>
                    <Image source={ProfileImg} style={styles.profileImg} />
                    <Text style={styles.profileHeading}>Demo Project </Text>
                </View>
                <FlatList data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItemContent}>
                            <View style={styles.listItem}>
                                <Image source={item.icon} style={styles.icon} />
                                <Text style={styles.listItemText}>{item.fieldName}</Text>
                            </View>
                            <TouchableOpacity>
                                <AntDesign name={"arrowright"} size={20} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <View style={styles.logOut}>
                    <TouchableOpacity>
                        {/* <FontAwesomeIcon icon={faRightFromBracket} style={styles.logOutIcon} /> */}
                    </TouchableOpacity>
                    <Text style={styles.logOutText}>Logout</Text>
                </View>
            </ImageBackground>
        </>
    );
};
export default UserProfile;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileCover: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    profileHeading: {
        color: '#F47A26',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    listItemContent: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 5,
        backgroundColor: "#fdfdf8",
        borderRadius: 8,
        margin: 5,
        marginBottom: 20,
        width: "96%"
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    listItemText: {
        fontSize: 18,
        fontWeight: "600",
        padding: 2,
        marginLeft: 10,
        color: "#F47A26",
    },
    icon: {
        width: 24,
        height: 24,
        borderRadius: 15,
    },
    rightIcon: {
        width: 20,
        height: 20,
    },
    logOut: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logOutIcon: {
        marginRight: 10,
        color: "red",
    },
    logOutText: {
        fontSize: 20,
        color: "red",
    }
});

