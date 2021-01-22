import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import TopBar from './components/TopBar';
import PokeList from './components/pokemon/PokeList';
import Pokemon from './components/pokemon/Pokemon';
import history from './components/pokemon/History';

import './App.css';
import './components/pokemon/PokemonCell.css';
import './components/pokemon/PokemonId.css';
import './components/TopBar.css';


class App extends React.Component {
  
  render(){
    return( <div className = "App">
      <TopBar />
      <Router history = {history}>
        <Switch>
          <Route exact path="/">
            <p className = "PokeKnowmore">Click on Pokemon to know more</p>
            <PokeList />
          </Route>
          <Route exact path="/:pokemonID" component = {Pokemon} />
        </Switch>
      </Router>
    </div>);
  }
}

export default App;
