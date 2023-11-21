import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from '@react-navigation/stack';
import Homepage from "./src/pages/Homepage";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Ekranları burada tanımlayın */}
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
