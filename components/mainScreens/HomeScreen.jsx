import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import HeaderBar from './HeaderBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Categories from '../Categories';
import OfferSlider from '../OfferSlider';
import CardSlider from '../CardSlider';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={'#FF3F00'} />
            <HeaderBar />
            <TouchableOpacity style={styles.searchbox}>
                <AntDesign name="search1" size={24} color="#FF3F00" />
                <Text style={styles.input}>Search</Text>
            </TouchableOpacity>
            <Categories />
            <OfferSlider />
            <CardSlider  navigation={navigation}/>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: '100%',
    },
    searchbox: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        borderRadius: 20, //30
        alignSelf: 'center',
        elevation: 2,
    },
    input: {
        marginLeft: 10,
        width: '90%',
        fontSize: 16,
        color: '#c4c4c4',
    },
    icon: {
        marginRight: 10,
    },
})
