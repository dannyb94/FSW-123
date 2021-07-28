import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Rick_and_Morty_logo.png'

export default function Header(){
    return(
        <div className='header'>
            <header>
                <Link to='/Home'>
                    <img src={logo} alt='' id='RMlogo'/>
                </Link>
                <br></br>
                <Link className='linked' to='/Characters'>Characters</Link>
                <Link className='linked' to='/Trailer'>Trailer</Link>
            </header>
        </div>
    )
}