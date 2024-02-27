import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importing the main App component to be rendered into the root element
import Header from "./Header";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
