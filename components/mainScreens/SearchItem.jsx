import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchItem = () => {
    return (
        <>
            <TouchableOpacity style={styles.searchbox}>
                <AntDesign name="search1" size={24} color="#FF3F00" />
                <TextInput style={StyleSheet.searchInput} placeholder="Search" placeholderTextColor="#999"/>
            </TouchableOpacity>
        </>
    );
};
export default SearchItem;

const styles = StyleSheet.create({
    searchbox: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        marginVertical: 20,
        borderRadius: 15,
        alignSelf: 'center',
        elevation: 2,
    },
    searchInput: {
        marginLeft: 10,
        fontSize: 16,
        flex: 1,
    },
   
});
