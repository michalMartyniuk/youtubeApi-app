import React, { useState } from "react";

export default function Search({setVideos}) {
    const [inputValue, setInputValue] = useState("something"); 

    function handler_input(event) {
        setInputValue(event.target.value)
    }

    async function handler_search() {
        const videos = await searchYoutube(inputValue);
        setVideos(videos.items)
    }

    return (
        <div className='search-container'>
            <input type="text" value={ inputValue } onChange={ handler_input } />
            <button onClick={ handler_search }>Search</button>
        </div>
    )
}

async function searchYoutube(query) {
    const { result } = await window.gapi.client.youtube.search.list({
        "part": "id, snippet",
        "q": query
    });
    return result
}