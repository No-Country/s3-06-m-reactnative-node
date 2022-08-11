import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Link } from "react-router-native";

export default function DevNavigator() {
  return (
    <View style={styles.footer}>
      <ScrollView horizontal >
        <View style={styles.contentContainer}>
          <Link style={styles.link} to="/" underlayColor="rgba(0,0,0,0)">
            <Text style={styles.redirectTo}>Volver al inicio</Text>
          </Link>
          <Link style={styles.link} to="/ClaudiaPage" underlayColor="rgba(0,0,0,0)">
            <Text style={styles.redirectTo}>Claudia Page</Text>
          </Link>
          <Link style={styles.link} to="/CrisPage" underlayColor="rgba(0,0,0,0)">
            <Text style={styles.redirectTo}>Cris Page</Text>
          </Link>
          <Link style={styles.link} to="/EzePage" underlayColor="rgba(0,0,0,0)">
            <Text style={styles.redirectTo}>Eze Page</Text>
          </Link>
          <Link style={styles.link} to="/OrianaPage" underlayColor="rgba(0,0,0,0)">
            <Text style={styles.redirectTo}>Oriana Page</Text>
          </Link>
          <Link style={styles.link} to="/RichardPage" underlayColor="rgba(0,0,0,0)">
            <Text style={styles.redirectTo}>Richard Page</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    marginEnd: 20,
  },
  contentContainer: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    paddingLeft: 20,
    backgroundColor : 'black'
  },
  footer: {
    height: 80,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

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