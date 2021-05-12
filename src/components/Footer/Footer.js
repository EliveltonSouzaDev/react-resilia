import React, { Component } from "react";
import { footer, imgFooter } from "./Footer.module.css";
import logo from "./react.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className={footer}>
        <p>Feito com React.js</p>
        <img src={logo} alt={"logo"} className={imgFooter} />
      </footer>
    );
  }
}
