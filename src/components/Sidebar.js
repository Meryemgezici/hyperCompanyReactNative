import React from "react";
import { SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MenuItems from "./MenuItems";

const Sidebar = ({ closeSidebar }) => {
  return (
    <SafeAreaView style={styles.sidebar}>
      <TouchableOpacity style={styles.closeButton} onPress={closeSidebar}>
        <Icon name="times" size={30} color="#900" />
      </TouchableOpacity>
      <MenuItems />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: "#fff",
    width: 300,
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    paddingTop: 50,
    marginTop: 30,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  sidebarButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "blue",
  },
});

export default Sidebar;
