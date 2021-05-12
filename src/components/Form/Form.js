import React, { Component } from 'react'
import Button from '../Button/Button'
import Style from './Form.module.css'

export default class Form extends Component {
  render() {
    return (
      <div className={Style.main}>
        <form >
          <label>
            Nome:
    <input className={Style.input} type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
    <input className={Style.input} type="text" name="email" />
          </label>
          <br />
          <label>
            CPF:
    <input className={Style.input} type="text" name="cpf" />
          </label>
          <br />
          <Button name="Clique aqui" />
        </form>
      </div>
    )
  }
}

