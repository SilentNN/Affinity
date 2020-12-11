import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';
import Root from './components/root';
import './icons/fa_library';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  // debugger;
  if (window.currentUser) {
    let [user] = Object.values(window.currentUser);
    const preloadedState = {
      entities: {
        users: {
          [user.id]: user,
        },
      },
      session: {
        currentUserId: user.id
      },
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById("root"));
});