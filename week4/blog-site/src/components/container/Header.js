//Header will render the visible Links (Links to an external site.) to the components (Blog, About,  Contact)

import React from "react";
import { Link } from "react-router-dom";

export default function Header(){    
    return (
        <div>
            <header>
                <Link id="specialOp" to="/Blog">Blog</Link>
                <Link className="link" to="/About">About</Link>
                <Link className="link" to="/Contact">Contact</Link>
            </header>
        </div>
    )
}