import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Selector = () => {


  const handleChange = (event) => {
  };

  return (
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Period</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    label="Period"
    onChange={handleChange}
  >
    <MenuItem value={10}>Weekly</MenuItem>
    <MenuItem value={20}>Fortnightly</MenuItem>
    <MenuItem value={30}>Monthly</MenuItem>
    <MenuItem value={30}>Anually</MenuItem>
  </Select>
</FormControl>
  );
}

export default Selector;