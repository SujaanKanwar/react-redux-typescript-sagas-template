import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import Landing from "../landing/Landing";

const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
};

export default App;
