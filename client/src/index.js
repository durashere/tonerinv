import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import tonerService from "./services/toners";
import { initToners } from "./reducers/tonerReducer";

import "./index.css";

tonerService.getAll().then((toners) => store.dispatch(initToners(toners)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
