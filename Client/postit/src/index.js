import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import combineReducers from './Redux-side/reducer'



ReactDOM.render(
  <Provider store={createStore(combineReducers)}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
