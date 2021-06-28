import React from "react";
import { items } from './store';

export default class ToDo extends React.Component {

    render(){
        const listItems = items.map((item) => {
            return (
                <div key = {item.id}>
                    <ul>
                        <li>
                            <input type="checkbox" class="items" checked={this.props.isCompleted} onChange={this.props.toggleComplete}></input>
                            <label>{item.text}</label>
                            <button onClick = {() => this.props.dltBtn(this.props.id)}>X</button>
                        </li>
                    </ul>
                </div>
            )
        })
    
        return (
            <>
                {listItems}
            </>
        )
    };
}