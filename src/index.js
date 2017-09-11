import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCljwccz0u-2KIcXeU4Pg_kriTGSmd2p8U';
// Create new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );

}
// Take this component's genrated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementById('root'));
