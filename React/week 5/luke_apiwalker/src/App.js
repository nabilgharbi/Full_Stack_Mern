import './App.css';
import { Route, Switch } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import Form from './components/Form';
import Error from './components/Error';
import { useHistory } from 'react-router-dom';

function App() {

const history = useHistory();
console.log("history: " +history)

  return (
    <div className="App">
      <Form history={ history }/>
      <Switch>
        <Route exact path="/people/:id">
          <People  history={history}/>
        </Route>
        <Route exact path="/planets/:id">
          <Planets  history={history} />
        </Route>
        <Route path="/:error">
          <Error/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
