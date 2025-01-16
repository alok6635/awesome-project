import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Categories = () => {
    return (
        <View>
            <Text style={styles.heading}>Categories</Text>
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={[styles.box, { backgroundColor: '#ddfbf3' }]}>
                        <Image source={require('../images/icon_1.png')} style={styles.image} />
                        <Text style={styles.text}>Pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { backgroundColor: '#f5e5ff' }]}>
                        <Image source={require('../images/icon_2.png')} style={styles.image} />
                        <Text style={styles.text}>Burger</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { backgroundColor: '#e5f1ff' }]}>
                        <Image source={require('../images/icon_3.png')} style={styles.image} />
                        <Text style={styles.text}>Noodles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { backgroundColor: '#ebfde5' }]}>
                        <Image source={require('../images/icon_4.png')} style={styles.image} />
                        <Text style={styles.text}>Drink</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>

    )
}
export default Categories
const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
        fontWeight: 700,
        color: 'red',
        marginLeft: 10,
        marginBottom: 10,
    },
    container: {
        width: '100%',
        borderRadius: '10'
    },
    head: {
        fontSize: 20,
        fontWeight: '600',
        margin: 10,
        paddingBottom: 5,
        paddingLeft: 5
    },
    image: {
        width: 20,
        height: 20
    },
    box: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 15,
        padding: 10,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    text: {
        marginLeft: 5,

    }
})