import React, { Component } from 'react';
import { gapiConfig } from './gapi.config';
import Search from './containers/Search';
import VideoList from './components/VideoList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      videos: []
    }
  }
  componentDidMount() {
    window.gapi.load('client', gapiConfig)   
  }
  
  render() {
    return (
      <div className="App">
        <Search videos={videos => this.setState({videos})}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
