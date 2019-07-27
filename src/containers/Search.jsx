import React, { useState } from "react";

export default function Search() {
    const [inputValue, setInputValue] = useState("Enter value"); 

    return (
        <div className='search-container'>
            <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={() => searchYoutube(inputValue)}>Search</button>
        </div>
    )
}

async function searchYoutube (query) {
    const { result } = await window.gapi.client.youtube.search.list({
        "part": "id, snippet",
        "q": query
    });
    const videos = result.items;
    this.props.videos(videos);
}