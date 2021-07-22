import React, { useContext } from "react";
import { UserContext } from "../context";

export default class ToDo extends React.Component {
    constructor () {
        super ()
        this.state = {edit:false, id: ""}
    }

    render(){
        //const context = useContext(UserContext);
    
        //const listItems = 
    
        return (
            <> 
            <UserContext.Consumer>
                {context => {
                return (
                    <div>{context.state.items.map((item) => {
                        console.log(item)
                        var id = item.id
            
                        return (
                            <div key = {item.id}>
                                <ul className="box">
                                    {this.state.edit === true && this.state.id === id ? (
                                        <li>
                                            <form className="enterNew"  id={this.state.id}  onSubmit={(e) => {
                                                context.editTodo (e)
                                                this.setState({edit:false, id: item.id})}
                                            }>
                                                <label>
                                                    <input className="sub" name="editValue" type="text"  value={context.value}  onChange={context.handleChange} />
                                                </label>
                                                <input className="sub"  id="special"  type="submit"  value="Submit" />
                                            </form>
                                            <button className="close" onClick={() => {
                                                this.setState({edit:false, id: item.id})
                                            }}>cancel</button> 
                                        </li>
                                    )
                                    : (<li>
                                        <input type="checkbox" className="items"  id={item.id}  checked={item.isCompleted}  onChange={context.toggleComplete}></input>
                                            <label>{item.text}</label>
                                            <button className="bye" onClick={() => context.dltBtn(item.id)}> X </button>
                                            <button className="edit" onClick={() => {
                                                this.setState({edit:true, id: item.id})
                                            }}>edit</button>
                                    </li>)}
                                </ul>
                            </div>
                        )
                    })}</div>
                    )}}
                </UserContext.Consumer>
            </>
        )
    };
}