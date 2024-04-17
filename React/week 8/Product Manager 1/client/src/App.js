import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';


function App() {

    return ( 
      <div >
        <Routes>
          <Route path = '/' default element = { < Main / > }/>
        </Routes> 
      </div>
    );
}

export default App;