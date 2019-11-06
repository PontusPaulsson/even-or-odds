import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./scss/index.scss";
import rootReducer from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
