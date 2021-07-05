import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/container/Header';
import Body from './components/container/Body';

//In App.js, there will be two main components to render the app (Header and Body)

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Body/>
      </div>
    </BrowserRouter>
  );
}

export default App;

// blogger = {items}