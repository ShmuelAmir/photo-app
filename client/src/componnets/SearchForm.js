import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Paper, InputBase, IconButton, CircularProgress } from '@mui/material'
import { Search } from '@mui/icons-material'
import { fetchAsyncImages, getStatus } from '../features/images/imageSlice'

function SearchForm() {
    const dispatch = useDispatch();
    const [ input, setInput ] = useState('');
    const status = useSelector(getStatus);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input !== '') {
            dispatch(fetchAsyncImages(input));
            setInput('');
        }
    }
    
    return (
        <Paper
        onSubmit={handleSubmit}
        elevation={3}
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 450, height: 50}}
        >
            <InputBase
            value={input}
            onChange={handleChange}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Images..."
            inputProps={{ 'aria-label': 'Search Image' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                {status === 'loading' ? <CircularProgress size={24}/> : <Search />}
            </IconButton>
        </Paper>
    )
}

export default SearchForm;
