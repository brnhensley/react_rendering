import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Not really a fix, but it prevents an extra render each change
  <>
    <App />
  </>
);
