import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React from 'react';

const CardSlider = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cardouthead}>
                Today's Special Food
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ProductScreen')}>
                    <View>
                        <Image source={require('../images/pizza2.jpg')} style={styles.cardimage} />
                    </View>
                    <View style={styles.cardin1}>
                        <Text style={styles.cardin1txt}>Burger</Text>
                        <View style={styles.cardin2}>
                            <Text style={styles.cardin2txt1}>Fast Food</Text>
                            <Text style={styles.cardin2txt1}>
                                Price - <Text style={{ textDecorationLine: 'line-through' }}>Rs</Text> Rs500
                            </Text>
                            <Text style={styles.cardin2txt3}>VEG</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <View>
                        <Image source={require('../images/pizza2.jpg')} style={styles.cardimage} />
                    </View>
                    <View style={styles.cardin1}>
                        <Text style={styles.cardin1txt}>Pizza</Text>
                        <View style={styles.cardin2}>
                            <Text style={styles.cardin2txt1}>Fast Food</Text>
                            <Text style={styles.cardin2txt1}>
                                Price - <Text style={{ textDecorationLine: 'line-through' }}>Rs</Text> Rs400
                            </Text>
                            <Text style={styles.cardin2txt3}>VEG</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <View>
                        <Image source={require('../images/pizza2.jpg')} style={styles.cardimage} />
                    </View>
                    <View style={styles.cardin1}>
                        <Text style={styles.cardin1txt}>Pasta</Text>
                        <View style={styles.cardin2}>
                            <Text style={styles.cardin2txt1}>Italian</Text>
                            <Text style={styles.cardin2txt1}>
                                Price - <Text style={{ textDecorationLine: 'line-through' }}>Rs</Text> Rs300
                            </Text>
                            <Text style={styles.cardin2txt3}>VEG</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default CardSlider;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 5
    },
    cardouthead: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 10,
        paddingLeft: 5,
        color: '#424242'
    },
    cardimage: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    card: {
        width: 300,
        height: 200,
        marginLeft: 5,
        marginTop: 10,
        borderRadius: 17,
        backgroundColor: '#dedede',
    },
    cardin1: {
        marginHorizontal: 3,
        marginTop: 3
    },
    cardin1txt: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 5,
    },
    cardin2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 6
    },
    cardin2txt1: {
        fontSize: 12,
        marginRight: 10,
        fontWeight: '500'
    },
    cardin2txt3: {
        height: 20,
        borderRadius: 10,
        backgroundColor: 'green',
        fontSize: 10,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        paddingHorizontal: 7
    }
});

