import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/container/Header';
import Body from './components/container/Body';

function App() {

  return (
    <BrowserRouter>
      <div id='contain'>
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
/*
•3 pages
•use React Router
•use useState or Redux
•have 10 components (doesn't have to be that many, not necessary)
•at least 2 CRUD operations (Create, Read, Update, Delete)
•responsive (if I have time)
*/