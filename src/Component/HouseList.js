/** I imported React, and the House and HouseAPI components for this file.*/
import React from 'react';
import { House } from './House.js';
import { housesApi } from '../API/HousesApi.js';

export default class HouseList extends React.Component {

/** Setting the state for the houses array. Most of the time class
 * components require a constructor and super constructor; however, I
 * have used an alternative syntax here (just experimenting) called 
 * class fields.*/
    state = { houses: [] }

/** I'm using componentDidMount to call my fetchHouses function, which
 * uses .get() from HousesApi to fetch the data from the server.
*/
    componentDidMount() {
        this.fetchHouses();
    };

/** Calling the get method on the imported housesApi. This function is 
 * asynchronous because it might take some time for the conversation
 * with the server, and I want other things to be happening at the 
 * same time. And then I set the state of the houses array.*/    
    fetchHouses = async() => {
        const houses = await housesApi.get();
        this.setState({ houses });
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
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    };
};

