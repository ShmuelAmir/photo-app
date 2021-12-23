import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup } from '@mui/material';
import TagsMenu from './TagsMenu';
import TagInput from './TagInput';
import DateZoom from './DateZoom';
import FavoriteButton from './FavoriteButton';
import { setImages, getLastResult } from '../features/images/imageSlice';
import { getArrayFromStorage } from '../app/storageFunctions';

function Actions() {
  const dispatch = useDispatch();
  const lastResult = useSelector(getLastResult);

  // alternate the images in the store between specific tags and the resulte
  const tagFilter = (tag) => {
    dispatch(setImages(tag === 'all' ? lastResult : getArrayFromStorage(tag)
    ));
  }

  return (
    <ButtonGroup variant="contained" disableElevation>
      <FavoriteButton />
      <DateZoom />
      <TagsMenu checkFunction={tagFilter} initVal='all' />
      <TagInput />
    </ButtonGroup>
  )
}

export default Actions
