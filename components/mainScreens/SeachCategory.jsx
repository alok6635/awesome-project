import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SeachCategory = () => {
  return (
    <SafeAreaView>
 <View style={styles.container}>
      <Text style={styles.searchText}>All</Text>
      <Text style={styles.searchText}>Men's</Text>
      <Text style={styles.searchText}>Jewelery</Text>
      <Text style={styles.searchText}>Electronics</Text>
    </View>
    </SafeAreaView>
   
  )
}

export default SeachCategory

const styles = StyleSheet.create({
    container:{
          flexDirection:'row',
          gap:10,
          marginLeft:5
    },
    searchText:{
        width:80,
        padding:5,
        backgroundColor:'gray',
        borderRadius:10,
        color:'#fff',
        elevation:1,
    }

})