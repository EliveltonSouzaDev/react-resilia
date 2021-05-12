import React, { Component } from "react";
import { navBar } from "./Header.module.css";



export default class header extends Component {
  render() {
    return (
      <>
        <nav className={navBar}>
          <h2>Projeto Aula</h2>
          <p>lorem ipsum dolor sit amet</p>
        </nav>
      </>
    );
  }
}
