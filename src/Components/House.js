/** I imported React and my NewRoom for this file.*/
import React from 'react';
import { NewRoomForm } from './NewRoomForm';

/** House is a function that takes in props, which the first variable 
 * denotes are house and updateHouse. Within this function we have a 
 * deleteRoom, addNewRoom, and rooms function. */
export const House = (props) => {
    const { house, updateHouse } = props;

/** The deleteRoom function takes in a roomId parameter (so that React can
 * keep track of which specific room we'll be dealing with), uses the spread
 * operator to open up the house object in question, and then filters out the specific
 * room I want to delete. Then it updates the house.*/
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

/** The addNewRoom function takes room as a parameter, and calls the
 * updateHouse function which uses the spread operator to spread out the
 * house object, and takes the room and puts it into the house object.
*/
    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]})
    

/** The rooms function maps over the house.rooms array, gives each room
 * a unique key that is their index (which is safe to do here since I'm 
 * only working with a small set of data, but if it were a larger project
 * using the index as the key is not ideal, I would pick something more
 * unique). Then it creates each instance of a room as a list item, so 
 * multiple rooms can be listed at the same time. The button uses the 
 * onClick event listener to call the deleteRoom function, passing in the
 * specific room id that I want to delete.
*/
    const rooms = () => ( 
        <ul>
            {house.rooms.map((room, index) => (
                <div className='card' key={index}>
                    <div className='card-body'>
                        <h4>{room.name}</h4>
                        <hr/>
                        <p>{room.area} sqft</p>
                        {/* <button className='add-btn' onClick={(e) => NewRoomForm}>Add</button> */}
                        <button className='card-btn' onClick={(e) => deleteRoom(room._id)}>Delete</button>
                    </div>
                </div>





            ))}
        </ul>
    );

/**  NEED A COMMENT HERE!!!!!!!!!!!!!!!!!!!*/    
    return (
        <div>
            <h1>{house.name}</h1>
            <div>
                <NewRoomForm addNewRoom={addNewRoom} />
            </div>
            <div>
                {rooms({rooms, houseId: house._id, deleteRoom})}
            </div>
        </div>
    );
};
















