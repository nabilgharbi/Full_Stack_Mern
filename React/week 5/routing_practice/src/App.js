import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import WordNumColor from './components/WordNumColor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:word" element={<WordNumColor/>}/>
        <Route path="/:word/:colorOne/:colorTwo" element={<WordNumColor/>}/>
      </Routes>
    </div>
  );
}

export default App;