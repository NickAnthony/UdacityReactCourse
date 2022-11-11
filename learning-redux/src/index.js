import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ConnectedApp from "./components/App";
import reducers from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers,
  middleware: middleware,
});

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);
