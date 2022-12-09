import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

const Selector = ({
  id,
  name,
  required,
  value,
  onChange
}) => {
  
  return (
    <FormControl style={{ minWidth: 120 }}>
      <InputLabel
        id="demo-simple-select-label"
        style={{ marginTop: 15, fontSize: 14 }}
      >
        frequency
      </InputLabel>
      <Select
        id={id}
        name={name}
        required={required}
        onChange={onChange}
        value={value}
        labelId="demo-simple-select-label"
        style={{ height: 37, marginTop: 23 }}
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": {
            border: 0,
            borderBottom: 2,
            borderColor: "rgb(87 83 78)",
          },
        }}
      >
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="fortnightly">Fortnightly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
        <MenuItem value="annually">Annually</MenuItem>
      </Select>
    </FormControl>
  )
}

Selector.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
};

export default Selector;
