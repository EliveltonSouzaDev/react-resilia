import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form"
import Button from "./components/Button/Button"
import Drinks from "./components/Drinks/Drinks"

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Form />
        <Drinks />
        <Footer />
      </div>
    );
  }
}
export default App;
