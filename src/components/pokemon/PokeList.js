import React from 'react';
import PokeCell from './PokeCell';



class PokeList extends React.Component {
    constructor(props) {
        super(props)
        this.getAPIData = this.getAPIData.bind(this);
        this.state = {pokemon: []};
    }

    async getAPIData() {
        // This code is provided, it can be complicated
        const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use
        const responsePokemon = responseJSON.results;

        this.setState(
            { pokemon: responsePokemon }// Add the pokemon we got from the API to the pokemon state
        );
    }
    componentDidMount() {
        // Start getting the API data from PokeAPI
        this.getAPIData();
    }

    render () {
        return (
            <div>
               {this.state.pokemon.map(pokemon => (<PokeCell 
               key={pokemon.name} name={pokemon.name} url={pokemon.url}/>))}
            </div>
        );
    }
}


export default PokeList;