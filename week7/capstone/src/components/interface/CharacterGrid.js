import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, loading }) => {
    return(
        <div>
            {loading ?
                <>
                    <h1>Loading...</h1>
                </>
                :
                <>
                    <section className='peeps'>
                        {items.map((item) => {
                            console.log(item)
                            return (<CharacterItem key={item.id} item={item}/>)
                        })}
                    </section>
                </>
            }
        </div>
    )
}

export default CharacterGrid;
