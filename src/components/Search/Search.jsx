import React, { useState } from "react";
import { searchYoutube } from './functions';
import { useStyles } from './styles';

export default ({setVideos}) => {
    const [inputValue, setInputValue] = useState(""); 
    const classes = useStyles({ bg: "blue"});

    return (
        <div className='search-container'>
            <input
                type="text" 
                value={ inputValue } 
                onChange={ (e) => setInputValue(e.target.value) } 
            />
            <button 
                className={classes.button}
                onClick={ async () => {
                    const videos = await searchYoutube(inputValue);
                    setVideos(videos.items)
                }}
            >Search</button>
        </div>
    )
}

