//--Contact renders a simple contact form (name, email message, submit).

import React from "react";

// var btnClick = document.getElementsByClassName("send");
// console.log(btn)
// btnClick.addEventListener('click', () => {
//     var fln = document.getElementsByClassName("name").value;
//     if (fln.length > 1){
//         /*document.getElementById("name").value*/ fln = "";
//     }
// })

export default function Contact(){
    return (
        <div>
            <h1>Don't leave just yet!</h1>
            <em><p id="conPgPar">Shoot us an inquiry if you'd like us to stay in touch with you.</p></em>
            <form>
                <label className="labels">Your Name: 
                    <input type="text" className="name" placeholder="First & Last Name" required></input>
                </label>

                <br></br>

                <label className="labels">E-mail:
                    <input type="text" className="name" placeholder="E-mail Address" required></input>
                </label>

                <br></br>

                <label className="labels">Have a message?
                    <br></br>
                    <textarea rows="4" cols="30" className="name" placeholder="Begin typing"></textarea>
                </label>
            </form>

            <button className="send">Send</button>
        </div>
    )
}