import React, { Component } from "react"

export default class Search extends Component {
    state = {
        searchValue: ""
    }
    handleInput = (e) => {
        this.setState({searchValue: e.target.value})
    }    
    searchYoutube = async(query) => {
        const { result } = await window.gapi.client.youtube.search.list({
            "part": "id, snippet",
            "q": query
        });
        const videos = result.items;
        this.setState({videos});
    }
    render() {
        console.log(this.state.searchValue)
        return (
            <div className='search-container'>
                <input type="text" onChange={this.handleInput} value={this.state.searchValue}/>
                <button onClick={() => this.searchYoutube('iron maiden')}>Search</button>
            </div>
        )
    }
}
