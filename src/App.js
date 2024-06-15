/** I imported React, the component HouseList, and the css file.*/
import React, { Component } from 'react';
import HouseList from './Components/HouseList';
import './App.css';


/** Using a class component (stateful) I render the HouseList
 * component to this file.*/
export default class App extends Component {
  render() {
    return (
      <div>
        <HouseList  />
      </div>
    )
  }
}

