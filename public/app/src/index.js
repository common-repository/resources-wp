import React from "react";
import ReactDOM from "react-dom";
// import reportWebVitals from "./reportWebVitals";
import "focus-visible/dist/focus-visible";
import App from "./App";

const config = window.resourcesWp;
const appAnchorElement = document.querySelector(config.appSelector);

if (appAnchorElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App config={config} />
    </React.StrictMode>,
    appAnchorElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
