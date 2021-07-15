import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from './components/SearchParams';
import Details from './pages/Details';

function App() {
  const [pets, setPets] = useState([]);
  return (
    <div className='App'>
      <Router>
        <header>
          <Link to='/'>
            <h1 />
          </Link>
        </header>

        <Switch>
          <Route path='/details/:id'>
            <Details />
          </Route>
          <Route path='/'>
            <SearchParams pets={pets} setPets={setPets} />
          </Route>
        </Switch>
      </Router>

      {/* <Pet
        name={pets[0].name}
        breed={pets[0].breed}
        images={pets[0].images}
        location={`${pets[0].city}, ${pets[0].state}`}
      ></Pet> */}
    </div>
  );
}

export default App;
