import React, { useState } from "react";

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e)
        getQuery(e)
    }

    return(
        <div className='header'>
            <form>
                <input type='text' className='inputBar' placeholder='Search Character Log' value={text} onChange={(e) => {handleChange(e.target.value)} }/>
            </form>
        </div>
    )
}

export default Search;