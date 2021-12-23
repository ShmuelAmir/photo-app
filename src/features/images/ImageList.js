import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { getImages } from './imageSlice'
import Image from './Image'

function ImageList() {
  const images = useSelector(getImages);
  
  return (
    <Grid container spacing={2}>
      {images.map(image => <Image key={image.link} image={image}/>)}
    </Grid>
  )
}

export default ImageList;
