import React from "react";
import { View, StyleSheet, Text, TouchableHighlight, Dimensions } from "react-native";
import { Link, useLocation } from "react-router-native";
import { catDataCard, dogDataCard, otherDataCard } from "./subNavHomeData";

const ScreenWidth = Dimensions.get("window").width;

const SubNavHome = (props) => {
  let location = useLocation();
  let isActive = (search) => {
    let styleSelected = [styles.buttonCategorie];
    if (location.search === search) {
      styleSelected.push(styles.selectedButton);
    }
    return [styleSelected];
  };
  let isActiveText = (search) => {
    let styleSelected = [styles.textButton];
    if (location.search === search) {
      styleSelected.push(styles.selectedText);
    }
    return [styleSelected];
  };
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Link
        to="/home?cate=dog"
        style={isActive("?cate=dog")}
        underlayColor="rgba(0,0,0,0)"
        onPress={() => {
          props.setCategory(dogDataCard);
        }}
      >
        <Text style={isActiveText("?cate=dog")}>Perros</Text>
      </Link>
      <Link
        to="/home?cate=cat"
        style={isActive("?cate=cat")}
        underlayColor="rgba(0,0,0,0)"
        onPress={() => {
          props.setCategory(catDataCard);
        }}
      >
        <Text style={isActiveText("?cate=cat")}>Gatos</Text>
      </Link>
      <Link
        to="/home?cate=otros"
        style={isActive("?cate=otros")}
        underlayColor="rgba(0,0,0,0)"
        onPress={() => {
          props.setCategory(otherDataCard);
        }}
      >
        <Text style={isActiveText("?cate=otros")}>Otros</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  buttonCategorie: {
    width: ScreenWidth / 3,
    paddingVertical: 10,
  },
  textButton: {
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 1,
  },
  selectedButton: {
    borderBottomColor: "#56CBF9",
    borderBottomWidth: 5,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
  },
});

export default SubNavHome;
