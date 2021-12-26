import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography, Stack } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import Actions from '../componnets/Actions'
import { clearAll } from '../features/images/imageSlice'

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearAll());
    navigate('photo-app/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
       <AppBar>
        <Toolbar>
          <Stack 
          direction="row" 
          alignItems="center" 
          spacing={2}
          sx={{ flexGrow: 1 }} 
          onClick={handleClick}>
            <PhotoCamera sx={{ cursor: 'pointer' }} />
            <Typography variant="h6" sx={{ cursor: 'pointer' }}>Photos</Typography>
          </Stack>
          <Actions />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;
