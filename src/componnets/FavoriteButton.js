import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { setImages, getLastResult } from '../features/images/imageSlice';
import { getArrayFromStorage } from '../app/storageFunctions';

function FavoriteButton() {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(true);
    const lastResult = useSelector(getLastResult);

    // toggle the images in the store between favorite images and the resulte
    const handleFavoriteClick = () => {
        setChecked(!checked);
        dispatch(setImages(checked ? getArrayFromStorage('favorite') : lastResult));
    }

    return (
        <Button onClick={handleFavoriteClick}>
            {checked ? <FavoriteBorder /> : <Favorite />}
        </Button>
    )
}

export default FavoriteButton;
