import React from 'react';
import axios from 'axios';

export default function Delete({deleteChars}){

    const deleteChars = (charId) => {
        axios.delete(`https://rickandmortyapi.com/api/character/?name=${charId}`)
            .then(res => {
                setItems(prevItem => prevItem.filter(item => item.id !== charId))
            })
            .catch(err => console.log(err))
    }

    //const goDelete = deleteChars={deleteChars}

    return(
        <div>
            <button onClick={() => deleteChars(id)} className='dltBtn'>Delete</button>
        </div>
    )
}

//Trying to create a delete button component I can append to every character box in the grid.