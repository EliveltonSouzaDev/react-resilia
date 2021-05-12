import React, { Component } from 'react'
import Style from "./Button.module.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.meuClick = this.meuClick.bind(this);
    this.state = {
      isButtonDisabled: false,
    }
  }

  meuClick(event) {
    event.preventDefault();
    this.setState({
      isButtonDisabled: false
    })

    setTimeout(() => this.setState({ isButtonDisabled: true }, console.log('fui desabilitado')), 3000);

  }

  render() {
    return (
      <div className="container-button" >
        <button className={Style.button} onClick={this.meuClick}
        >{this.props.name}</button>
      </div>
    )
  }
}
