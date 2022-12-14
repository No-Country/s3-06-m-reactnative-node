import React from "react";
import { useNavigate } from "react-router-native";
import { useFonts } from 'expo-font';
import { StyleSheet, TouchableHighlight, TextInput, Text, View, ScrollView, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';
import Loader from './Loader';

const ScreenWidth = Dimensions.get("window").width;

export default function ForgotPassword() {
    let navigate = useNavigate();
    let [fontsLoaded] = useFonts({
        'poppins': require('../assets/fonts/Poppins-Light.ttf'),
        'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'taviraj' : require('../assets/fonts/Taviraj-Light.ttf'),
        'taviraj-m' : require('../assets/fonts/Taviraj-Medium.ttf'),
      });
      if (!fontsLoaded) {
        return <Loader />;
      }
  
    return (
        <View style={styles.container}  >
            <StatusBar 
                animated={true}
                backgroundColor="#61dafb"
            />
            <ScrollView>
                <View>
                    <Text style={styles.text} >Forgot Password</Text>
                    <TextInput placeholder='Email' require style={styles.input} />
                </View>
                <Text style={styles.text1}> Please, enter your email address. You will receive a link to create a new password by email  </Text>
                <View style={styles.buttonContain} >
                    <TouchableHighlight style={styles.boton}>
                        <Text style={styles.botonText}>Send</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight  onPress={()=> navigate(-1) } underlayColor="rgba(0,0,0,0)">
                    <Text style={styles.text2}>Go Back </Text>
                </TouchableHighlight>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: ScreenWidth,
        paddingTop: 80,
        marginRight:30, 
        
       
    },
    buttonContain : {
        width : ScreenWidth,
        flex : 1,
        alignItems : 'center'
    },
    boton: {
        width: ScreenWidth - 50,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 20,
        color: 'white',
        margin : 'auto',
        marginTop: 30,
    },
    botonText: {
        fontSize: 25,
        color: 'white',
    },
    input: {
        height: 74,
        backgroundColor: 'white',
        borderColor: 'grey',
        marginBottom: 50,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.7,
        shadowRadius: 1,
        elevation: 3,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 60,
    },
    text: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 70,
        fontFamily: 'poppins',
        marginBottom: 80,
        marginTop: 30,
      },
      text1: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 22,
        fontFamily: 'taviraj',
        marginBottom: 60,
        textAlign: "center",
        marginRight:10,
      },
      text2: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 22,
        fontFamily: 'taviraj',
        marginBottom: 60,
        textAlign: "center",
        marginTop: 30,
      },
});