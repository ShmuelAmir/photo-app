import React, { useState } from 'react';
import { FormControlLabel, Button, Menu, MenuItem, RadioGroup, Radio } from '@mui/material'
import { Tag } from '@mui/icons-material';
import { getArrayFromStorage } from '../app/storageFunctions';

function TagsMenu({ checkFunction, initVal }) {
  const [value, setValue] = useState(initVal);
  const [anchorEl, setAnchorEl] = useState(null);
  const options = getArrayFromStorage('tags');

  // call the checkFunction when the selection changes
  const handleChange = (e) => {
    checkFunction(e.target.value, value);
    setValue(e.target.value);
  }

  return (
    <>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Tag />
      </Button>
      <Menu 
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
      >
        <RadioGroup
        value={value}
        onChange={handleChange}>
          {options.map((option) => (
            <MenuItem key={option}>
              <FormControlLabel 
              value={option} 
              control={<Radio />} 
              label={option} />
            </MenuItem>
          ))}
          <MenuItem key='all'>
            <FormControlLabel 
            value='all' 
            control={<Radio />} 
            label='all' />
          </MenuItem> 
        </RadioGroup>
      </Menu>
    </>
  );
}

export default TagsMenu;
