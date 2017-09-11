import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyCljwccz0u-2KIcXeU4Pg_kriTGSmd2p8U';



// Create new component. This component should produce some HTML
// const App = () => {
//   return (
//     <div>
//       <SearchBar/>
//     </div>
//   );
//
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]

       });
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>

        </div>



      </div>
    );
  }
}



// Take this component's genrated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementById('root'));
