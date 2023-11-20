import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="blue" />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
