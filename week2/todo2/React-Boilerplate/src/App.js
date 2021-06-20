import './App.css';
import { list } from './store';

function App() {
  for (var i = 0; i < list.length; i++){
    if(list[i].item >= 0){
      console.log(list[i])
    }
  }

  //const listItems = list.map((item, index) => <li key = {index}> {item}</li>);
  
  /*return (
    <>
      <ul>{listItems}</ul>
    </> 
  );*/
}

export default App;
