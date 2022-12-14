import React from "react";
import { Text, View, Image, StyleSheet} from "react-native";
import { Link, useLocation, useNavigate } from "react-router-native";
import searchIcon from "../assets/search-icon.png";
import backToIcon from "../assets/back-to-icon.png";
import { useState } from "react";
import { useFonts } from 'expo-font';

const Top = () => {
  let navigate = useNavigate()
  const handleClick = (e)=>{
    e.preventDefault()
    navigate(-1)

  }
  let [fontsLoaded] = useFonts({
    'poppins': require('../assets/fonts/Poppins-Light.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'taviraj' : require('../assets/fonts/Taviraj-Light.ttf'),
    'taviraj-m' : require('../assets/fonts/Taviraj-Medium.ttf'),
  });
  return (
    <View style={styles.container}>
    <Link style={styles.link} to="/" onPress={handleClick} underlayColor="rgba(0,0,0,0)">
    <Image source={backToIcon} style={styles.image} />
    </Link>
      <Text style={styles.title}>Comida</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
  },
  link:{
    width:"20%",
    left:0,
    backgroundColor:'white'
  },
  title:{
    left:-50,
    width:"80%",
    textAlign:'center',
    backgroundColor:'yellow',
    fontFamily:'taviraj'
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default Top;
