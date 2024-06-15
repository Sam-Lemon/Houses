/** Imported React and the useState hook.*/
import React, { useState } from 'react';


/** Here I'm creating a new function that takes in props and updates the state of 
 * the component. */
export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');


/** I make sure that the value inputted into the input field is a integer
 * and then I set it as the room's area.*/
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    };

/** The onSubmit variable here will take all of the user inputted data from 
 * the form and creates a new room that will be added into the rooms array 
 * later. Then it resets the form's input fields to empty for a better user
 * experience. Because pushing a submit button in a form defaults to reloading
 * the page, I used e.preventDefault() to stop that from happening.*/
    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('Invalid input');
        }
    };

/** Below is what the NewRoomForm will look like on the webpage. There is a title,
 * "Add a new room" and two input boxes with placeholders (name and area) for the
 * user to put information into, then a submit button to submit all that information.
 * I passed the handleAreaInput function through the eventlistener for the room's 
 * area and the setter for the room's name, setting it as the target.value onChange.*/
    return (
        <div className='new-room-form'>
        <h4 className='new-room-form-header'>Add a new room</h4>
        <form className='form-body' onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='name'
                className='name-input'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            <input 
                type='text'
                placeholder='area'
                className='area-input'
                onChange={handleAreaInput}
                value={area}
                />
            <button className='new-room-submit-btn' type='submit'>Add Room</button>
        </form>
    </div>
)
};




 

/** I was playing around using a modal, but didn't have the time to iron it out so that 
 * it worked correctly. Maybe in the future.*/
{/* <div class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Add a New Room:</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form onSubmit={onSubmit}>
                        <input
                            type='text'
                            placeholder='name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            />
                        <input 
                            type='text'
                            placeholder='area'
                            onChange={handleAreaInput}
                            value={area}
                            />
                        <button type='submit'>Add Room</button>
                </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
</div> 
    )
} */}
