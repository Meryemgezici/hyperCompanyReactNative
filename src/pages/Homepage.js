import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../redux/actions/menuAction";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FormField from "../components/FormField";
import { View, ScrollView, StyleSheet} from "react-native";

const Homepage = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => {
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Header" openSidebar={openSidebar} store={store} />
      {sidebarVisible && <Sidebar closeSidebar={closeSidebar} />}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.centeredView}>
          <FormField store={store} />
        </View>
      </ScrollView>
      <Footer store={store} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
export default Homepage;
