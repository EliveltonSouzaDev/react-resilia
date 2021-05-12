import React, { Component } from 'react'
//import Button from '../Button/Button'
//import Style from './Form.module.css'

export default class Drinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      drinks: []
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            drinks: result.drinks
          });
          console.log(result.drinks[0].strDrink);
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return (
     <> 
          <ul>
            {this.state.drinks.map(drinks => (
              <li key={drinks.drinks}>
                {drinks.strDrink}
              </li>
            ))}
          </ul>       
      </>
    )
  }
}