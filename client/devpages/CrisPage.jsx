import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { ImageCarousel } from "../components/ImageCarousel";
import { useFonts } from 'expo-font';
import Loader from '../pages/Loader';

const { width } = Dimensions.get("window");
const ScreenHeight = Dimensions.get("window").height;

export const CrisPage = () => {
  let [fontsLoaded] = useFonts({
    'poppins': require('../assets/fonts/Poppins-Light.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'taviraj' : require('../assets/fonts/Taviraj-Light.ttf'),
    'taviraj-m' : require('../assets/fonts/Taviraj-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }
  const onPressHandler = () => {};

  return (
    <ScrollView style={styles.scrollContainer}>
      <ImageCarousel />
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.price}>Pedrige</Text>
          <Text style={styles.price}>U$S 50.99</Text>
        </View>

        <View style={styles.containerSubtitle}>
          <Text style={styles.subprice}>Comida balanceada 8kg</Text>
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.content}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            similique laudantium, officia officiis mollitia possimus? Corrupti
            distinctio sed officia, rem maxime molestiae consequuntur quia,
            dolorum nam laborum at animi facere!
          </Text>
        </View>
        <View style={styles.containerButton}>
        <TouchableWithoutFeedback onPress={onPressHandler}>
          <View style={styles.button}>
            <Text
              style={styles.buttonText}
            >
              Add to cart
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer:{
    height:ScreenHeight,
    backgroundColor:'#000'
  }
  ,
  container: {
    padding:20,
    backgroundColor:'#f3f3f3',
    height:ScreenHeight - (ScreenHeight*0.5),
    
    
  },
  containerTitle: {
    flex: 0,
    padding:0,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#000",
  },
  containerContent:{
    flex:0,
    justifyContent:'center'
  },
  containerButton: {
    flex: 0,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#56CBF9",
    width: width - 40,
    height: 50,
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    color: "#FFFF",
  },
  price: {    fontFamily : 'poppins-regular', color: "#000", fontSize: 24,marginBottom:0 },
  subprice: {fontFamily : 'taviraj-m', color: "#aaa", fontSize: 14 ,top:-8},
  content:{fontFamily : 'taviraj-m',fontSize: 12,marginTop:20,marginBottom:20},
  buttonText:{
    color: "#fff",
    fontSize: 20,
    margin: 10,
    fontFamily : 'poppins',
  }
});
