import React from 'react';

const CharacterItem = ({ item }) => {
    return(
        <div id='outerBox'>
            <div id='innerBox'>
                <div className='front'>
                    <img src={item.image} alt='' />
                </div>
                <div className='back'>
                    <h3>{item.name}</h3>
                    <ul>
                        <li>{item.origin.name}</li>
                        <li>{item.species}</li>
                        <li>{item.gender}</li>
                        <li>{item.status}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;
