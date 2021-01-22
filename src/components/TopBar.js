import React from 'react';


class TopBar extends React.Component {
    render () {
        return (<div className = "navbar">
            <h1 className = "Title">Pokedex</h1>
            <p className = "Knowmore">To know more, visit
                <a href ="https://www.pokemon.com/us/pokedex/">  https://www.pokemon.com/us/pokedex/</a>
            </p>
            </div>);
    }
}
export default TopBar;