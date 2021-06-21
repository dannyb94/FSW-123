import './App.css';
import ToDo from './ToDoList';
import { items } from './store';

function App() {

  return (
    <div>
      <h1>Checklist</h1>
      <ToDo items = {items}/>
    </div>
  )
}

export default App;
