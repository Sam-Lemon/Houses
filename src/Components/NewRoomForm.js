import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    };

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
