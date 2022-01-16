import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { addToTagAraay } from '../app/storageFunctions';

function TagInput() {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    
    // add tag to the tag list
    const handleSubmit = (e) => {
        if (input !== "" && e.key === "Enter") {
            addToTagAraay('tags', input);
            setInput("");
        }
    }

    return (
        <TextField 
        size='small'
        color="success"
        value={input}
        onChange={handleChange}
        onKeyPress={handleSubmit}
        placeholder='add tag...'
        />
    )
}

export default TagInput
