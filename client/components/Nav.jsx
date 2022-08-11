import React from "react";
import { Text, View, ScrollView, StyleSheet,Dimensions } from "react-native";
import { Link } from "react-router-native";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get("window");
const {height} = Dimensions.get("window");

export default function Nav() {
  let color = 'gray';
  let size = 30;
  return (
    <View style={styles.footer}>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Link style={styles.link} to="/" underlayColor="rgba(0,0,0,0)">
          <Ionicons name={'home'} color={color} size={size}/>
          </Link>
          <Link style={styles.link} to="/ClaudiaPage" underlayColor="rgba(0,0,0,0)">
          <Ionicons name={'cart'} color={color} size={size}/>
          </Link>
          <Link style={styles.link} to="/CrisPage" underlayColor="rgba(0,0,0,0)">
          <Ionicons name={'shopping'} color={color} size={size}/>
          </Link>
          <Link style={styles.link} to="/EzePage" underlayColor="rgba(0,0,0,0)">
          <Ionicons name={'heart'} color={color} size={size}/>
          </Link>
          <Link style={styles.link} to="/OrianaPage" underlayColor="rgba(0,0,0,0)">
          <Ionicons name={'account'} color={color} size={size}/>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    flex:1,
    alignItems: "center",
  },
  footer: {
    height: 70,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    flexDirection: "row",
    width:width,
    height: 70,
    justifyContent:'center',
    alignItems: "center",
    backgroundColor:'#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  redirectTo: {
    backgroundColor: "#C20FE1",
    padding: 10,
    width: 100,
    textAlign: "center",
    borderRadius: 4,
    marginBottom: 10,
    color: "#ffffff",
    fontWeight: "500",
  },
});
