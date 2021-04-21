import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import { store } from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </StrictMode>,
  rootElement
);
