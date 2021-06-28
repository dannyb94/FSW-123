/*
------ INSTRUCTIONS ------
• Define a state variable for each die.
• Create a method that will generate two random numbers and store them in state.
• Render two randomly generated die and a button for the user to generate a new pair on click
• Create a component Die that will rendering the UI of each die
*/

import React from 'react'

export default class Die extends React.Component {

    render(){
        return (
            <img src = {'./images/cube'} alt = 'blue dice'/>
        )
    }
}