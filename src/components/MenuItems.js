import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedItem } from "../redux/slices/menuSlice";
import Loading from "./Loading";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const MenuItems = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const handleClick = (id) => {
    dispatch(selectedItem(id));
  };

  return (
    <View style={styles.container}>
      {store.isLoading && <Loading />}
      <FlatList
        data={store.menu}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleClick(item.id)}
            style={[styles.menuItem, { backgroundColor: item.color }]}
            key={item.id}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  menuItem: {
    width: 200,
    backgroundColor: "#2a9d8f",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  itemText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MenuItems;
