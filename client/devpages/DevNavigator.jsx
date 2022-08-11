import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { Dimensions } from "react-native";

const ScreenWidth = Dimensions.get("window").width;
export default function DevNavigator() {
  return (
    <View style={{}}>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Link style={styles.link} to="/" underlayColor="rgba(0,0,0,0)">
            <Text style={styles.redirectTo}>Volver al inicio</Text>
          </Link>

          <Link
            style={styles.link}
            to="/ClaudiaPage"
            underlayColor="rgba(0,0,0,0)"
          >
            <Text style={styles.redirectTo}>Claudia Page</Text>
          </Link>

          <Link
            style={styles.link}
            to="/CrisPage"
            underlayColor="rgba(0,0,0,0)"
          >
            <Text style={styles.redirectTo}>Cris Page</Text>
          </Link>

          <Link style={styles.link} to="/EzePage" underlayColor="rgba(0,0,0,0)">
            <Text style={styles.redirectTo}>Eze Page</Text>
          </Link>

          <Link
            style={styles.link}
            to="/OrianaPage"
            underlayColor="rgba(0,0,0,0)"
          >
            <Text style={styles.redirectTo}>Oriana Page</Text>
          </Link>

          <Link
            style={styles.link}
            to="/RichardPage"
            underlayColor="rgba(0,0,0,0)"
          >
            <Text style={styles.redirectTo}>Richard Page</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: { backgroundColor: "red", paddingBottom: 15, marginTop: 20 },
  link: {
    marginEnd: 20,
    width: 200,
  },
  contentContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    width: 300 * 6,
    alignItems: "center",
  },

  redirectTo: {
    backgroundColor: "#C20FE1",
    padding: 10,
    textAlign: "center",
    borderRadius: 4,
    marginBottom: 10,
    color: "#ffffff",
    fontWeight: "500",
  },
});
