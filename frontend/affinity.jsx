import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(
    <h1>is affinity</h1>
    , document.getElementById("root"));
});