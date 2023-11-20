import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({ title, openSidebar, store }) => {
  let backgroundColor = "#264653";

  if (store.selectedIndex !== null && store.menu[store.selectedIndex]) {
    backgroundColor = store.menu[store.selectedIndex].color;
  }

  if (store.resetColor) {
    backgroundColor = "#264653";
  }

  return (
    <View style={[styles.header, { backgroundColor }]}>
      <TouchableOpacity onPress={openSidebar}>
        <Icon name="bars" size={30} color="white" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#264653",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 40,
  },
  icon: {
    marginLeft: 10,
  },
});

export default Header;
