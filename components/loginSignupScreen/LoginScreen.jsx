import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FF3F00'} options={{ headerShown: false }}/>
            <View style={{ paddingVertical: 12, width: '95%', alignSelf: 'center', marginBottom: 10 }}>
                <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '700', }} >Login</Text>
            </View>

            <View style={styles.inputCont}>
                <TextInput placeholder='Email' keyboardType='email-address' style={styles.input} />
            </View>

            <View style={styles.inputCont}>
                <TextInput placeholder='Password' style={styles.input} />
            </View>

            <TouchableOpacity style={styles.loginbutton}>
                <Text style={styles.loginbuttonTxt}>Login</Text>
            </TouchableOpacity>

            <View style={styles.haveAccount}>
                <View style={{ paddingLeft: 10 }}>
                    <Text>Don't have any account?</Text>
                </View>
                <View style={{
                    backgroundColor: '#FF3F00',
                    borderRadius: 25,
                    alignSelf: 'center',
                    padding: 10,
                    elevation: 2
                }} >
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '600',
                            color: 'white',
                            alignSelf: 'center',
                            paddingHorizontal: 10
                        }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'green',
        width: '100%'
    },
    inputCont: {
        flexDirection: 'row',
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 10,
        width: '95%',
        alignSelf: 'center'
    },
    icon: {
        paddingHorizontal: 5
    },
    input: {
        paddingLeft: 5,
        width: '90%',

        // backgroundColor: 'green'

    },
    loginbutton: {
        backgroundColor: '#FF3F00',
        borderRadius: 25,
        width: '95%',
        alignSelf: 'center',
        padding: 10,
        elevation: 2
    },
    loginbuttonTxt: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
        alignSelf: 'center'
    },
    haveAccount: {
        marginTop: 15,
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}
)



