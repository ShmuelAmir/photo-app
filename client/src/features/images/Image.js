import React, { useState } from 'react'
import DownloadLink from "react-download-link";
import { Card, CardActions, CardHeader, CardMedia, Checkbox, Grid, IconButton, Tooltip } from '@mui/material'
import { Download, Favorite, FavoriteBorder } from '@mui/icons-material'
import TagsMenu from '../../componnets/TagsMenu';
import { getArrayFromStorage, addToTagAraay, removeFromTagAraay } from '../../app/storageFunctions'
import { getDataFromURL } from './imageApi'

function Image({ image }) {
    const favArr = getArrayFromStorage('favorite');
    const isChecked = Boolean(favArr.find(item => item.link === image.link));
    const [checked, setChecked] = useState(isChecked);

    // toggle an image in and out from favorite
    const handleChange = (e) => {
        setChecked(e.target.checked);
        !checked ? 
            addToTagAraay('favorite', image)
            : removeFromTagAraay('favorite', image);
    }

    const tagArr = getArrayFromStorage('tags');
    // determine the current tag of the image
    let currVal = 'all';
    for (let i = 0; i < tagArr.length; i++){
        if (Boolean(getArrayFromStorage(tagArr[i]).find(item => item.link === image.link))) {
            currVal = tagArr[i];
            break;
        }
    }
    const [value, setValue] = useState(currVal);
    
    // toggle an image in and out from tag
    const toggleTag = (tag) => {
        if (value !== 'all') {
            removeFromTagAraay(value, image);
        }
        if (tag !== 'all') {
            addToTagAraay(tag, image);
        }
        setValue(tag);
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
                <CardHeader 
                title={image.title.lenght < 25 ?
                 image.title 
                 : image.title.slice(0, 25)} />
                <CardMedia 
                component="img" 
                height="200" 
                image={image.link} 
                alt={image.title}/>
                <CardActions>
                     <Tooltip title="add to favorite">
                        <Checkbox 
                        checked={checked}
                        onChange={handleChange}
                        icon={<FavoriteBorder />} 
                        checkedIcon={<Favorite />} />
                    </Tooltip>
                    <DownloadLink 
                    label={
                        <Tooltip title="save photo">
                            <IconButton>
                                <Download />
                            </IconButton>
                        </Tooltip>
                    }
                    filename={image.title + ".png"}
                    exportFile={
                        () => Promise.resolve(getDataFromURL(image.link))
                    } />
                    <TagsMenu handleChange={toggleTag} value={value}/>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Image;
