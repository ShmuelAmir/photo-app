import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { setFavorite, setImages, getLastResult, getFavorite } from '../features/images/imageSlice';
import { getArrayFromStorage } from '../app/storageFunctions';

function FavoriteButton() {
    const dispatch = useDispatch();
    const lastResult = useSelector(getLastResult);
    const checked = useSelector(getFavorite);

    // toggle the images in the store between favorite images and the resulte
    const handleFavoriteClick = () => {
        dispatch(setFavorite(!checked));
        dispatch(setImages(checked ? getArrayFromStorage('favorite') : lastResult));
    }

    return (
        <Button onClick={handleFavoriteClick}>
            {checked ? <FavoriteBorder /> : <Favorite />}
        </Button>
    )
}

export default FavoriteButton;
