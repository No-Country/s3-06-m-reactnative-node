import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import { useDispatch } from "react-redux";
import { register } from "./../actions/auth";
import { useFonts } from 'expo-font';
import { StyleSheet, TextInput, Image, Text, View, ScrollView, TouchableHighlight, StatusBar } from 'react-native';
import { Dimensions, Alert } from 'react-native';
import Loader from './Loader';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
export default function Signup() {
  let navigate = useNavigate();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  function isValidEmail(email) {
    return /\S+@\S+.\S+/.test(email);
  }

  const validacion = () => {
    if (!isValidEmail(email)) {
      Alert.alert('Email wrong - front validation');
      return false
    }
    if (email === '') {
      Alert.alert('Email is required - front validation');
      return false
    }
    if (name === '') {
      Alert.alert('Name is required - front validation');
      return false
    }
    if (name.length < 3) {
      Alert.alert('Name min 8 o max 12 characters! - front validation');
      return false
    }
    if (password === '') {
      Alert.alert(' Password is required! - front validation');
      return false
    }
    if (password.length < 8) {
      Alert.alert('Password min 8 o max 12 characters! - front validation');
      return false
    }
    if (confirmPass !== password) {
      Alert.alert('Incorrect confirm Password - front validation');
      return false
    }
    return true
  }

  const onRegister = () => {
    setLoad(true)
    let user = {
      name: name,
      password: password.trim(),
      email: email.trim(),
      confirmPass: confirmPass.trim(),
    };

    if (!validacion()) {
      setLoad(false)
      return false
    }

    dispatch(register(user))
      .then((response) => {
        if (response.status === "success") {
          setLoad(false)
          Alert.alert("Success", response.message);
          return navigate("/home?cate=dog");
        }
        if (response.status === "error") {
          setLoad(false)
          return Alert.alert("Error", response.message);
        }
      })
      .catch((error) => {
        setLoad(false)
        return navigate("/signup");
      });
  };

  let [fontsLoaded] = useFonts({
    'poppins': require('../assets/fonts/Poppins-Light.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'taviraj': require('../assets/fonts/Taviraj-Light.ttf'),
    'taviraj-m': require('../assets/fonts/Taviraj-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return <Loader />;
  }
  return (
    <View style={{zIndex : 20}}>
      <StatusBar
        animated={true}
        style="black" 
        backgroundColor="#FFFFFF"
      />
      {load && <Loader load={styles.loader} />}
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.text} >Sign up</Text>
            <TextInput value={name}
              onChangeText={(text) => setName(text)}
              placeholder='Name and Lastname'
              required
              style={styles.input} />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='Email'
              required
              style={styles.input} />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder='Password'
              style={styles.input}
              required />
            <TextInput
              value={confirmPass}
              onChangeText={(text) => setConfirmPass(text)}
              secureTextEntry={true}
              placeholder='Confirm Password'
              style={styles.input}
              required />
          </View>
          <TouchableHighlight onPress={() => navigate('/')} underlayColor="rgba(0,0,0,0)">
            <Text style={styles.text1}>Already have account?  <Image style={styles.arrow} source={require('../assets/Vector.png')} /> </Text>
          </TouchableHighlight>
          <View style={styles.buttonContain}>
            <TouchableHighlight onPress={() => onRegister()} style={styles.boton}>
              <Text style={styles.botonText}>SIGN UP</Text>
            </TouchableHighlight>
          </View>
          {/* <Text style={styles.text2}>Or sign up with social account </Text>
           <View style={styles.image}>
            <Image source={require('../assets/iconsgoogle.png')} />
            <Image source={require('../assets/iconofacebook.png')} />
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: ScreenWidth,
    paddingBottom : 50
  },
  boton: {
    width: ScreenWidth - 40,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 20,
    color: 'white',
  },
  buttonContain: {
    width: ScreenWidth,
    flex: 1,
    alignItems: 'center'
  },
  botonText: {
    fontSize: 25,
    color: 'white',
  },
  text: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 80,
    fontFamily: 'poppins',
    marginBottom: 80,
    marginTop: 30,
  },
  text1: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 22,
    fontFamily: 'taviraj',
    marginBottom: 40,
    textAlign: "right",
  },
  text2: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 20,
    fontFamily: 'taviraj',
    marginBottom: 40,
    marginTop: 40,
    textAlign: "center",
  },
  input: {
    height: 74,
    backgroundColor: 'white',
    borderColor: 'grey',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 3,
    marginRight: 10,
    marginLeft: 10,
    paddingLeft: 20,
  },
  image: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  arrow: {
    width: 40,
    height: 18,
  },
  loader : {
      position : 'absolute',
      backgroundColor : 'rgba(10,10,10,0.3)',
      width : ScreenWidth,
      height : ScreenHeight + StatusBar.currentHeight,
      flex:1,
      zIndex: 100
  }
})