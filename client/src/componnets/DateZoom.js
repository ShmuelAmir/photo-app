import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Menu, MenuItem } from '@mui/material'
import { ZoomIn } from '@mui/icons-material'

function DateZoom() {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleClick = (e) => {
        handleClose();
        navigate(`photo-app/date/${e.target.innerText}`);
    }

    return (
        <>
            <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
                <ZoomIn /> 
            </Button>
            <Menu 
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem divider onClick={handleClick}>day</MenuItem>
                <MenuItem divider onClick={handleClick}>month</MenuItem>
                <MenuItem onClick={handleClick}>year</MenuItem>
            </Menu>
        </>
    )
}

export default DateZoom
