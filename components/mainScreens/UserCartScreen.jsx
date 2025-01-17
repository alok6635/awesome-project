import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const UserCartScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cartCover}>
                <TouchableOpacity>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', paddingVertical: 10, paddingHorizontal: 15 }}>Payment Options</Text>
                    <TouchableOpacity style={{ backgroundColor: '#FF3F00', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginHorizontal: 10 }} onPress={() => { alert('Selected') }}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'white' }}>Cash on Delivery</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 30 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', paddingVertical: 10, paddingHorizontal: 15 }}>Delivery Location</Text>
                    <TouchableOpacity style={{ backgroundColor: '#FF3F00', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginHorizontal: 10 }} onPress={() => { alert('Selected') }}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'white' }}>Current Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FF3F00', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginHorizontal: 10, marginTop: 10 }} onPress={() => { alert('Selected') }}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'white' }}>Change Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 10, borderTopWidth: 1, borderColor: '#c9c9c9' }}>
                    <TouchableOpacity style={{ backgroundColor: '#FF3F00', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginHorizontal: 10, marginTop: 10, alignItems: 'center' }} onPress={() => PlaceNow()}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'white' }}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default UserCartScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
    },
    cartCover: {
        backgroundColor: '#FF3F00',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#edeef0',
        width: '100%',
    },
    containerHead: {
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 5,
        marginLeft: 5,
        paddingHorizontal: 10,
    },
    containerCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 5,
        borderRadius: 25,
        width: '95%',
        alignSelf: 'center',
        elevation: 2,
        alignItems: 'center',
    },
    cardimage: {
        width: 100,
        height: '100%',
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25
    },
    containerCard_in: {
        flexDirection: 'column',
        margin: 5,
        width: '69%',
        alignItems: 'flex-end',
    },
    containerCard_in1: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderBottomWidth: 1,
    },
    containerCard_in2: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 3,
        paddingVertical: 2,
    },
    containerCard_in3: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 100,
        borderRadius: 20,
        backgroundColor: '#edeef0',
        marginVertical: 5,
        padding: 5,
        elevation: 2
    },
    containerCard_in2_itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3
    },
    containerCard_in2_itemPrice: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 2
    },
    containerCard_in3_btn_txt: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnCont: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        flexDirection: 'row',
        marginBottom: 80,
        paddingTop: 10,
        paddingHorizontal: 15,
    }

})