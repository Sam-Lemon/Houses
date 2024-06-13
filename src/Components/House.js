/** I imported React and my NewRoom for this file.*/
import React from 'react';
import NewRoom from './NewRoom';

/** House is a function that takes in props, which the first variable 
 * denotes are house and updateHouse. Within this function we have a 
 * deleteRoom, addNewRoom, and rooms function. */
export const House = (props) => {
    const {house, updateHouse} = props;

/** The deleteRoom function takes in a roomId parameter (so that React can
 * keep track of which specific room we'll be dealing with).
 * 
 * 
 * NEED MORE INFORMATION IN THIS COMMENT
 * 
 * 
*/
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updatedHouse(updatedHouse);
    }

/** The addNewRoom function takes room as a parameter, and calls the
 * updateHouse function which uses the spread operator to spread out the
 * house object, and takes the room and puts it into the house object.
*/
    const addNewRoom = (room) => updateHouse({...house, room: [...house.rooms, room]})

/** The rooms function maps over the house.rooms array, gives each room
 * a unique key that is their index (which is safe to do here since I'm 
 * only working with a small set of data, but if it were a larger project
 * using the index as the key is not ideal, I would pick something more
 * unique). Then it creates each instance of a room as a list item, so 
 * multiple rooms can be listed at the same time. The button uses the 
 * onClick event listener to call the deleteRoom function, passing in the
 * specific room id that I want to delete.
*/
    const rooms = () => { 
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label>(
                        `Room Name: ${room.name} 
                        Area: ${room.area}`)
                    </label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    };

/**  NEED A COMMENT HERE!!!!!!!!!!!!!!!!!!!1*/    
    return (
        <div>
            <h1>{house.name}</h1>
            {rooms({rooms, houseId: house._id, deleteRoom})}
            <NewRoom addNewRoom={addNewRoom} />
        </div>
    );





}