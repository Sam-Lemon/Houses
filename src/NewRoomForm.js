import React, { useState } from 'react';

const NewRoomForm = (props) => {
    const [roomName, setRoomName] = useState('');
    const [roomArea, setRoomArea] = useState('');

    const [newRoomName, setNewRoomName] = useState('');
    const [newRoomArea, setNewRoomArea] = useState('');

function postNewRoom (e) {
    e.preventDefault()


return (
    <div>
        <form>
            <h2>Add New Room:</h2>

            <label>Room Name:</label>
            <input onChange={(e) => setRoomName(e.target.value)}></input>

            <label>Area</label>
            <input onChange={(e) => setRoomArea(e.target.value)}></input>

            <button onClick={(e) => postNewRoom(e)}>Submit</button>

        </form>
    </div>
    )}
    console.log('testing postNewRoom' + postNewRoom);
}



export default NewRoomForm;