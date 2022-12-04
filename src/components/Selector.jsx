import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

const Selector = () => {
  const handleChange = (event) => {}

  return (
    <FormControl fullWidth>
      <InputLabel
        id="demo-simple-select-label"
        style={{ marginTop: 15, fontSize: 14 }}
      >
        period
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        style={{ height: 37, marginTop: 23 }}
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0, borderBottom: 2, borderColor: 'rgb(87 83 78)'},
        }}
        label="Period"
        onChange={handleChange}
      >
        <MenuItem value={10}>Weekly</MenuItem>
        <MenuItem value={20}>Fortnightly</MenuItem>
        <MenuItem value={30}>Monthly</MenuItem>
        <MenuItem value={30}>Anually</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Selector
