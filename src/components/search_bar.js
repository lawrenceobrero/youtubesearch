import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  // Eventhandler
  onInputChange(event) {
    // event.persist();
    console.log(event);
  }

  render() {
    return(
      <div className="search-bar">
            <input
              value = {this.state.term}
              onChange={event => this.setState({ term: event.target.value })}/>

      </div>


    );
  }
}

// const SearchBar = () => {
//   return <input type="text"/>;
// };


export default SearchBar;
