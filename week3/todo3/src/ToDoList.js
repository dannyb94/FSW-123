import React from "react";

export default function ToDo({items}){

    const listItems = items.map((item) => {
        // completed(){
        //     this.props.completed(this.props.completed(this.props.id))
        // }

        // render(){}

        return (
            <div key = {item.id}>
                <ul>
                    <li>
                        <input type="checkbox" class="items" name="laundry" onclick={() => {this.completed()}}></input>
                        <label>{item.text}</label>
                    </li>
                </ul>
            </div>
        )
    });

    return (
        <>
            {listItems}
        </>
    )
}