import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/new" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
