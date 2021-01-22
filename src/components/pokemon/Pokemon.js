import React from 'react';
import Button from '@material-ui/core/Button';
import history from './History';

class Pokemon extends React.Component{
    constructor(props){
        super(props)
        this.getAPIData = this.getAPIData.bind(this);       
        this.state = {imageURL: '', pokemonID: '', poke: []}
    }

    async getAPIData() {
        // This code is provided, it can be complicated
        const url = "https://pokeapi.co/api/v2/pokemon";
        const nurl = this.props.match.url;
        const purl = url + nurl; // URL of the API
        const response = await fetch(purl); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use
        this.setState(
            {
                poke: responseJSON
            }
        );
    }
    
    componentDidMount() {
        // Start getting the API data from PokeAPI
        this.getAPIData();
        const pokemonIndex = this.props.match.params.pokemonID;
        const stringurl1 = "https://pokeres.bastionbot.org/images/pokemon/1.png"; // sprites from bashionbot.org
        const backstring1 = stringurl1.slice(0,-5); // splitting above string till pokemon/
        const imageURL = backstring1 + pokemonIndex + ".png"; // creating the imageURL using sprites for each pokemon
        this.setState({imageURL: imageURL, pokemonID:pokemonIndex}); // updating the state variables
    }
    
    render(){
        const stringurl2 = "https://www.pokemon.com/us/pokedex/"; // main URL for pokedex
        const pokeurl = stringurl2 + this.state.poke.name + "/"; // creating the url for each pokemon in pokedex
        const Name = "" + this.state.poke.name;
        const CapName = Name.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ');
        // Return some JSX here...
        return( 
            <div className = "pokeInfo">
                    <p className = "Pokename">{CapName}</p> 
                    <img className = "pokeImage" src = {this.state.imageURL} alt = {this.state.name} />
                    <p></p>
                    <a className = "pokelink" href = {pokeurl}>Link for {CapName}</a>
                    <p className = "weight">Weight: {this.state.poke.weight}</p>
                    <p className = "height">Height: {this.state.poke.height}</p>
                    <p className = "basexp">Base Experience: {this.state.poke.base_experience}</p>
                    <div className = "buttonforpoke">
                        <Button variant = "contained" color="secondary"  onClick={() => history.push("")}>
                            <p className = "backpage">Back to Pokedex</p>
                        </Button>  
                    </div>
            </div>
        );
    }
    
}

export default Pokemon;