import React from 'react';
import Button from '@material-ui/core/Button';
import history from './History';


class PokeCell extends React.Component {
    constructor(props) {
        super(props)
        this.getAPIData = this.getAPIData.bind(this);                                 // for API call
        this.state = {name: '', imageURL: '',pokemonIndex: '', pokeForm: '',poke: []} // state variables
        this.pokeForm = this.pokeForm.bind(this);                                     // for button press
    }

    async getAPIData() {
        // This code is provided, it can be complicated
        const url = this.props.url; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI

        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use
        this.setState(
            {
                poke: responseJSON
            }
        );
    }
    componentDidMount()
    {
        this.getAPIData(); // Start getting the API data from PokeAPI
        const url = this.props.url; // url of individual pokemon
        const Name = this.props.name;   // name of the pokemon 
        const pokemonIndex = url.split("/")[url.split('/').length -2]; // getting index of pokemon
        const stringurl1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"; // sprites
        const backstring1 = stringurl1.slice(0,73); // splitting above string till pokemon/
        const imageURL = backstring1 + pokemonIndex + ".png"; // creating the imageURL using sprites for each pokemon
        this.setState({name: Name, imageURL: imageURL, pokemonIndex:pokemonIndex}); // updating the state variables
    }

    pokeForm(){
        const stringurl2 = "https://www.pokemon.com/us/pokedex/"; // main URL for pokedex
        const pokeForm = stringurl2 + this.state.name + "/";      // creating the url for each pokemon in pokedex
        this.setState({pokeForm: pokeForm});                      // updating the state variable  
    }

    render () {
        // Converting all names from lower case into the format "Abcdef..""
        const Name  = this.state.name.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ');
        // Return some JSX here...
        return (
            <div className = "pokecell">
                    <p className = "PokeName">{Name}</p> 
                    <Button onClick = {() => history.push(`/${this.state.pokemonIndex}`)}>
                            <img className = "pokeimage" src = {this.state.imageURL} alt = {this.state.name} />
                    </Button>
            </div>
        );
        
    }
}


export default PokeCell;
