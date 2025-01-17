import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'; 

const UserProfile = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#FF3F00', paddingVertical: 15, paddingHorizontal: 15, marginTop: 30 }}>
                <Text style={{ color: 'white' }}>My Profile</Text>
            </View>
            <View style={styles.container_Inputfield}>
                <AntDesign name="user" style={styles.icon} /> 
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value="PNF"
                    editable={false}
                />
            </View>

            <View style={styles.container_Inputfield}>
                <AntDesign name="mail" style={styles.icon} /> 
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value="PNF@gmail.com"
                    editable={false}
                />
            </View>

            <View style={styles.container_Inputfield}>
                <AntDesign name="home" style={styles.icon} />  
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    value="New  Address"
                    editable={false}
                />
            </View>

            <View style={styles.container_Inputfield}>
                <AntDesign name="phone" style={styles.icon} /> 
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    value="123457689"
                    editable={false}
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container_Inputfield: {
        flexDirection: 'row',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginTop: 10,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingLeft: 10,
    },
    icon: {
        fontSize: 20,
        color: '#ccc',
        marginRight: 10,
    },
    button: {
        backgroundColor: '#FF3F00',
        borderRadius: 25,
        width: '92%',
        alignSelf: 'center',
        padding: 10,
        elevation: 2,
        marginTop: 10,
    },
    buttonTxt: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
        alignSelf: 'center',
    },
});
