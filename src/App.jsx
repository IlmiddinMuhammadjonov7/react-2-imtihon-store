import React from "react";
import Navbar from "./global/Navbar";
import Home from "./page/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Home />
      </Provider>
    </div>
  );
};

export default App;
