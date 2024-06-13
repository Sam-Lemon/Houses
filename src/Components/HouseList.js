import React from 'react';
import { House } from './House';
import { housesApi } from '../API/HousesAPI';

export default class HousesList extends React.Component {
    state = { houses: [] }

/** NEED COMMENT HERE ---- ABOUT WHY NEED COMPONENTDIDMOUNT BCZ THIS IS A CLASS OR SOMETHING?*/
    componentDidMount() {
        this.fetchHouses();
    };

/** Calling the get method on the imported housesApi. This function is 
 * asynchronous because it might take some time for the conversation
 * with the server, and I want other things to be happening at the 
 * same time. And then I set the state of the houses array.*/    
    fetchHouses = async() => {
        const houses = await housesApi.get();
        this.setState({houses});
    };

/** The updateHouse function uses the put method to update the API.
 * It takes in the new data as a parameter, updatedHouse, and puts it
 * in the API. After that, call fetchHouses to update the render.*/
    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };
    
/** Here is what all of the data will render into. It maps over the 
 * current state of houses, takes each house and assigns the data
 * to the correct location and renders the updated house.*/
    render() {
        return (
            <div className='house-list'>
                {this.state.houses.map((house) => (
                    <House  
                        house={house}
                        key={house._id}
                        updatedHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    };
}