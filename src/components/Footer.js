import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = ({ store }) => {
  let backgroundColor = "#2a9d8f";

  if (store.selectedIndex !== null && store.menu[store.selectedIndex]) {
    backgroundColor = store.menu[store.selectedIndex].color;
  }

  if (store.resetColor) {
    backgroundColor = "#2a9d8f";
  }

  return (
    <View style={[styles.footer, { backgroundColor }]}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#2a9d8f",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Footer;
