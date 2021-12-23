import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import SearchForm from '../componnets/SearchForm' 
import ImageList from '../features/images/ImageList'
import ImageDate from '../features/images/ImageDate'

function Main() {
    return (
        <Stack 
        bgcolor='#EAEEF3' 
        spacing={2} 
        alignItems='center' 
        mt={7} 
        p={5}>    
            <Routes>
                <Route path="/" element={
                    <>
                        <SearchForm /> 
                        <ImageList />
                    </>
                } />
                <Route path="date/:dateMonthYear" element={<ImageDate />} />
            </Routes>
        </Stack>
    )
}

export default Main;