import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  
    render() {
        return (
            <div className="searchDiv">
                 <input onChange={this.props.searchChange} className="searchBar" name="searchBar" type="search" placeholder="Search"></input>
            </div>
        );
    }
}

export default Search;