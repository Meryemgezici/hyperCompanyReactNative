import React, { useState } from "react";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import Homepage from "./src/pages/Homepage";

const App = () => {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
};

export default App;
