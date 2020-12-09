import React from "react";
import ReactDOM from "react-dom";

import * as Actions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  window.register = Actions.register;
  window.login = Actions.login;
  window.logout = Actions.logout;

  ReactDOM.render(<h1>is affinity</h1>, root);
});