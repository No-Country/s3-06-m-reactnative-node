import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import searchIcon from "../assets/search-icon.png";
import backToIcon from "../assets/back-to-icon.png";

const Search = () => {
  return (
    <View style={styles.container}>
      <Link to="/" underlayColor="rgba(0,0,0,0)">
        <Image source={backToIcon} style={styles.image} />
      </Link>
      <Image source={searchIcon} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff0000",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    width: "100%"
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default Search;
