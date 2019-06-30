import React, { Component } from 'react';
import Youtube from './Youtube';
import { gapiConfig } from './config';
import Search from './containers/Search';

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
        <Search />
        <Youtube />
      </div>
    );
  }
}

export default App;
