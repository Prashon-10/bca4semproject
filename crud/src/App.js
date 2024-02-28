import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RouterComponent from "./RouterComponent";

function App() {
  const users = "React Users";
  return (
    <React.Fragment>
      <Header />
      <RouterComponent />
      <Footer />
    </React.Fragment>
  );
}

export default App;
