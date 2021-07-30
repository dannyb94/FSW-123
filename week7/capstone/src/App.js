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