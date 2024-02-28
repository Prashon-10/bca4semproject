import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importing the main App component to be rendered into the root element
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
