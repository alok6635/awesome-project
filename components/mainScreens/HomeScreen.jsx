import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator, Alert, Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import SearchItem from './SearchItem';
import SeachCategory from './SeachCategory';
import { useNavigation } from '@react-navigation/native'; 

const HomeScreen = () => {
    const [product, setProduct] = useState([]);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation(); 

    const showProduct = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProduct(response.data);
        } catch (error) {
            setErr(error.message);
            Alert.alert('Error', 'Something went wrong while fetching products.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        showProduct();
    }, []);

    const handleProductPress = (item) => {
        navigation.navigate('ProductDetails', { product: item });
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.productCard} onPress={() => handleProductPress(item)}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={'#FF3F00'} />
            <SearchItem />
            <SeachCategory/>
            {loading ? (
                <ActivityIndicator size="large" color="#FF3F00" style={styles.loader} />
            ) : err ? (
                <Text style={styles.errorText}>{err}</Text>
            ) : (
                <FlatList
                    data={product}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2} 
                    contentContainerStyle={styles.productList}
                    renderItem={renderProduct}
                />
            )}
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: '100%',
    },

    loader: {
        marginTop: 20,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    productList: {
        padding: 10,
    },
    productCard: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        color: 'green',
        marginTop: 5,
    },
})
