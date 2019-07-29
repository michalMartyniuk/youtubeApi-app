import React, { useState } from "react";
import { searchYoutube } from './functions';
import styles from './styles';
import { styled } from '@material-ui/styles';

const Input = styled("input")(styles.input),
    Button = styled("button")(styles.button)

export default ({setVideos}) => {
    const [inputValue, setInputValue] = useState(""); 
    return (
        <div className='search-container'>
            <Input
                type="text" 
                value={ inputValue } 
                onChange={ (e) => setInputValue(e.target.value) } 
            />
            <Button 
                onClick={ async () => {
                    const videos = await searchYoutube(inputValue);
                    setVideos(videos.items)
                }}
            >Search</Button>
        </div>
    )
}

