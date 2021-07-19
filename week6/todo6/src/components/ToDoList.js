import React, { useContext } from "react";
import { UserContext } from "../context";

export default class ToDo extends React.Component {
    constructor () {
        super ()
        this.state = {edit:false, id: ""}
    }

    render(){
        const context = useContext(UserContext);
    
        const listItems = this.props.items.map((item) => {
            console.log(item)
            var id = item.id

            return (
                <div key = {item.id}>
                    <ul className="box">
                        {this.state.edit === true && this.state.id === id ? (
                            <li>
                                <form className="enterNew"  id={this.state.id}  onSubmit={(e) => {
                                    this.props.editTodo (e)
                                    this.setState({edit:false, id: item.id})}
                                }>
                                    <label>
                                        <input className="sub" name="editValue" type="text"  value={this.props.value}  onChange={this.props.handleChange} />
                                    </label>
                                    <input className="sub"  id="special"  type="submit"  value="Submit" />
                                </form>
                                <button className="close" onClick={() => {
                                    this.setState({edit:false, id: item.id})
                                }}>cancel</button> 
                            </li>
                        )
                        : (<li>
                            <input type="checkbox" className="items"  id={item.id}  checked={item.isCompleted}  onChange={this.props.toggleComplete}></input>
                                <label>{item.text}</label>
                                <button className="bye" onClick={() => this.props.dltBtn(item.id)}> X </button>
                                <button className="edit" onClick={() => {
                                    this.setState({edit:true, id: item.id})
                                }}>edit</button>
                        </li>)}
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