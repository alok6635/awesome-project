import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'; 


const HeaderBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign 
                    name="enviromento" 
                    size={28} 
                    color="#FF3F00" 
                    style={{ paddingVertical: 6 }} 
                />
                <View style={{ paddingHorizontal: 5 }}>
                    <Text style={styles.locationText}>Location</Text>
                    <Text style={styles.cityText}>Delhi</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign 
                    name="bells" 
                    size={24} 
                    color="#FF3F00" 
                    style={styles.notificationIcon} 
                />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
        borderBottomWidth: 1,
        borderColor: 'grey',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    locationText: {
        fontSize: 16,
        fontWeight: '700',
    },
    cityText: {
        fontSize: 14,
        color: 'grey',
    },
    notificationIcon: {
        paddingVertical: 6,
    },
});


