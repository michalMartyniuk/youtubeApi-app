import React, { Component } from 'react';
import Youtube from './Youtube';
import { gapiConfig } from './config';

class App extends Component {
  constructor() {
    super()
    this.state = {
      videos: []
    }
  }
  componentDidMount() {
    window.gapi.load('client', () => {
      gapiConfig().then(() => {
        this.searchYoutube().then(console.log)
      })
    })   
  }
  searchYoutube = () => window.gapi.client.youtube.search.list({
    "part": "id, snippet"
  })
  render() {
    return (
      <div className="App">
        <Youtube />
      </div>
    );
  }
}

export default App;
